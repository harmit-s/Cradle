import { Center, useTexture, useGLTF, Float, Text, Html } from '@react-three/drei'
import { useState } from 'react'
import './style.scss'

export default function Homepage({ leaderboard, startGame }) {
    const { nodes } = useGLTF('./portal.glb')
    const [showInstructions, setShowInstructions] = useState(false);


    const handleClick = () => {
        setShowInstructions(!showInstructions);
    };

    const bakedTexture = useTexture('./baked.jpg')
    bakedTexture.flipY = false


    return <>

        <Center>

            <mesh geometry={nodes.baked.geometry}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            
            <mesh geometry={nodes.poleLightA.geometry} position={nodes.poleLightA.position}>
                <meshBasicMaterial color="#ffffe5" />
            </mesh>

            <mesh geometry={nodes.poleLightB.geometry} position={nodes.poleLightB.position}>
                <meshBasicMaterial color="#ffffe5" />
            </mesh>

            <Float
                speed={4}
                floatIntensity={3}>
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={.25}
                    color="gold"
                    position-y={1.5}
                    position-x={0}
                    textAlign="right"
                    onClick={startGame}
                >cradle</Text>
            </Float>

            <Text
                font="./fonts/bangers-v20-latin-regular.woff"
                fontSize={.2}
                color="black"
                position={[-1, .5, .8]}
                textAlign="right"
                onClick={() => handleClick()}
            >How To Play</Text>

            {showInstructions && (
                <Html>
                        <div className="popup">
                            <h1 className='popup__title'>How to Play</h1>
                            <p>The <strong style={{ backgroundColor: 'red', padding: '2px' }}>RED</strong> hero cube will fall on to the puzzle
                                when the level loads. Underneath our hero cube will be a
                                series of <strong style={{ backgroundColor: 'mediumpurple', padding: '2px' }}>PURPLE</strong> blocks. Destroy the purple
                                blocks by tapping on them without letting our hero fall
                                off the platform or hit the platform. <strong>Goal</strong> is to get the <strong style={{ backgroundColor: 'red', padding: '2px' }}>Hero Cube</strong> on a <strong style={{ backgroundColor: 'black', padding: '2px' }}>BLACK</strong> block and the black block on the platform. </p>
                            <button className='popup__button' onClick={() => setShowInstructions(false)}>Close</button>
                        </div>
                </Html>
            )}

            <Text
                font="./fonts/bangers-v20-latin-regular.woff"
                fontSize={.2}
                color="green"
                position={[1, .5, .8]}
                textAlign="right"
                onClick={leaderboard}
            >Leaderboard</Text>
        </Center>

    </>
}