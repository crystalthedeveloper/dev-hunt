import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* HTML IFRAME */ }
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
                center
                occlude
                wrapperClass="Button"
                position={positionIframe}
                zIndexRange={[100, 0]}
            >
                <a href="https://www.crystalthedeveloper.ca/contact" target="_blank"><button className="button" style={{ verticalAlign: 'middle' }}>CONTACT<span>&nbsp;</span>ME</button>
                </a>

            </Html>
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
