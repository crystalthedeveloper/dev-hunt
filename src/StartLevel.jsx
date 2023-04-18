import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import Logo from './Logo.jsx'

{/* wall */ }
const scaleWall = [2.1, 2.1, 4]
const positionWall = [0, 1.17, -2.2]
{/* HTML IFRAME */ }
const scaleIframe = [2.1, 2.1, 1]
const distanceFactorIframe = 0.20
const positionIframe = [0, 1.17, -0.14]
const positionY = -0
{/* Ground BELOW */ }
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const meshBasicMaterialColorBlack = "#000000"
const positionGround = [0, -0.1, -10]
const rotationX = [-Math.PI / 2]
const scaleGround = [18, 60, 0.1]


{/******************* START FUNCTION *******************/ }
function Debug() {

    {/* Debug */ }
    const { rotation, positions, scale } = useControls('About', {
        rotation:
        {
            value: { x: 0, y: 0.36, z: 0 },
            step: 0.01,
            joystick: 'invertY'
        },
        //yellowMaterial:'#ff0000'
        positions: {
            value: { x: 0, y: 1.16, z: -0.14 },
            step: 0.01,
            joystick: 'invertY'
        },
        scale: {
            value: { x: 2, y: 1.9, z: 1 },
            step: 0.01,
            joystick: 'invertY'
        },

    })
}
{/******************* CONTACT FUNCTION *******************/ }
export default function StartLevel() {

    return <><RigidBody type="fixed">
        {/* ABOUT HTML */}
        <group position={[-5, positionY, -6]}>
            <Html
                // Debug
                //position={[positions.x, positions.y, positions.z]}
                //rotation={[rotation.x, rotation.y, rotation.z]}
                transform
                occlude="blending"
                wrapperClass="htmlScreen"
                position={positionIframe}
                scale={scaleIframe}
                distanceFactor={distanceFactorIframe}
            >
                <iframe src="https://www.crystalthedeveloper.ca/about" />
            </Html>
            <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                <meshBasicMaterial color={meshBasicMaterialColorBlack} />
            </mesh>
            <Logo />
        </group>
        {/* GUIDE HTML */}
        <group position={[-0.5, positionY, 0]}>
            <Html
                transform
                occlude="blending"
                wrapperClass="htmlScreen"
                position={positionIframe}
                scale={scaleIframe}
                distanceFactor={distanceFactorIframe}
            >
                <iframe src="https://www.crystalthedeveloper.ca/guide" />
            </Html>
            <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                <meshBasicMaterial color={meshBasicMaterialColorBlack}/>
            </mesh>
            <Logo />
        </group>
        {/* Ground */}
        <mesh
            position={positionGround}
            rotation-x={rotationX}
            geometry={boxGeometry}
            scale={scaleGround}
        >
            <meshBasicMaterial color={meshBasicMaterialColorBlack} wireframe />
        </mesh>
    </RigidBody>

    </>

}
