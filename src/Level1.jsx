import { Environment, MeshReflectorMaterial, Float, Text, OrbitControls } from '@react-three/drei'
import React, { useState, useRef } from 'react'
import { RigidBody } from '@react-three/rapier'


export default function Level1() {
    const [showCubes, setShowCubes] = useState(Array(10).fill(true));
    const [score, setScore] = useState(5000);
    const redCube = useRef()

    const cubePositions = [
        [0, 4, 0],
        [-2, 2, 0], [2, 2, 0],
        [-4, 1, 0], [0, 1, 0], [4, 1, 0],
        [-6, 0, 0], [-2, 0, 0], [2, 0, 0], [6, 0, 0],
    ];

    const handleCubeClick = (index) => {
        setShowCubes(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
        setScore(prevScore => prevScore - 105);
    };

    const cubeJump = () => {
        redCube.current.applyImpulse({ x: 2, y: 5, z: 0 });
        redCube.current.applyTorqueImpulse({
            x: Math.random() - 0.5,
            y: Math.random() - 0.5,
            z: Math.random() - 0.5
        });
        setScore(prevScore => prevScore - 300);
    };

    return (
        <>
            <Environment
                background
                files={'./environments/landscape.hdr'}
            />

            <OrbitControls />
            <ambientLight intensity={1.5} />

            {showCubes.map((showCube, index) => (
                showCube && (
                    <RigidBody key={index} restitution={0.3}>
                        <mesh position={cubePositions[index]} scale={[3, 1, 1]} onClick={() => handleCubeClick(index)}>
                            <boxGeometry />
                            <meshStandardMaterial color="mediumpurple" />
                        </mesh>
                    </RigidBody>
                )
            ))}

            <RigidBody ref={redCube} restitution={0.3}>
                <mesh castShadow position={[0, 6, 0]} onClick={cubeJump}>
                    <boxGeometry />
                    <meshStandardMaterial color="red" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[1, 3, 0]} >
                    <boxGeometry />
                    <meshStandardMaterial color="black" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[-1, 3, 0]} >
                    <boxGeometry />
                    <meshStandardMaterial color="black" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody type='fixed' restitution={0.5}>
                <mesh position-y={-0.5} rotation-x={- Math.PI * 0.5} scale={20}>
                    <planeGeometry />
                    <MeshReflectorMaterial
                        resolution={550}
                        mirror={0.75}
                        color="greenyellow" />
                </mesh>
            </RigidBody>

            <Float
                speed={4}
                floatIntensity={3}>
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="darkblue"
                    position-y={14}
                    position-x={-10}
                    textAlign="left"
                >Level 1: A New Era </Text>
            </Float>

            <Float
                speed={4}
                floatIntensity={3}>
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="indigo"
                    position-y={14}
                    position-x={10}
                    textAlign="right"
                >Health Score: {score}  </Text>
            </Float>
        </>
    );
}