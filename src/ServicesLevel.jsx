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
                <Image url="/texture/webflow.png" scale={[4, 1]} position={[2, 2.5, -38]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/portfolio#webflow', '_blank')}/> 
                 {/* WORDPRESS */}
                 <Image url="/texture/WordPress.png" scale={[1.6, 1]} position={[4, 6, -40]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/portfolio#wordpress', '_blank')}/> 
                 {/* ADOBE EXPERIENCE MANAGER */}
                 <Image url="/texture/AEM.png" scale={[1, 1]} position={[0, 9, -50]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/portfolio#adobe', '_blank')}/> 
                 {/* MAGNOLIA */}
                 <Image url="/texture/Magnolia.png" scale={[4, 1]} position={[-4, 3.2, -50]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/portfolio#magnolia', '_blank')}/> 
                 {/* ANIMATION */}
                 <Image url="/texture/Animation.png" scale={[2, 2]} position={[0, 6, -60]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/portfolio#animation', '_blank')}/> 
                 {/* MAILCHIMP */}
                 <Image url="/texture/Mailchimp.png" scale={[1.9, 0.5]} position={[4, 4, -38]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/portfolio#mailchimp', '_blank')}/> 
                 {/* SALESFORCE */}
                 <Image url="/texture/Salesforce.png" scale={[2.2, 1.5]} position={[-4, 7, -50]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/portfolio#salesforce', '_blank')}/> 
                 {/* EMAIL */}
                 <Image url="/texture/Email.png" scale={[0.7, 0.7]} position={[7, 3, -40]} transparent onClick={()=> window.open('https://www.crystalthedeveloper.ca/portfolio#email', '_blank')}/> 

            </group>
        </RigidBody>
    </>
}
