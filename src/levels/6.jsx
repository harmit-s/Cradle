import { RigidBody } from "@react-three/rapier";
import { MeshReflectorMaterial, Float, Text, Html } from '@react-three/drei'
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, InstancedRigidBodies } from '@react-three/rapier'
import * as THREE from 'three'
import '../style.css'
import axios from "axios";

export default function Level6({ setLevel, setScore }) {
    const twister = useRef();

    const score = setScore

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

        const form = event.target;
        const name = form.name.value;

        if (name === "") {
            alert("You must fill out name");
            return;
        }

        const playerData = {
            name,
            score,
        };
        
        try {
            const response = await axios.post("https://cradle-backend-fb5105635aaa.herokuapp.com/", playerData); 
    
            if (response.status === 201) {
                alert('Leaderboard data submitted successfully');
                setLevel(7)
            } else {
                alert('Failed to submit leaderboard data');
            }
        } catch (error) {
            console.error('Error submitting leaderboard data:', error);
        }
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
                    <h2 className="form__score">Final Score: {score} </h2>
                        <label className="form__name" htmlFor="name">Enter Player Name:</label><br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name here..."
                            required
                            className="form__input"
                        /> <br />
                        <input type="hidden" name="score" value={score} />
                        <button className="form__button" type="submit">Submit</button>
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
                    onClick={() => setLevel(0)}
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