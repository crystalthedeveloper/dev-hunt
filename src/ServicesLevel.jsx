import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html, Image } from '@react-three/drei'
import Logo from './Logo.jsx'


{/* SERVICES LEVEL POSITION */ }
//const positionY = 1.15
const positionY = 2



{/******************* SERVICES FUNCTION *******************/ }
export default function ServicesLevel() {
   
    return <>
        <RigidBody type="fixed">
            <group position={[-2, positionY, -20]}>
                {/* WEBFLOW */}
                <Image url="/texture/webflow.png" scale={[4, 1]} position={[-3, 3.2, -40]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/services/webflow', '_blank')}/> 
                 {/* WORDPRESS */}
                 <Image url="/texture/WordPress.png" scale={[1.6, 1]} position={[4, 6, -40]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/services/wordpress', '_blank')}/> 
                 {/* ADOBE EXPERIENCE MANAGER */}
                 <Image url="/texture/AEM.png" scale={[1, 1]} position={[-2, 10, -50]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/services/adobe-experience-manager', '_blank')}/> 
                 {/* MAGNOLIA */}
                 <Image url="/texture/Magnolia.png" scale={[4, 1]} position={[2, 2.5, -40]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/services/magnolia-cms', '_blank')}/> 
                 {/* ANIMATION */}
                 <Image url="/texture/Animation.png" scale={[2, 2]} position={[-1, 6, -60]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/services/animation', '_blank')}/> 
                 {/* MAILCHIMP */}
                 <Image url="/texture/Mailchimp.png" scale={[1.9, 0.5]} position={[4, 4, -40]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/services/mailchimp', '_blank')}/> 
                 {/* SALESFORCE */}
                 <Image url="/texture/Salesforce.png" scale={[2.2, 1.5]} position={[-6, 7, -50]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/services/salesforce', '_blank')}/> 
                 {/* EMAIL */}
                 <Image url="/texture/Email.png" scale={[1, 1]} position={[8, 4, -40]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/services/email-developer', '_blank')}/> 

            </group>
        </RigidBody>
    </>
}
