import { RigidBody } from "@react-three/rapier";
import { Environment, MeshReflectorMaterial, Float, Text } from '@react-three/drei'
import { useState, useRef } from 'react';
import { useFrame } from "@react-three/fiber";

export default function Level4( { setLevel, setScore } ) {
    const [isLevelComplete, setIsLevelComplete] = useState(false);
    const [showCubes, setShowCubes] = useState(Array(7).fill(true));
    const redCube = useRef();

    const cubePositions = [
        [3.5, 2.75, -0.2],
        [-3.5, 2.75, -0.2],
        [-2.5, 7.75, 0],
        [2, 7.75, 0],
        [-5, 10.75, .25],
        [5, 10.75, .25],
        [0, 12.8, .25]
    ];
    const cubeScales = [
        [4, 5, 13],
        [4, 5, 13],
        [3, 3, 8],
        [3, 3, 8],
        [10, 1, 5],
        [10, 1, 5],
        [4.5, 3, 5]
    ];

    const handleCubeClick = (index) => {
        setShowCubes(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
        setScore(prevScore => prevScore - 105);
    };

    useFrame(() => {
        checkLevelCompletion();
    }, []);

    const checkLevelCompletion = () => {
        const redCubePos = redCube.current.translation();
        
        const redCubeY = Math.round(redCubePos.y * 10) / 10;
        const redCubeX = Math.round(redCubePos.x * 1) / 1;
    
        if (redCubeY === -14.3 && (redCubeX >= -5 && redCubeX <= 5)) {
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
                files={'/environments/level4.hdr'}
            />
            <RigidBody type='fixed' >
                <mesh castShadow position-y={-0.5} rotation-x={- Math.PI * 0.5} scale={35}>
                    <planeGeometry />
                    <MeshReflectorMaterial
                        resolution={550}
                        mirror={0.75}
                        color="pink" />
                </mesh>
            </RigidBody>

            <RigidBody friction={0.4} >
                <mesh castShadow position={[0, 0, 0]} scale={[16, .75, 14]}>
                    <boxGeometry />
                    <meshStandardMaterial color="white" metalness={.7} roughness={0.1} />
                </mesh>
            </RigidBody>

            {showCubes.map((showCube, index) => (
                showCube && (
                    <RigidBody key={index} restitution={0.4}>
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
                <mesh castShadow position={[0, 5.75, -.2]} scale={[13, 1, 13]}>
                    <boxGeometry />
                    <meshStandardMaterial color="black" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>



            <RigidBody friction={0.1} >
                <mesh castShadow position={[-0.25, 9.8, 0]} scale={[7.5, 1, 8]}>
                    <boxGeometry />
                    <meshStandardMaterial color="white" metalness={.7} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody restitution={0} >
                <mesh castShadow position={[0, 15.5, .25]} scale={3}>
                    <boxGeometry />
                    <meshStandardMaterial color="black" metalness={.7} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody ref={ redCube } >
                <mesh castShadow position={[0, 20, .25]} ref={ redCube } scale={1}>
                    <boxGeometry />
                    <meshStandardMaterial color="red" metalness={.7} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody restitution={2} colliders="ball" >
                <mesh castShadow position={[-6.4, 13, .5]} scale={1.75}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="yellow" metalness={.7} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody restitution={2} colliders="ball">
                <mesh castShadow position={[6, 13, .5]} scale={1.75}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="yellow" metalness={.7} roughness={0.1} />
                </mesh>
            </RigidBody>

            <Float
                speed={4}
                floatIntensity={3}>
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="darkblue"
                    position-y={17}
                    position-x={-12}
                    textAlign="left"
                >Level 4: Newtons Cradle </Text>
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