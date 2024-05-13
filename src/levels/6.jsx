import { RigidBody } from "@react-three/rapier";
import { MeshReflectorMaterial, Float, Text, useGLTF, Html } from '@react-three/drei'
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, InstancedRigidBodies, CylinderCollider } from '@react-three/rapier'
import * as THREE from 'three'
import '../style.css'

export default function Level6({ setLevel, setScore }) {
    const twister = useRef();
    const [name, setName] = useState('');
    const [submitting, setSubmitting] = useState(false);


    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const eulerRotation = new THREE.Euler(0, time * 10, 0)
        const quaternionRotation = new THREE.Quaternion()
        quaternionRotation.setFromEuler(eulerRotation)
        twister.current.setNextKinematicRotation(quaternionRotation)

        const angle = time * .5
        const x = Math.cos(angle) * 2
        const z = Math.sin(angle) * 2
        twister.current.setNextKinematicTranslation({ x: x, y: - 0.8, z: z })
    })

    const hamburger = useGLTF('./hamburger.glb')

    const cubesCount = 100
    const instances = useMemo(() => {
        const instances = [];

        for (let i = 0; i < cubesCount; i++) {
            instances.push({
                key: 'instance_' + i,
                position:
                    [
                        (Math.random() - 0.5) * 8,
                        6 + i * 0.2,
                        (Math.random() - 0.5) * 8,
                    ],
                rotation: [Math.random(), Math.random(), Math.random()],
            })
        }

        return instances;
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        
        try {
            
            const response = await fetch('/api/leaderboard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    score: score, 
                }),
            });
    
            if (response.ok) {
                console.log('Leaderboard data submitted successfully');
            } else {
                
                console.error('Failed to submit leaderboard data');
            }
        } catch (error) {
            console.error('Error submitting leaderboard data:', error);
        }
    
        setSubmitting(false);
    };

    return (
        <>
            <RigidBody type='fixed' >
                <mesh position-y={-1.5} rotation-x={- Math.PI * 0.5} scale={7}>
                    <planeGeometry />
                    <MeshReflectorMaterial
                        resolution={550}
                        mirror={0.75}
                        color="lightblue" />
                </mesh>
            </RigidBody>

            <RigidBody colliders={false} position={[1, 8, 1]}>
                <primitive object={hamburger.scene} scale={0.5} />
                <CylinderCollider args={[0.5, 1.25]} />
            </RigidBody>

            <RigidBody
                ref={twister}
                position={[0, - 0.8, 0]}
                friction={0}
                type="kinematicPosition"
            >
                <mesh castShadow scale={[0.4, 0.4, 3]}>
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.5]} />
                <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, - 5.5]} />
                <CuboidCollider args={[0.5, 2, 5]} position={[5.5, 1, 0]} />
                <CuboidCollider args={[0.5, 2, 5]} position={[- 5.5, 1, 0]} />
            </RigidBody>

            <InstancedRigidBodies instances={instances}>
                <instancedMesh castShadow receiveShadow args={[null, null, cubesCount]}>
                    <boxGeometry />
                    <meshStandardMaterial color="white" metalness={1} roughness={0.1} />
                </instancedMesh>
            </InstancedRigidBodies>

            <Html>
                <div className="form" style={{ position: 'absolute', top: -200, right: -450 }}>
                    <form onSubmit={handleSubmit}>
                    <h2 className="form__score">Final Score: {setScore} </h2>
                        <label className="form__name" htmlFor="name">Enter Player Name:</label><br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name here..."
                            required
                            className="form__input"
                        /> <br />
                        <input type="hidden" name="score" value={setScore} />
                        <button className="form__button" type="submit" disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </Html>

            <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={2}
                    color="white"
                    position-y={-4}
                    position-x={-15}
                    textAlign="left"
                    //add onclick after
                >Home  </Text>

            <Float
                speed={4}
                floatIntensity={3}>
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={2}
                    color="Green"
                    position-y={7}
                    position-x={-7}
                    textAlign="left"
                >Game Complete  </Text>
            </Float>

        </>
    )
}