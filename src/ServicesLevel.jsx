
import { RigidBody } from '@react-three/rapier'
import { Image } from '@react-three/drei'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

{/* SERVICES LEVEL POSITION */ }
const positionY = 0
const imagePositionY = 6
const imagepositionZ = -55
const imagePositionCenter = 0

{/******************* SERVICES FUNCTION *******************/ }
export default function ServicesLevel() {
    const imagesWebflow = useRef()
    const [hoveredWebflow, hoverWebflow] = useState(false)
    const overWebflow = () => hoverWebflow(true)
    const outWebflow = () => hoverWebflow(false)

    const imagesWordpress = useRef()
    const [hoveredWordpress, hoverWordpress] = useState(false)
    const overWordpress = () => hoverWordpress(true)
    const outWordpress = () => hoverWordpress(false)

    const imagesAdobeExperience = useRef()
    const [hoveredAdobeExperience, hoverAdobeExperience] = useState(false)
    const overAdobeExperience = () => hoverAdobeExperience(true)
    const outAdobeExperience = () => hoverAdobeExperience(false)

    const imagesMagnolia = useRef()
    const [hoveredMagnolia, hoverMagnolia] = useState(false)
    const overMagnolia = () => hoverMagnolia(true)
    const outMagnolia = () => hoverMagnolia(false)

    const imagesAnimation = useRef()
    const [hoveredAnimation, hoverAnimation] = useState(false)
    const overAnimation = () => hoverAnimation(true)
    const outAnimation = () => hoverAnimation(false)

    const imagesMailchimp = useRef()
    const [hoveredMailchimp, hoverMailchimp] = useState(false)
    const overMailchimp = () => hoverMailchimp(true)
    const outMailchimp = () => hoverMailchimp(false)

    const imagesSalesforce = useRef()
    const [hoveredSalesforce, hoverSalesforce] = useState(false)
    const overSalesforce = () => hoverSalesforce(true)
    const outSalesforce = () => hoverSalesforce(false)

    const imagesEmail = useRef()
    const [hoveredEmail, hoverEmail] = useState(false)
    const overEmail = () => hoverEmail(true)
    const outEmail = () => hoverEmail(false)
    useFrame(() => {
        imagesWebflow.current.material.grayscale = (hoveredWebflow ? 0 : 1)
        imagesWordpress.current.material.grayscale = (hoveredWordpress ? 0 : 1)
        imagesAdobeExperience.current.material.grayscale = (hoveredAdobeExperience ? 0 : 1)
        imagesMagnolia.current.material.grayscale = (hoveredMagnolia ? 0 : 1)
        imagesAnimation.current.material.grayscale = (hoveredAnimation ? 0 : 1)
        imagesMailchimp.current.material.grayscale = (hoveredMailchimp ? 0 : 1)
        imagesSalesforce.current.material.grayscale = (hoveredSalesforce ? 0 : 1)
        imagesEmail.current.material.grayscale = (hoveredEmail ? 0 : 1)
    })



    return <>
        <RigidBody type="fixed">
            <group position={[0, positionY,imagepositionZ]}>
                {/* WEBFLOW */}


                <Image url="/texture/webflow.png"
                    scale={[1.6, 0.4]}
                    position={[imagePositionCenter, imagePositionY, 40]}
                    transparent
                    ref={imagesWebflow}
                    onPointerOver={overWebflow}
                    onPointerOut={outWebflow}
                    onClick={() => { window.open('https://www.crystalthedeveloper.ca/portfolio#webflow', '_blank') }}
                />


                {/* WORDPRESS */}
                <Image url="/texture/WordPress.png"
                    scale={[1, 1]}
                    position={[imagePositionCenter, imagePositionY, 35]}
                    transparent
                    ref={imagesWordpress}
                    onPointerOver={overWordpress}
                    onPointerOut={outWordpress}
                    onClick={() => { window.open('https://www.crystalthedeveloper.ca/portfolio#wordpress', '_blank') }}
                />

                {/* ADOBE EXPERIENCE MANAGER */}

                <Image url="/texture/AEM.png"
                    scale={[0.5, 0.5]}
                    position={[imagePositionCenter, imagePositionY, 30]}
                    transparent
                    ref={imagesAdobeExperience}
                    onPointerOver={overAdobeExperience}
                    onPointerOut={outAdobeExperience}
                    onClick={() => { window.open('https://www.crystalthedeveloper.ca/portfolio#adobe', '_blank') }}

                />

                {/* MAGNOLIA */}

                <Image url="/texture/Magnolia.png"
                    scale={[1.1, 0.3]}
                    position={[imagePositionCenter, imagePositionY, 25]}
                    transparent
                    ref={imagesMagnolia}
                    onPointerOver={overMagnolia}
                    onPointerOut={outMagnolia}
                    onClick={() => { window.open('https://www.crystalthedeveloper.ca/portfolio#magnolia', '_blank') }}
                />

                {/* ANIMATION */}

                <Image url="/texture/Animation.png"
                    scale={[0.8, 0.8]}
                    position={[imagePositionCenter, imagePositionY, 1]}
                    transparent
                    ref={imagesAnimation}
                    onPointerOver={overAnimation}
                    onPointerOut={outAnimation}
                    onClick={() => { window.open('https://www.crystalthedeveloper.ca/portfolio#animation', '_blank') }}
                />

                {/* MAILCHIMP */}

                <Image url="/texture/Mailchimp.png"
                    scale={[0.5, 0.52]}
                    position={[imagePositionCenter, imagePositionY, 20]}
                    transparent
                    ref={imagesMailchimp}
                    onPointerOver={overMailchimp}
                    onPointerOut={outMailchimp}
                    onClick={() => { window.open('https://www.crystalthedeveloper.ca/portfolio#mailchimp', '_blank') }}
                />

                {/* SALESFORCE */}

                <Image url="/texture/Salesforce.png"
                    scale={[0.9, 0.62]}
                    position={[imagePositionCenter, imagePositionY,15]}
                    transparent
                    ref={imagesSalesforce}
                    onPointerOver={overSalesforce}
                    onPointerOut={outSalesforce}
                    onClick={() => { window.open('https://www.crystalthedeveloper.ca/portfolio#salesforce', '_blank') }}
                />

                {/* EMAIL */}

                <Image url="/texture/Email.png"
                    scale={[0.8, 0.8]}
                    position={[imagePositionCenter, imagePositionY, 10]}
                    transparent
                    ref={imagesEmail}
                    onPointerOver={overEmail}
                    onPointerOut={outEmail}
                    onClick={() => { window.open('https://www.crystalthedeveloper.ca/portfolio#email', '_blank') }}
                />


            </group>
        </RigidBody>
    </>
}
