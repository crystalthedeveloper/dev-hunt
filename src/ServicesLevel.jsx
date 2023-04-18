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
const positionY = 40.15
{/* Ground */ }
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const meshBasicMaterialColorBlack = "#000000"
const positionGround = [0, 40, -75]
const rotationX = [-Math.PI / 2]
const scaleGround = [8, 32, 0.1]



{/******************* SERVICES FUNCTION *******************/ }
export default function ServicesLevel() {

    return <>
        <RigidBody type="fixed">
            {/* WEBFLOW */}
            <group position={[-2, positionY, -60]}>
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
                    <iframe src="https://www.crystalthedeveloper.ca/services/webflow" />
                </Html>
                <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                    <meshBasicMaterial color={meshBasicMaterialColorBlack} />
                </mesh>
                <Logo />
            </group>
            {/* WORDPRESS */}
            <group position={[2, positionY, -60]}>
                <Html
                    transform
                    occlude="blending"
                    wrapperClass="htmlScreen"
                    position={positionIframe}
                    scale={scaleIframe}
                    distanceFactor={distanceFactorIframe}
                >
                    <iframe src="https://www.crystalthedeveloper.ca/services/wordpress" />
                </Html>
                <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                    <meshBasicMaterial color={meshBasicMaterialColorBlack} />
                </mesh>
                <Logo />
            </group>
            {/* ADOBE EXPERIENCE MANAGER */}
            <group position={[-2, positionY, -70]}>
                <Html
                    transform
                    occlude="blending"
                    wrapperClass="htmlScreen"
                    position={positionIframe}
                    scale={scaleIframe}
                    distanceFactor={distanceFactorIframe}
                >
                    <iframe src="https://www.crystalthedeveloper.ca/services/adobe-experience-manager" />
                </Html>
                <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                    <meshBasicMaterial color={meshBasicMaterialColorBlack} />
                </mesh>
                <Logo />
            </group>
            {/* MAGNOLIA */}
            <group position={[2, positionY, -70]}>

                <Html
                    transform
                    occlude="blending"
                    wrapperClass="htmlScreen"
                    position={positionIframe}
                    scale={scaleIframe}
                    distanceFactor={distanceFactorIframe}
                >
                    <iframe src="https://www.crystalthedeveloper.ca/services/magnolia-cms" />
                </Html>
                <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                    <meshBasicMaterial color={meshBasicMaterialColorBlack} />
                </mesh>
                <Logo />

            </group>
            {/* MAILCHIMP */}
            <group position={[2, positionY, -80]}>

                <Html
                    transform
                    occlude="blending"
                    wrapperClass="htmlScreen"
                    position={positionIframe}
                    scale={scaleIframe}
                    distanceFactor={distanceFactorIframe}
                >
                    <iframe src="https://www.crystalthedeveloper.ca/services/mailchimp" />
                </Html>
                <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                    <meshBasicMaterial color={meshBasicMaterialColorBlack} />
                </mesh>
                <Logo />

            </group>
            {/* SALESFORCE */}
            <group position={[-2, positionY, -80]}>

                <Html
                    transform
                    occlude="blending"
                    wrapperClass="htmlScreen"
                    position={positionIframe}
                    scale={scaleIframe}
                    distanceFactor={distanceFactorIframe}
                >
                    <iframe src="https://www.crystalthedeveloper.ca/services/salesforce" />
                </Html>
                <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                    <meshBasicMaterial color={meshBasicMaterialColorBlack} />
                </mesh>
                <Logo />

            </group>
            {/* EMAIL */}
            <group position={[2, positionY, -90]}>

                <Html
                    transform
                    occlude="blending"
                    wrapperClass="htmlScreen"
                    position={positionIframe}
                    scale={scaleIframe}
                    distanceFactor={distanceFactorIframe}
                >
                    <iframe src="https://www.crystalthedeveloper.ca/services/email-developer" />
                </Html>
                <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                    <meshBasicMaterial color={meshBasicMaterialColorBlack} />
                </mesh>
                <Logo />

            </group>
            {/* ANIMATION */}
            <group position={[-2, positionY, -90]}>

                <Html
                    transform
                    occlude="blending"
                    wrapperClass="htmlScreen"
                    position={positionIframe}
                    scale={scaleIframe}
                    distanceFactor={distanceFactorIframe}
                >
                    <iframe src="https://www.crystalthedeveloper.ca/services/animation" />
                </Html>
                <mesh geometry={boxGeometry} position={positionWall} scale={scaleWall}>
                    <meshBasicMaterial color={meshBasicMaterialColorBlack} />
                </mesh>
                <Logo />

            </group>
            {/* GROUND*/}
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
