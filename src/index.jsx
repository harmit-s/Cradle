import './style.scss'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import MusicPlayer from './MusicPlayer';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    
    <Canvas
        camera={{
            fov: 115,
            near:0.1,
            far:350,
            position: [1, 2, 5],
        }}
    >
        <MusicPlayer />
        <Experience />
    </Canvas>
    </>
)