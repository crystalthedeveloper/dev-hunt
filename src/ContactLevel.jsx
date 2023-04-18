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
const positionY = -8.9
{/* Ground BELOW */ }
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const meshBasicMaterialColorBlack = "#000000"
const positionGround = [0, -9, -7]
const rotationX = [-Math.PI / 2]
const scaleGroundBelow = [10, 15, 0.1]


{/******************* CONTACT FUNCTION *******************/ }
export default function ContactLevel() {

    return <RigidBody type="fixed">
        <group position={[3, positionY, -3]}>
            <Html
                transform
                occlude="blending"
                wrapperClass="htmlScreen"
                position={positionIframe}
                scale={scaleIframe}
                distanceFactor={distanceFactorIframe}
            >
                <iframe src="https://www.crystalthedeveloper.ca/contact" />

            </Html>
            <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                <meshBasicMaterial color={meshBasicMaterialColorBlack}/>
            </mesh>
            <Logo />
        </group>
        {/* GROUND */}
        <mesh
            position={positionGround}
            rotation-x={rotationX}
            geometry={boxGeometry}
            scale={scaleGroundBelow}
        >
            <meshBasicMaterial color={meshBasicMaterialColorBlack} wireframe />
        </mesh>

    </RigidBody>

}
