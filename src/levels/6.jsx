import { RigidBody } from "@react-three/rapier";
import { MeshReflectorMaterial, Float, Text } from '@react-three/drei'


export default function Level6({ setLevel, setScore }) {


    // useFrame((state) =>
    //     {
    //         const time = state.clock.getElapsedTime()
            
    //         const eulerRotation = new THREE.Euler(0, time * 10, 0)
    //         const quaternionRotation = new THREE.Quaternion()
    //         quaternionRotation.setFromEuler(eulerRotation)
    //         twister.current.setNextKinematicRotation(quaternionRotation)
    
    //         const angle = time * .5
    //         const x = Math.cos(angle) * 2
    //         const z = Math.sin(angle) * 2
    //         twister.current.setNextKinematicTranslation({ x: x, y: - 0.8, z: z })
    //     })

    // const cubesCount = 100
    // const instances = useMemo(() =>
    // {
    //     const instances = [];

    //     for(let i = 0; i < cubesCount; i++)
    //     {
    //         instances.push({
    //             key: 'instance_' + i,
    //             position:
    //             [
    //                 (Math.random() - 0.5) * 8,
    //                 6 + i * 0.2,
    //                 (Math.random() - 0.5) * 8,
    //             ],
    //             rotation: [ Math.random(), Math.random(), Math.random() ],
    //         })
    //     }

    //     return instances;
    // }, [])

    return (
        <>

            

            <RigidBody type='fixed' >
                <mesh castShadow position-y={-0.5} rotation-x={- Math.PI * 0.5} scale={25}>
                    <planeGeometry />
                    <MeshReflectorMaterial
                        resolution={550}
                        mirror={0.75}
                        color="lightblue" />
                </mesh>
            </RigidBody>
{/* 
            <RigidBody
                ref={ twister }
                position={ [ 0, - 0.8, 0 ] }
                friction={ 0 }
                type="kinematicPosition"
            >
                <mesh castShadow scale={ [ 0.4, 0.4, 3 ] }>
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={ [ 5, 2, 0.5 ] } position={ [ 0, 1, 5.5 ] } />
                <CuboidCollider args={ [ 5, 2, 0.5 ] } position={ [ 0, 1, - 5.5 ] } />
                <CuboidCollider args={ [ 0.5, 2, 5 ] } position={ [ 5.5, 1, 0 ] } />
                <CuboidCollider args={ [ 0.5, 2, 5 ] } position={ [ - 5.5, 1, 0 ] } />
            </RigidBody>

            <InstancedRigidBodies instances={ instances }>
                <instancedMesh castShadow receiveShadow args={ [ null, null, cubesCount ] }>
                    <boxGeometry />
                    <meshStandardMaterial color="white" metalness={1} roughness={0.1} />
                </instancedMesh>
            </InstancedRigidBodies> */}


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
                >Level 6: Orbits </Text>
            </Float>

            {/* {isLevelComplete && (
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
                    >Level Complete: Final Score </Text>
                </Float> */}
{/* 
            )} */}
        </>
    )
}