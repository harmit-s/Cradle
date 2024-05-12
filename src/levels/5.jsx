import { Environment, MeshReflectorMaterial, Float, Text } from '@react-three/drei'
import { useState, useRef } from 'react'
import { RigidBody } from '@react-three/rapier'
// import { useFrame } from '@react-three/fiber'
// import * as THREE from 'three'

export default function Level5({ setLevel, setScore }) {
    const [isLevelComplete, setIsLevelComplete] = useState(false);
    const redCube = useRef();
    const twister = useRef()
    const [clickCounter, setClickCounter] = useState(0);
    const [showCubes, setShowCubes] = useState(Array(5).fill(true));

    const handleCubeClick = (index) => {
        setShowCubes(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });

        setScore(prevScore => prevScore - 105);
        setClickCounter(prevCounter => prevCounter + 1);
    };

    const cubePositions = [
        [-6.5, 1.65, 1],
        [-6.5, 3.7, 1],
        [-6.5, 5.75, 1],
        [-1, 9.25, 1],
        [5, 13, 1],
        // [5, 10.75, .25],
        // [0, 12.8, .25]
    ];
    const cubeScales = [
        [5.5, 1, 4],
        [5.5, 1, 4],
        [5.5, 1, 4],
        [18, .5, 4]
        [5, 2.5, 5],
        // [10, 1, 5],
        // [4.5, 3, 5]
    ];




    const handleNextLevel = () => {
        setLevel(prevLevel => prevLevel + 1);
    }


    return (
        <>

            <Environment
                background
                files={'/environments/level5.jpg'}
            />

            <RigidBody type='fixed' >
                <mesh position-y={0} rotation-x={- Math.PI * 0.5} scale={22}>
                    <planeGeometry />
                    <MeshReflectorMaterial
                        resolution={550}
                        mirror={0.75}
                        color="lightblue" />
                </mesh>
            </RigidBody>

            <RigidBody type="fixed" restitution={0.2} ref={redCube}>
                <mesh position={[0, 13, 0]} ref={redCube}>
                    <boxGeometry />
                    <meshStandardMaterial color="red" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>

            {showCubes.map((showCube, index) => (
                showCube && (
                    <RigidBody type="fixed" key={index} restitution={0.4}>
                        <mesh
                            castShadow
                            position={cubePositions[index]}
                            scale={cubeScales[index]}
                            onClick={() => handleCubeClick(index)}
                        >
                            <boxGeometry />
                            <meshStandardMaterial color="mediumpurple" metalness={.7} roughness={0.1} />
                        </mesh>
                    </RigidBody>
                )
            ))}

            <RigidBody >
                <mesh position={[-6, 4.7, 1]} scale={[9, .75, 4]}>
                    <boxGeometry />
                    <meshStandardMaterial color="black" />
                </mesh>
            </RigidBody>

            <RigidBody restitution={0.2} >
                <mesh  position={[-7, 2.25, 1]} scale={ [4, 1, 4 ] }>
                    <boxGeometry  />
                    <meshStandardMaterial color="white" />
                </mesh>
            </RigidBody>

            <RigidBody type="fixed" restitution={0.2} >
                <mesh position={[5, 3, 1]} scale={[1, 5.75, .5]} >
                    <boxGeometry />
                    <meshStandardMaterial color="black" />
                </mesh>
            </RigidBody>

            <RigidBody position={[-7, 1, 1]} scale={[4, 1, 4]}>
                <mesh >
                    <boxGeometry />
                    <meshStandardMaterial color="lightgreen" />
                </mesh>
            </RigidBody>


            <Float
                speed={4}
                floatIntensity={3}>
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="darkblue"
                    position-y={15}
                    position-x={-12}
                    textAlign="left"
                >Level 5: In a Time Lapse </Text>
            </Float>

            {isLevelComplete && (
                <Float
                    speed={4}
                    floatIntensity={3}
                    onClick={handleNextLevel}
                >
                    <Text
                        font="./fonts/bangers-v20-latin-regular.woff"
                        fontSize={3}
                        color="green"
                        position-y={19}
                        position-x={0}
                        textAlign="right"
                    >Level Complete: NEXT </Text>
                </Float>

            )}
        </>
    )
}