import { Level1 } from './Level1.jsx'
import { Physics } from '@react-three/rapier'

export default function Experience() {

    return <>
        <Physics debug>

            <Level1 />

        </Physics>
    </>
}