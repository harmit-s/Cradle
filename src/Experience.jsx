import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier'
import Level1 from './Level1'
import Level2 from './levels/2'


export default function Experience() {
    

    return <>

        <OrbitControls />

        <ambientLight intensity={0.5} />
        <Physics debug>

            <Level1 />
            <Level2 />

        </Physics>
    </>
}