import { Environment, MeshReflectorMaterial, Text, Float } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

export default function Level3({ setLevel, setScore }) {
    const [showCubes, setShowCubes] = useState(Array(3).fill(true));
    const [isLevelComplete, setIsLevelComplete] = useState(false);
    const [clickCounter, setClickCounter] = useState(0);
    const redCube = useRef();
    const [enableFrameUpdate, setEnableFrameUpdate] = useState(true);
    
    useEffect(() => {
        if (clickCounter >= 3) {
            setEnableFrameUpdate(false); 
        }
    }, [clickCounter]);

    useFrame((state) => {
        if (enableFrameUpdate) { 
            const angle = state.clock.elapsedTime * 2
            state.camera.position.x = Math.sin(angle) * 10;
            state.camera.position.z = Math.cos(angle) * 10;
            state.camera.lookAt(0, 1, 0);
        }
    });

    const handleCubeClick = (index) => {
        setShowCubes(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
        setScore(prevScore => prevScore - 105);
        setClickCounter(prevCounter => prevCounter + 1);
    };

    const purplePositions = [
        [-1, 9.9, 1],
        [-1, 7.4, 1],
        [-1, 4.9, 1],
    ];

    const cubePositions = [
        [-1, 8.75, 1],
        [-1, 6.65, 1],
        [-1, 4.6, 1],
    ];

    useFrame(() => {
        checkLevelCompletion();
    }, []);

    const checkLevelCompletion = () => {
        const redCubePos = redCube.current.translation();
        
        const redCubeY = Math.round(redCubePos.y * 10) / 10;
        const redCubeX = Math.round(redCubePos.x * 1) / 1; 
    
        if (redCubeY === -3.9 && redCubeX === 0 || -0 ) {
            setIsLevelComplete(true);
        } 
    };
    
    const handleNextLevel = () => {
        setLevel(prevLevel => prevLevel + 1);
    }

    return (
        <>
            <Environment
                background
                files={'/environments/level3.hdr'} />

            <RigidBody type='fixed' >
                <mesh position-y={0} rotation-x={- Math.PI * 0.5} scale={20}>
                    <planeGeometry />
                    <MeshReflectorMaterial
                        resolution={550}
                        mirror={0.75}
                        color="yellow" />
                </mesh>
            </RigidBody>


            {showCubes.map((showCube, index) => (
                showCube && (
                    <RigidBody key={index} restitution={0.8} >
                        <mesh scale={1} position={purplePositions[index]} onClick={() => handleCubeClick(index)}>
                            <boxGeometry />
                            <meshStandardMaterial color="mediumpurple" />
                        </mesh>
                    </RigidBody>
                )
            ))}

            {[...Array(3).keys()].map(index => (
                <RigidBody key={index} restitution={0.5} >
                    <mesh scale={1} position={cubePositions[index]} >
                        <boxGeometry />
                        <meshStandardMaterial color="black" metalness={1} roughness={0.1} />
                    </mesh>
                </RigidBody>
            ))}

            <RigidBody ref={redCube} restitution={1.1} >
                <mesh scale={.5} position={[-1, 11.3, 1]} >
                    <boxGeometry />
                    <meshStandardMaterial color="red" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody type='fixed' >
                <mesh scale={[2.5, 4, 2.5]} position={[-1, 2, 1]} >
                    <boxGeometry />
                    <meshStandardMaterial color="black" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh scale={[2.5, .2, 2]} position={[-1, 10.9, 1]} >
                    <boxGeometry />
                    <meshStandardMaterial color="black" metalness={1} roughness={0.1} />
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
                    Level 3: The Green Room
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
    )

}