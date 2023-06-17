import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import Logo from './Logo.jsx'


{/* ALL GROUND */ }
const rotationX = [-Math.PI / 2]
const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
const circleGeometry = new THREE.CircleGeometry(1, 100)

{/* COLORS */ }
const meshBasicMaterialColorBlack = "#000000"
const meshBasicMaterialColorWhite = "#ffffff"
const meshBasicMaterialColorYellow = "#ffe600"

{/* POSITION GROUND & TEXT3D */ }
const positionGroundStartY = 0
const positionGround1Y = -1
const positionGround2Y = 0
const positionGround3Y = 1
const positionGround4Y = 4
const positionGround5Y = 2
const positionGround6Y = 0
const positionGround7Y = 3

{/* SCALE */ }
const positionScaleZ = 1

{/* GROUND START */ }
const positionGroundStart = [0, positionGroundStartY, 0]
{/* GROUP 1 */ }
const positionGround1 = [0, positionGround1Y, -20]
{/* GROUP 2 */ }
const positionGround2 = [-4, positionGround2Y, -10]
{/* GROUP 3 */ }
const positionGround3 = [4, positionGround3Y, -10]
{/* GROUP 4 */ }
const positionGround4 = [-3, positionGround4Y, -12]
{/* GROUP 5 */ }
const positionGround5 = [6, positionGround5Y, -40]
{/* GROUP 6 */ }
const positionGround6 = [5, positionGround6Y, -60]
{/* GROUP 7 */ }
const positionGround7 = [-6, positionGround7Y, -30]
{/* SCALE */ }
const scaleGroundBig = [2, 2, positionScaleZ]
const scaleGroundSmall = [1, 1, positionScaleZ]

{/******************* ARCHITECTURE FUNCTION *******************/ }
export default function Architecture() {

    return <>

        {/* START */}
        <RigidBody type="fixed" position={positionGroundStart}>
            <mesh
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundSmall}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            <Logo />
        </RigidBody>

        {/* GROUP 1 */}
        <RigidBody type="fixed" position={positionGround1}>
            <mesh
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundBig}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />

            </mesh>
            <Logo />
        </RigidBody>
        {/* GROUP 2 */}
        <RigidBody type="fixed" position={positionGround2}>
            <mesh
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundBig}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            <Logo />
        </RigidBody>

        {/* GROUP 3 */}
        <RigidBody type="fixed" position={positionGround3}>
            <mesh
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundBig}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            <Logo />
        </RigidBody>


        {/* GROUP 4 */}
        <RigidBody type="fixed" position={positionGround4}>
            <mesh
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundSmall}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            <Logo />
        </RigidBody>

        {/* GROUP 5 */}
        <RigidBody type="fixed" position={positionGround5}>
            <mesh
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundBig}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />

            </mesh>
            <Logo />
        </RigidBody>

        {/* GROUP 6 */}
        <RigidBody type="fixed" position={positionGround6}>
            <mesh
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundSmall}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            <Logo />
        </RigidBody>

        {/* GROUP 7 */}
        <RigidBody type="fixed" position={positionGround7}>
            <mesh
                rotation-x={rotationX}
                geometry={circleGeometry}
                scale={scaleGroundBig}
            >
                <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe />
            </mesh>
            <Logo />
        </RigidBody>
    </>
}
