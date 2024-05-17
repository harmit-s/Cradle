import { Environment, MeshReflectorMaterial, Text, Float } from '@react-three/drei';
import React, { useState, useRef, useEffect } from 'react';
import { RigidBody } from '@react-three/rapier';

export default function Level2({ setLevel, setScore }) {
    const [showCubes, setShowCubes] = useState(Array(6).fill(true));
    const [isLevelComplete, setIsLevelComplete] = useState(false);
    const [clickCounter, setClickCounter] = useState(0);
    const redCube = useRef();

    const cubePositions = [

        [-3, -1.5, 3], [-1, -1.5, 3], [1, -1.5, 3],
        [-3, -1.5, 1], [-1, -1.5, 1], [1, -1.5, 1],
        [-3, -1.5, -1], [-1, -1.5, -1], [1, -1.5, -1],

        [-3, 0.5, 3], [-1, 0.5, 3], [1, 0.5, 3],
        [-3, 0.5, 1], [1, 0.5, 1],
        [-3, 0.5, -1], [1, 0.5, -1],

        [-3, 2.5, 3], [1, 2.5, 3],
        [-3, 2.5, 1], [1, 2.5, 1],
        [-3, 2.5, -1], [-1, 2.5, -1], [1, 2.5, -1],

        [-3, 4.5, 3], [-1, 4.5, 3], [1, 4.5, 3],
        [-3, 4.5, 1],
        [-3, 4.5, -1], [-1, 4.5, -1], [1, 4.5, -1],

        [-3, 6.5, 3], [-1, 6.5, 3], [1, 6.5, 3],
        [1, 6.5, 1],
        [-3, 6.5, -1], [-1, 6.5, -1], [1, 6.5, -1],

        [-3, 8.5, 3], [-1, 8.5, 3], [1, 8.5, 3],
        [-3, 8.5, 1], [1, 8.5, 1],
        [-3, 8.5, -1], [1, 8.5, -1],

        [-3, 10.5, 3], [-1, 10.5, 3], [1, 10.5, 3],
        [-3, 10.5, 1], [1, 10.5, 1],
        [-3, 10.5, -1], [1, 10.5, -1], [-1, 10.5, -1]

    ];

    const purplePositions = [
        [-1, 8.5, 1],
        [-1, 4.5, 1],
        [-1, 0.5, 1],
        [-1, 10.5, 1],
        [-1, 6.5, 1],
        [-1, 2.5, 1],
    ];

    const handleCubeClick = (index) => {
        setShowCubes(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
        setScore(prevScore => prevScore - 105);
        setClickCounter(prevCounter => {
            const newCounter = prevCounter + 1;
            return newCounter;
        });
        checkLevelCompletion();
    };

    useEffect(() => {
        checkLevelCompletion();
    }, [clickCounter]);

    const checkLevelCompletion = () => {
        if (clickCounter === 6) {
            setIsLevelComplete(true);
        }
    };

    const handleNextLevel = () => {
        setLevel(prevLevel => prevLevel + 1);
    }

    return (
        <>
            <Environment background files={'/environments/level2.hdr'} />

            {[...Array(52).keys()].map(index => (
                <RigidBody type='fixed' key={index} >
                    <mesh scale={2} position={cubePositions[index]} >
                        <boxGeometry />
                        <meshStandardMaterial color="black" metalness={1} roughness={0.1} />
                    </mesh>
                </RigidBody>
            ))}


            <RigidBody type='fixed' >
                <mesh position-y={-2.5} rotation-x={- Math.PI * 0.5} scale={20}>
                    <planeGeometry />
                    <MeshReflectorMaterial
                        resolution={550}
                        mirror={0.75}
                        color="yellow" />
                </mesh>
            </RigidBody>



            {showCubes.map((showCube, index) => (
                showCube && (
                    <RigidBody key={index} >
                        <mesh scale={2} position={purplePositions[index]} onClick={() => handleCubeClick(index)}>
                            <boxGeometry />
                            <meshStandardMaterial color="mediumpurple" />
                        </mesh>
                    </RigidBody>
                )
            ))}

            <RigidBody ref={redCube} >
                <mesh scale={1.85} position={[-1, 12.5, 1]} >
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
                    Level 2: Down the rabbit hole
                </Text>
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
                        position-y={18}
                        position-x={0}
                        textAlign="right"
                    >Level Complete: NEXT </Text>
                </Float>
            )}
        </>
    );
}