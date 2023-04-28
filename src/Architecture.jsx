import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* ALL GROUND */ }
const rotationX = [-Math.PI / 2]
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const meshBasicMaterialColorBlack = "#000000"
const meshBasicMaterialColorGreen = "#039f00"
const meshBasicMaterialColorYellow = "#ffe600"
{/* GROUND TOP */ }
const positionGroundTop = [0, 4, -50]
const scaleGroundTop = [10, 10, 0.1]
{/* GROUND BELOW */ }
const positionGroundBelow = [0, -9, -7]
const scaleGroundBelow = [30, 20, 0.1]
{/* GROUND START */ }
const positionGroundStart = [0, -0.1, -10]
const scaleGroundStart = [18, 30, 0.1]
{/* GROUND BRIDGE ONE*/}
const rotationXBridgeOne = [-Math.PI / 3.1]
const positionGroundBridgeOne = [0, -3, -32]
const scaleGroundBridgeOne = [3, 24, 0.1]

{/******************* ARCHITECTURE FUNCTION *******************/ }
export default function Architecture() {

    return <>
        <RigidBody type="fixed">
            {/* GROUND TOP */}
            <mesh
                position={positionGroundTop}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundTop}
            >
                <meshBasicMaterial color={meshBasicMaterialColorYellow} wireframe />
            </mesh>
            {/* GROUND BELOW */}
            <mesh
                position={positionGroundBelow}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundBelow}
            >
                <meshBasicMaterial color={meshBasicMaterialColorBlack} wireframe />
            </mesh>
            {/* BRIDGE */}
            <mesh
                position={positionGroundBridgeOne}
                rotation-x={rotationXBridgeOne}
                geometry={boxGeometry}
                scale={scaleGroundBridgeOne}
            >
                <meshBasicMaterial color={meshBasicMaterialColorYellow}/>
            </mesh>
            {/* GROUND START */}
            <mesh
                position={positionGroundStart}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundStart}
            >
                <meshBasicMaterial color={meshBasicMaterialColorBlack} wireframe />
            </mesh>
        </RigidBody>
    </>
}
