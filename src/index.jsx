import './style.css'
import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls, Stars, Loader, Environment } from '@react-three/drei'


const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <KeyboardControls map={[
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'shift', keys: ['ShiftLeft'] },
    ]}>
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 60,
                position: [2.5, 4, 6]
            }}
        >
            <Experience />
            <fog attach="fog" args={['black', 8, 25]} />
            <Stars radius={4} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Environment
                //background 
                preset='studio' />

        </Canvas>
        <Interface />
        <Loader />
    </KeyboardControls>

)
