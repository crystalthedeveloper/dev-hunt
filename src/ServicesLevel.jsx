import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* HTML IFRAME */ }
const distanceFactorIframe = 2
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
                    center
                    occlude="blending"
                    wrapperClass="Image"
                    position={positionIframe}
                    distanceFactor={distanceFactorIframe}
                    zIndexRange={[90, 0]}
                >
                    <a href='https://www.crystalthedeveloper.ca/services/webflow' target="_blank"> <img src="/texture/webflow.png" alt="webflow" /><h1>PORTFOLIO</h1></a>

                </Html>
                <Logo />
            </group>
            {/* WORDPRESS */}
            <group position={[2, positionY, -60]}>
                <Html
                    center
                    occlude="blending"
                    wrapperClass="Image"
                    position={positionIframe}
                    distanceFactor={distanceFactorIframe}
                    zIndexRange={[90, 0]}
                >
                    <a href='https://www.crystalthedeveloper.ca/services/wordpress' target="_blank"> <img src="/texture/WordPress.png" alt="wordpress" /><h1>PORTFOLIO</h1></a>

                </Html>
                <Logo />
            </group>
            {/* ADOBE EXPERIENCE MANAGER */}
            <group position={[-2, positionY, -70]}>
                <Html
                    center
                    occlude="blending"
                    wrapperClass="Image"
                    position={positionIframe}
                    distanceFactor={distanceFactorIframe}
                    zIndexRange={[80, 0]}
                >
                    <a href='https://www.crystalthedeveloper.ca/services/adobe-experience-manager' target="_blank"> <img src="/texture/AEM.png" alt="Adobe experience manager" /><h1>PORTFOLIO</h1></a>

                </Html>
                <Logo />
            </group>
            {/* MAGNOLIA */}
            <group position={[2, positionY, -70]}>
                <Html
                    center
                    occlude="blending"
                    wrapperClass="Image"
                    position={positionIframe}
                    distanceFactor={distanceFactorIframe}
                    zIndexRange={[80, 0]}
                >
                    <a href='https://www.crystalthedeveloper.ca/services/magnolia-cms' target="_blank"> <img src="/texture/Magnolia.png" alt="magnolia" /><h1>PORTFOLIO</h1></a>

                </Html>
                <Logo />

            </group>
            {/* MAILCHIMP */}
            <group position={[2, positionY, -80]}>
                <Html
                    center
                    occlude="blending"
                    wrapperClass="Image"
                    position={positionIframe}
                    distanceFactor={distanceFactorIframe}
                    zIndexRange={[70, 0]}
                >
                    <a href='https://www.crystalthedeveloper.ca/services/mailchimp' target="_blank"> <img src="/texture/Mailchimp.png" alt="mailchimp" /><h1>PORTFOLIO</h1></a>

                </Html>
                <Logo />

            </group>
            {/* SALESFORCE */}
            <group position={[-2, positionY, -80]}>
                <Html
                    center
                    occlude="blending"
                    wrapperClass="Image"
                    position={positionIframe}
                    distanceFactor={distanceFactorIframe}
                    zIndexRange={[70, 0]}
                >
                    <a href='https://www.crystalthedeveloper.ca/services/salesforce' target="_blank"> <img src="/texture/Salesforce.png" alt="salesforce" /><h1>PORTFOLIO</h1></a>

                </Html>
                <Logo />

            </group>
            {/* EMAIL */}
            <group position={[2, positionY, -90]}>
                <Html
                    center
                    occlude="blending"
                    wrapperClass="Image"
                    position={positionIframe}
                    distanceFactor={distanceFactorIframe}
                    zIndexRange={[60, 0]}
                >
                    <a href='https://www.crystalthedeveloper.ca/services/email-developer' target="_blank"> <img src="/texture/Email.png" alt="Email developer" /><h1>PORTFOLIO</h1></a>

                </Html>
                <Logo />

            </group>
            {/* ANIMATION */}
            <group position={[-2, positionY, -90]}>
                <Html
                    center
                    occlude="blending"
                    wrapperClass="Image"
                    position={positionIframe}
                    distanceFactor={distanceFactorIframe}
                    zIndexRange={[60, 0]}
                >
                    <a href='https://www.crystalthedeveloper.ca/services/animation' target="_blank"> <img src="/texture/Animation.png" alt="Animation" /><h1>PORTFOLIO</h1></a>

                </Html>
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
