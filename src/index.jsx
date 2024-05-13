import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    
    <Canvas
        camera={{
            fov: 115,
            near:0.1,
            far:350,
            position: [1, 2, 5],
        }}
    >
        <Experience />
    </Canvas>
    
)