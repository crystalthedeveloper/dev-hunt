import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* ALL GROUND */ }
const rotationX = [-Math.PI / 2]
const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1,1,6)
const circleGeometry = new THREE.CircleGeometry( 1, 100 )
const meshBasicMaterialColorBlack = "#000000"
const meshBasicMaterialColorGreen = "#039f00"
const meshBasicMaterialColorYellow = "#ffe600"
const positionGroundY = -0.16
const positionScaleZ = 0.1

{/* GROUND START */ }
const positionGroundStart = [0, positionGroundY, -10]
const scaleGroundStart = [3, 30, positionScaleZ]
{/* RIGHT GROUND */}
const positionGroundRight = [4.5, positionGroundY, -23.5]
const scaleGroundRight = [5, 3, positionScaleZ]
{/* GROUND DESIGNER */}
const positionGroundDesigner = [6, positionGroundY, -37]
const scaleGroundDesigner = [3, 20, positionScaleZ]
{/* LEFT GROUND */}
const positionGroundLeft = [1, positionGroundY, -46]
const scaleGroundLeft = [6, 3, positionScaleZ]
{/* GROUND */ }
const positionGroundCrystal = [-0.8, positionGroundY, -54]
const scaleGroundCrystal = [3, 10, positionScaleZ]
{/* LEFT GROUND TWO */}
const positionGroundLeftTwo = [-6, positionGroundY, -58]
const scaleGroundLeftTwo = [6, 3, positionScaleZ]
{/* GROUND SERVICES */}
const positionGroundServices = [-7.7, positionGroundY, -71]
const scaleGroundServices = [3, 21, positionScaleZ]
{/* RIGHT GROUND TWO*/}
const positionGroundRightTwo = [-2, positionGroundY, -80]
const scaleGroundRightTwo = [7, 3, positionScaleZ]
{/* GROUND SOCIAL */ }
const positionGroundSocial = [0, positionGroundY, -91]
const scaleGroundSocial= [3, 15, positionScaleZ]
{/* GROUND ABOUT */ }
const positionGroundContact = [0, 0.5, -100]
const scaleGroundContact = [3, 6, positionScaleZ]

{/******************* ARCHITECTURE FUNCTION *******************/ }
export default function Architecture() {

    return <>
        <RigidBody type="fixed">
            {/* GROUND START */}
            <mesh
                position={positionGroundStart}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundStart}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe/>
            </mesh>
             {/* RIGHT GROUND */}
             <mesh
                position={positionGroundRight}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundRight}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe />
            </mesh>
             {/* BRIDGE DESIGNER */}
             <mesh
                position={positionGroundDesigner}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundDesigner}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe/>
            </mesh>
            {/* LEFT GROUND */}
            <mesh
                position={positionGroundLeft}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundLeft}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe />
            </mesh>
            {/* GROUND CRYSTAL */}
            <mesh
                position={positionGroundCrystal}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundCrystal}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe/>
            </mesh>
            {/* LEFT GROUND TWO */}
            <mesh
                position={positionGroundLeftTwo}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundLeftTwo}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe />
            </mesh>
            {/* BRIDGE SERVICES */}
            <mesh
                position={positionGroundServices}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundServices}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe/>
            </mesh>
            {/* RIGHT GROUND TWO */}
            <mesh
                position={positionGroundRightTwo}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundRightTwo}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe />
            </mesh>
             {/* GROUND SOCIAL */}
             <mesh
                position={positionGroundSocial}
                rotation-x={rotationX}
                geometry={boxGeometry}
                scale={scaleGroundSocial}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe/>
            </mesh>
             {/* GROUND CONTACT */}
             <mesh
                position={positionGroundContact}
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundContact}
            >
                <meshBasicMaterial color={meshBasicMaterialColorGreen} wireframe/>
            </mesh>
        </RigidBody>
    </>
}
