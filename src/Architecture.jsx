import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* ALL GROUND */ }
const rotationX = [-Math.PI / 2]
const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
const circleGeometry = new THREE.CircleGeometry(1, 100)
const meshBasicMaterialColorBlack = "#000000"
const meshBasicMaterialColorWhite = "#ffffff"
const meshBasicMaterialColorYellow = "#ffe600"
const positionGroundY = 0
const positionGroundDesignerY = 2
const positionGroundDeveloperY = 3
const positionScaleZ = 1

{/* GROUND START */ }
const positionGroundStart = [0, positionGroundY, 0]
const scaleGroundStart = [1, 1, positionScaleZ]
{/* GROUND ABOUT */ }
const positionGroundContact = [-4, positionGroundY, -10]
const scaleGroundContact = [1, 1, positionScaleZ]
{/* GROUND EMAIL */ }
const positionGroundRight = [4, positionGroundY, -10]
const scaleGroundRight = [1, 1, positionScaleZ]
{/* GROUND SERVICES */ }
const positionGroundServices= [-3, 5, -12]
const scaleGroundServices = [1, 1, positionScaleZ]

{/* GROUND DESIGNER */ }
const positionGroundDesigner = [6, positionGroundDesignerY, -40]
const scaleGroundDesigner = [2, 2, positionScaleZ]
{/* GROUND DEVELOPER */ }
const positionGroundDeveloper = [-6, positionGroundDeveloperY, -30]
const scaleGroundDeveloper = [2, 2, positionScaleZ]
{/*  MORE */ }
const positionGroundMore = [5, positionGroundY, -60]
const scaleGroundMore = [2, 2, positionScaleZ]


{/******************* ARCHITECTURE FUNCTION *******************/ }
export default function Architecture() {

    return <>
        {/* GROUND */}
        <RigidBody type="fixed">
            {/* START */}
            <mesh
                position={positionGroundStart}
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundStart}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
               {/* SERVICES */}
               <mesh
                position={positionGroundServices}
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundServices}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            {/* ABOUT */}
            <mesh
                position={positionGroundContact}
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundContact}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            {/* EMAIL */}
            <mesh
                position={positionGroundRight}
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundRight}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            {/* DESIGNER */}
            <mesh
                position={positionGroundDesigner}
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundDesigner}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            {/* DEVELOPER */}
            <mesh
                position={positionGroundDeveloper}
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundDeveloper}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe/>
            </mesh>
            {/* MORE */}
            <mesh
                position={positionGroundMore}
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundMore}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
        </RigidBody>
    </>
}
