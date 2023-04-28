import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* HTML IFRAME */ }
const distanceFactorIframe = 4
const positionIframe = [0, 1.2, 0]
const positionY = -0



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
                <h1><span className="liveTextCrystal">CRYSTAL LEWIS</span> PORTFOLIO!</h1>
                <p>I’m a Website &amp; Email Developer &amp; Designer with over 10+ years of experience. I have hands-on experience in all stages of web-based development efforts, including requirements definition, design, architecture, implementation, testing, and support ensuring a smooth transition from start to finish.‍ My passion and My skills are wider and spanning across multiple creative and technical disciplines. I absorb information like a sponge and create new Designs, Emails, Websites, and music. That is fully responsive ensuring a <span style={{whiteSpace: 'nowrap'}}>user-friendly</span> experience for<span>&nbsp;</span>all.‍</p>

            </Html>
            <Logo />
        </group>
        {/* GUIDE HTML */}
        <group position={[-0.80, positionY, -3]}>
            <Html
                center
                occlude
                wrapperClass="liveText"
                distanceFactor={distanceFactorIframe}
                position={positionIframe}
                zIndexRange={[100, 0]}
            >
                <h1>GUIDE!</h1>
                <h2>YOU ARE HERE</h2>
                <p>You will find my bio, programming languages and tools I use to build websites and<span>&nbsp;</span>emails.<br/> <br/> <strong>Try to collect them<span>&nbsp;</span>all!</strong> </p>
                <h2>BOTTOM FLOOR </h2>
                <p>You can contact me on this floor. Here you will find Designer & Animation tools, I love designing new ways to make your site look<span>&nbsp;</span>beautiful.</p>
                <h2>TOP FLOOR</h2>
                <p>I love developing and designing using these Content Management Systems! (CMS)</p>
                <h1>THANK YOU ENJOY!</h1>

            </Html>
            <Logo />
        </group>
    </RigidBody>

    </>

}
