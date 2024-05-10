import { OrbitControls, Float, Text } from '@react-three/drei';
import { Physics } from '@react-three/rapier'
import { useState } from 'react'
import Level1 from './Level1'
import Level2 from './levels/2'
import Level3 from './levels/3'
import Level4 from './levels/4'
import Level5 from './levels/5'

export default function Experience() {
    const [level, setLevel] = useState(1)
    const [score, setScore] = useState(5000);

    const handleLevelComplete = (newScore) => {
        setScore(newScore); 
        setLevel(level + 1); 
      };

    return <>
        
        <OrbitControls />

        <ambientLight intensity={0.5} />
        <Physics debug>

          {level === 1 && <Level1 setLevel = {setLevel} setScore={setScore} />}
          {level === 2 && <Level2 setLevel = {setLevel} setScore={setScore}  />}
          {level === 3 && <Level3 setLevel = {setLevel} setScore={setScore} />}
          {level === 4 && <Level4 setLevel = {setLevel} setScore={setScore}  />}
          {level === 5 && <Level5 setLevel = {setLevel} setScore={setScore} />}
            
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

        </Physics>
    </>
}