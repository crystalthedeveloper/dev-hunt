import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* HTML IFRAME */ }
const distanceFactorIframe = 3
const positionIframe = [0, 1.2, 0]
const positionY = 0


{/******************* CONTACT FUNCTION *******************/ }
export default function StartLevel() {

    return <><RigidBody type="fixed">
        {/* ABOUT HTML */}
        <group position={[-6, positionY, -10]}>
            <Html
                center
                occlude
                wrapperClass="liveText"
                distanceFactor={distanceFactorIframe}
                position={positionIframe}
                zIndexRange={[90, 0]}

            >
                <h1>CRYSTAL LEWIS</h1>
                <p>Developer and Designer with over 10+ years of experience. I have hands-on experience in all stages of web-based development efforts, including requirements definition, design, architecture, implementation, testing, and support ensuring a smooth transition from start to<span>&nbsp;</span>finish.‍<br /><br />

                My passion is learning new things. I absorb information like a sponge. I create new Designs, Emails, Websites, and music. That is fully responsive ensuring a <span style={{ whiteSpace: 'nowrap' }}>user-friendly</span> experience for<span>&nbsp;</span>all.‍<br /><br />

                My skills are wider and spanning across multiple creative and technical disciplines. Helping your business excel<span>&nbsp;</span>further!</p>
                

            </Html>
            <Logo />
        </group>
        {/* WELCOME */}
        <group position={[0, positionY, 0]}>
            <Html
                center
                occlude
                wrapperClass="liveText"
                distanceFactor={distanceFactorIframe}
                position={positionIframe}
                zIndexRange={[100, 0]}
            >
                <h1>WELCOME</h1>
                <h2>I'M GLAD YOU'RE HERE</h2>
                <p><span className="liveTextBoldYellow"> COLLECT THEM ALL! *</span><br/><br/> They are programming languages and Designer & Animation tools I use to build websites and<span>&nbsp;</span>emails.<br /> <br />  On the journey, you see Content Management Systems! (CMS). I love developing and designing using these platforms.<br/> <br/>All these tools let me bring your vision to<span>&nbsp;</span>life!
                </p>
                <p><span className="liveTextBoldYellow">FOLLOW ME ON SOCIAL MEDIA<br/></span></p>
                <p><span className="socialLinksWrap"><span className="socialLinks" onClick={() => { window.open('https://www.facebook.com/Crystalthedeveloper/reviews/?ref=page_internal', '_blank') }}> Facebook </span>
                <br/><br/> <span className="socialLinks" onClick={() => { window.open('https://www.instagram.com/crystalthedeveloper/', '_blank') }}> Instagram </span>
                <br/><br/> <span className="socialLinks" onClick={() => { window.open('https://www.linkedin.com/in/crystal-lewis-b14b7386/', '_blank') }}> Linkedin </span>
                <br/><br/> <span className="socialLinks" onClick={() => { window.open('https://www.youtube.com/channel/UCeUkpwkof62DlSAU9C2uLtA', '_blank') }}> Youtube </span>
                <br/><br/> <span className="socialLinks" onClick={() => { window.open('https://www.facebook.com/Crystalthedeveloper/reviews', '_blank') }}> Facebook Reviews </span>
                </span></p>

                <h1>THANK YOU ENJOY!</h1>

            </Html>
            <Logo />
        </group>
         {/* EMAIL */}
         <group position={[6, positionY, -10]}>
            <Html
                center
                occlude
                wrapperClass="liveText"
                distanceFactor={distanceFactorIframe}
                position={positionIframe}
                zIndexRange={[100, 0]}
            >
                <h1>NEED A<br/> WEBSITE?</h1>
                <h2><button onClick={() => { window.open('https://www.crystalthedeveloper.ca/mailchimp', '_blank') }}><strong>EMAIL ME NOW!</strong></button></h2>
                <h2><button onClick={() => { window.open('https://www.crystalthedeveloper.ca/need-help', '_blank') }}><strong>NEED HELP?</strong></button></h2>

            </Html>
            <Logo />
        </group>
    </RigidBody>

    </>

}
