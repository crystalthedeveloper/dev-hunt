import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* HTML IFRAME */ }
const distanceFactorIframe = 4
const positionIframe = [0, 1.2, 0]
const positionY = -0
{/* Ground BELOW */ }
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const meshBasicMaterialColorBlack = "#000000"
const positionGround = [0, -0.1, -10]
const rotationX = [-Math.PI / 2]
const scaleGround = [18, 60, 0.1]


{/******************* CONTACT FUNCTION *******************/ }
export default function StartLevel() {

    return <><RigidBody type="fixed">
        {/* ABOUT HTML */}
        <group position={[-5, positionY, -6]}>
            <Html
                center
                occlude
                wrapperClass="liveText"
                distanceFactor={distanceFactorIframe}
                position={positionIframe}
                zIndexRange={[90, 0]}
                
            >
                <h1>CRYSTAL LEWIS PORTFOLIO!</h1>
                <p>I’m a Website &amp; Email Developer &amp; Designer with over 10+ years of experience. I have hands-on experience in all stages of web-based development efforts, including requirements definition, design, architecture, implementation, testing, and support ensuring a smooth transition from start to finish.‍My passion and My skills are wider and spanning across multiple creative and technical disciplines. I absorb information like a sponge and create new Designs, Emails, Websites, and music. That is fully responsive ensuring a user-friendly experience for all.‍</p>

            </Html>
            <Logo />
        </group>
        {/* GUIDE HTML */}
        <group position={[-1.2, positionY, -0.30]}>
            <Html
                center
                occlude
                wrapperClass="liveText"
                distanceFactor={distanceFactorIframe}
                position={positionIframe}
                zIndexRange={[100, 0]}
            >
                <h1>HERE IS A GUIDE TO HELP YOU GET AROUND.</h1>
                <h2>YOU ARE HERE</h2>
                <p>Here is where you find bio, programming languages and tools I use to build websites and emails. Try to collect them all!</p>
                <h2>BOTTOM FLOOR </h2>
                <p>You can contact me on this floor. Here you will find Designer & Animation tools, I love designing new ways to make your site look beautiful.</p>
                <h2>TOP FLOOR</h2>
                <p>I love developing and designing using these Content Management Systems!</p>
                <h1>THANK YOU ENJOY!</h1>

            </Html>
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
