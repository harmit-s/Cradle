import { RigidBody } from "@react-three/rapier";
import { Environment, MeshReflectorMaterial, Float, Text } from '@react-three/drei'
import { useState } from 'react';

export default function Level5({ setLevel, setScore }) {
    const [isLevelComplete, setIsLevelComplete] = useState(false);
    // const [clickCounter, setClickCounter] = useState(0);
    // const [showCubes, setShowCubes] = useState(Array(7).fill(true));

    // const handleCubeClick = (index) => {
    //     setShowCubes(prevState => {
    //         const newState = [...prevState];
    //         newState[index] = false;
    //         return newState;
    //     });

    //     setScore(prevScore => prevScore - 105);
    //     setClickCounter(prevCounter => prevCounter + 1);
    // };


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
                <mesh castShadow position-y={-0.5} rotation-x={- Math.PI * 0.5} scale={25}>
                    <planeGeometry />
                    <MeshReflectorMaterial
                        resolution={550}
                        mirror={0.75}
                        color="lightblue" />
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