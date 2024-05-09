import { Environment, MeshReflectorMaterial, Text, Float } from '@react-three/drei';
import React, { useState, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';

export default function Level2() {
    const [showCubes, setShowCubes] = useState(Array(54).fill(true));
    const [isLevelComplete, setIsLevelComplete] = useState(false);
    const [clickCounter, setClickCounter] = useState(0);
    const purpleCube = useRef();
    const redCube = useRef();

    const cubePositions = [
        
        [-3, 0.5, 3], [-1, 0.5, 3], [1, 0.5, 3],
        [-3, 0.5, 1], [-1, 0.5, 1], [1, 0.5, 1],
        [-3, 0.5, -1], [-1, 0.5, -1], [1, 0.5, -1],
        
        [-3, 2.5, 3], [-1, 2.5, 3], [1, 2.5, 3],
        [-3, 2.5, 1], [-1, 2.5, 1], [1, 2.5, 1],
        [-3, 2.5, -1], [-1, 2.5, -1], [1, 2.5, -1],
        
        [-3, 4.5, 3], [-1, 4.5, 3], [1, 4.5, 3],
        [-3, 4.5, 1], [-1, 4.5, 1], [1, 4.5, 1],
        [-3, 4.5, -1], [-1, 4.5, -1], [1, 4.5, -1],

        [-3, 6.5, 3], [-1, 6.5, 3], [1, 6.5, 3],
        [-3, 6.5, 1], [-1, 6.5, 1], [1, 6.5, 1],
        [-3, 6.5, -1], [-1, 6.5, -1], [1, 6.5, -1],
        
        [-3, 8.5, 3], [-1, 8.5, 3], [1, 8.5, 3],
        [-3, 8.5, 1], [-1, 8.5, 1], [1, 8.5, 1],
        [-3, 8.5, -1], [-1, 8.5, -1], [1, 8.5, -1],
       
        [-3, 10.5, 3], [-1, 10.5, 3], [1, 10.5, 3],
        [-3, 10.5, 1], [-1, 10.5, 1], [1, 10.5, 1],
        [-3, 10.5, -1], [-1, 10.5, -1], [1, 10.5, -1],
        
    ];

    const handleCubeClick = (index) => {
        setShowCubes(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
        setScore(prevScore => prevScore - 105);
        setClickCounter(prevCounter => prevCounter + 1);
    };

    const checkLevelCompletion = () => {
        if (!isLevelComplete && clickCounter >= 5) {
            setIsLevelComplete(true);
        }
    };

    return (
        <>
            <Environment background files={'./environments/dream.hdr'} />

            {showCubes.map((showCube, index) => (
                showCube && (
                    <RigidBody key={index} restitution={0.3}>
                        <mesh scale={2} position={cubePositions[index]} onClick={() => handleCubeClick(index)}>
                            <boxGeometry />
                            <meshStandardMaterial color="black" metalness={1} roughness={0.1} />
                        </mesh>
                    </RigidBody>
                )
            ))}

            <RigidBody type='fixed' restitution={0.5}>
                <mesh position-y={-0.5} rotation-x={- Math.PI * 0.5} scale={20}>
                    <planeGeometry />
                    <MeshReflectorMaterial
                        resolution={550}
                        mirror={0.75}
                        color="yellow" />
                </mesh>
            </RigidBody>

            <RigidBody ref={purpleCube} restitution={0.3}>
                <mesh scale={2} position={[0, 17.5, 0]} onClick={checkLevelCompletion}>
                    <boxGeometry />
                    <meshStandardMaterial color="purple" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody ref={redCube} restitution={0.3}>
                <mesh scale={2} position={[0, 14.5, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color="red" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>

            <Float
                speed={4}
                floatIntensity={3}>
            <Text
                font="./fonts/bangers-v20-latin-regular.woff"
                fontSize={1}
                color="darkblue"
                position={[-10, 14, 0]}
                textAlign="center"
            >
                Level 2: Dream
            </Text>
            </Float>
            
            {isLevelComplete && (
                <Float
                speed={4}
                floatIntensity={3}>
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="green"
                    position={[0, 11, 0]}
                    textAlign="center"
                >
                    Level Complete: Next
                </Text>
                </Float>
            )}
        </>
    );
}