import { RigidBody } from "@react-three/rapier";
// import { useRef } from "react"


export default function Level4() {

    



    return (
        <>
            <RigidBody type='fixed' >
                <mesh castShadow position-y={-0.5} rotation-x={- Math.PI * 0.5} scale={30}>
                    <planeGeometry />
                    <meshStandardMaterial
                        color="darkgreen" />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[0, 0, 0]} scale={[16, .75, 14]}>
                    <boxGeometry />
                    <meshStandardMaterial color="lightblue"  friction={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[3.5, 2.75, -.2]} scale={[4,5,13]}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" metalness={.5} roughness={0.1} restitution={0.4}  />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[-3.5, 2.75, -.2]} scale={[4,5,13]}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" metalness={.5} roughness={0.1} restitution={0.4} />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[0, 5.75, -.2]} scale={[13,1,13]}>
                    <boxGeometry />
                    <meshStandardMaterial color="black" metalness={1} roughness={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[-2.5, 7.75, 0]} scale={[3,3, 8]}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple"  />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[2, 7.75, 0]} scale={[3,3,8]}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple"  />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[-0.25, 9.8, 0]} scale={[7.5,1,8]}>
                    <boxGeometry />
                    <meshStandardMaterial color="lightblue" friction={0.1} />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[-5, 10.75, .25]} scale={[10,1,5]}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple"  />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[5, 10.75, .25]} scale={[10,1,5]}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple"  />
                </mesh>
            </RigidBody>

            <RigidBody >
                <mesh castShadow position={[0, 12.8, .25]} scale={[4.5,3,5]}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody>

            <RigidBody restitution={0.1} >
                <mesh castShadow position={[0, 15.5, .25]} scale={2}>
                    <boxGeometry />
                    <meshStandardMaterial color="black" />
                </mesh>
            </RigidBody>

            <RigidBody restitution={0.1} >
                <mesh castShadow position={[0, 17.5, .25]} scale={2} >
                    <boxGeometry />
                    <meshStandardMaterial color="black" />
                </mesh>
            </RigidBody>

            <RigidBody restitution={0.1}  >
                <mesh castShadow position={[0, 19, .25]} scale={1}>
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
            </RigidBody>

            <RigidBody colliders="trimesh" >
                <mesh castShadow position={[5, 14, 2.5]} scale={1}>
                <torusKnotGeometry />
                    <meshStandardMaterial color="white" metalness={.5} />
                </mesh>
            </RigidBody>

            <RigidBody colliders="trimesh" >
                <mesh castShadow position={[-5, 14, 2.5]} scale={1}>
                    <torusKnotGeometry />
                    <meshStandardMaterial color="white" metalness={.5} />
                </mesh>
            </RigidBody>





        </>
    )

}