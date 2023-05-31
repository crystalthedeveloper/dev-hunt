import './style.css'
import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls, Loader, Environment, Lightformer, Sky } from '@react-three/drei'


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
                far: 200,
                position: [2.5, 4, 6]
            }}

        >
            <Experience />
            {/* <Environment
                //background
               preset='forest'
            />  */}
            <Environment>
                <Sky
                    distance={450000}
                    sunPosition={[9, 1, 0]}
                    inclination={0}
                    azimuth={-0.25} />
            </Environment>

        </Canvas>
        <Interface />
        <Loader />
    </KeyboardControls>

)
