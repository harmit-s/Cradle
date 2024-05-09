import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier'
import { useState } from 'react'
import Level1 from './Level1'
import Level2 from './levels/2'

export default function Experience() {


    
    const [level, setLevel] = useState(1)

    return <>
        
        <OrbitControls />

        <ambientLight intensity={0.5} />
        <Physics debug>

          {level === 1 && <Level1 setLevel = {setLevel} />}
          {level === 2 && <Level2 setLevel = {setLevel} />}
            

        </Physics>
    </>
}