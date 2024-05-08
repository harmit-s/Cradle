
import { Physics } from '@react-three/rapier'
import Level1 from './Level1'

export default function Experience() {

    return <>
        <Physics debug>

            <Level1 />

        </Physics>
    </>
}