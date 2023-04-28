import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html, Image } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* SERVICES LEVEL POSITION */ }
const positionY = -8.9


{/******************* CONTACT FUNCTION *******************/ }
export default function ContactLevel() {

    return <RigidBody type="fixed">
        <group position={[3, positionY, -3]}>
            {/* MAILCHIMP */}
            <Image url="/texture/mail.png" scale={[1, 1]} position={[-3, 1.5, -6]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/mailchimp', '_blank')}/> 
            {/* INSTAGRAM */}
            <Image url="/texture/instagram.png" scale={[0.6, 0.6]} position={[-5, 1, -4]} transparent onClick={()=> window.open('https://www.instagram.com/crystalthedeveloper/', '_blank')}/> 
            {/* FACEBOOK */}
            <Image url="/texture/facebook.png" scale={[1, 1]} position={[-1, 1, -8]} transparent onClick={()=> window.open('https://www.facebook.com/Crystalthedeveloper/reviews/?ref=page_internal', '_blank')}/> 
            {/* YOUTUBE */}
            <Image url="/texture/youtube.png" scale={[1, 1]} position={[1, 1.5, -6]} transparent onClick={()=> window.open('https://www.youtube.com/channel/UCeUkpwkof62DlSAU9C2uLtA', '_blank')}/> 
            {/* LINKEDIN */}
            <Image url="/texture/linkedin.png" scale={[1, 1]} position={[-3, 0.3, -12]} transparent onClick={()=> window.open('https://www.linkedin.com/in/crystal-lewis-b14b7386/', '_blank')}/> 
            {/* REVIEWS */}
            <Image url="/texture/reviews.png" scale={[1, 1]} position={[-5, 2, -8]} transparent onClick={()=> window.open('https://www.facebook.com/Crystalthedeveloper/reviews', '_blank')}/> 
        </group>
    </RigidBody>

}
