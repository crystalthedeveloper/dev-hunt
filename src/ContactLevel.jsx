import { RigidBody } from '@react-three/rapier'
import { Image } from '@react-three/drei'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'


{/* SERVICES LEVEL POSITION */ }
const positionY = 0
const Imagescale = 0.3

{/******************* CONTACT FUNCTION *******************/ }
export default function ContactLevel() {
    const imagesMailchimpEmail = useRef()
    const [hoveredMailchimpEmail, hoverMailchimpEmail] = useState(false)
    const overMailchimpEmail = () => hoverMailchimpEmail(true)
    const outMailchimpEmail = () => hoverMailchimpEmail(false)

    const imagesInstagram = useRef()
    const [hoveredInstagram, hoverInstagram] = useState(false)
    const overInstagram = () => hoverInstagram(true)
    const outInstagram = () => hoverInstagram(false)

    const imagesFacebook = useRef()
    const [hoveredFacebook, hoverFacebook] = useState(false)
    const overFacebook = () => hoverFacebook(true)
    const outFacebook = () => hoverFacebook(false)

    const imagesLinkedin = useRef()
    const [hoveredLinkedin, hoverLinkedin] = useState(false)
    const overLinkedin = () => hoverLinkedin(true)
    const outLinkedin = () => hoverLinkedin(false)

    const imagesYoutube = useRef()
    const [hoveredYoutube, hoverYoutube] = useState(false)
    const overYoutube = () => hoverYoutube(true)
    const outYoutube = () => hoverYoutube(false)

    const imagesReviews = useRef()
    const [hoveredReviews, hoverReviews] = useState(false)
    const overReviews = () => hoverReviews(true)
    const outReviews = () => hoverReviews(false)
    useFrame(() => {
        imagesMailchimpEmail.current.material.grayscale = (hoveredMailchimpEmail ? 1 : 0)
        imagesInstagram.current.material.grayscale = (hoveredInstagram ? 1 : 0)
        imagesFacebook.current.material.grayscale = (hoveredFacebook ? 1 : 0)
        imagesLinkedin.current.material.grayscale = (hoveredLinkedin ? 1 : 0)
        imagesYoutube.current.material.grayscale = (hoveredYoutube ? 1 : 0)
        imagesReviews.current.material.grayscale = (hoveredReviews ? 1 : 0)

    })
    return <RigidBody type="fixed">
        <group position={[0, positionY, -16]}>
            {/* MAILCHIMP */}

            <Image url="/texture/mail.png"
                scale={[1.5, 1.5]}
                position={[0, 1, -9]}
                transparent
                ref={imagesMailchimpEmail}
                onPointerOver={overMailchimpEmail}
                onPointerOut={outMailchimpEmail}
                onClick={() => { window.open('https://www.crystalthedeveloper.ca/mailchimp', '_blank') }}
            />

            {/* INSTAGRAM */}

            <Image url="/texture/instagram.png"
                scale={Imagescale}
                position={[2, 1, -1]}
                transparent
                ref={imagesInstagram}
                onPointerOver={overInstagram}
                onPointerOut={outInstagram}
                onClick={() => { window.open('https://www.instagram.com/crystalthedeveloper/', '_blank') }}
            />

            {/* FACEBOOK */}

            <Image url="/texture/facebook.png"
                scale={Imagescale}
                position={[-2, 1, 6]}
                transparent
                ref={imagesFacebook}
                onPointerOver={overFacebook}
                onPointerOut={outFacebook}
                onClick={() => { window.open('https://www.facebook.com/Crystalthedeveloper/reviews/?ref=page_internal', '_blank') }}
            />

            {/* LINKEDIN */}

            <Image url="/texture/linkedin.png"
                scale={Imagescale}
                position={[-3, 0.8, 0]}
                transparent
                ref={imagesLinkedin}
                onPointerOver={overLinkedin}
                onPointerOut={outLinkedin}
                onClick={() => { window.open('https://www.linkedin.com/in/crystal-lewis-b14b7386/', '_blank') }}
            />

            {/* YOUTUBE */}

            <Image url="/texture/youtube.png"
                scale={Imagescale}
                position={[-2, 0, -3]}
                transparent
                ref={imagesYoutube}
                onPointerOver={overYoutube}
                onPointerOut={outYoutube}
                onClick={() => { window.open('https://www.youtube.com/channel/UCeUkpwkof62DlSAU9C2uLtA', '_blank') }}
            />

            {/* REVIEWS */}

            <Image url="/texture/reviews.png"
                scale={Imagescale}
                position={[-1, 0.4, -5]}
                transparent
                ref={imagesReviews}
                onPointerOver={overReviews}
                onPointerOut={outReviews}
                onClick={() => { window.open('https://www.facebook.com/Crystalthedeveloper/reviews', '_blank') }}
            />

        </group>
    </RigidBody>
}
