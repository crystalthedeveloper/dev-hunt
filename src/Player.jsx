import { useRapier, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls, useGLTF, Float } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import useGame from './stores/useGame.jsx'


{/******************* Player function*******************/ }
export default function Player() {

    {/* REF */ }
    const body = useRef()
    const characterLogo = useGLTF('./characterLogo.glb')
    {/* Keyboard */ }
    const [subscribeKeys, getKeys] = useKeyboardControls()
    {/******************* rapier *******************/ }
    const { rapier, world } = useRapier()
    const rapierWorld = world.raw()
    {/******************* Camera *******************/ }
    const [smoothedCameraPosition] = useState(() => new THREE.Vector3(10, 10, 10))
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3())
    {/******************* Game *******************/ }
    const start = useGame((state) => state.start)
    const restart = useGame((state) => state.restart)
    {/******************* jump *******************/ }
    // const jump = () => {
    //     const origin = body.current.translation()
    //     origin.y -= 0.3
    //     const direction = { x: 0, y: - 1, z: 0 }
    //     const ray = new rapier.Ray(origin, direction)
    //     const hit = rapierWorld.castRay(ray, 10, true)

    //     if (hit.toi < 0.5) {
    //         body.current.applyImpulse({ x: 0, y: 0.1, z: 0 })
    //     }
    // }
    {/******************* Mobile Touch jump *******************/ }
    // const jumpButton = useGame((state) => state.jumpButton)
    // if (jumpButton) {
    //     jump()
    // }
    {/******************* removeAll Increment 3DText *******************/ }
    const removeAllIncrements = useGame((state) => state.removeAllIncrements)
    {/******************* reset *******************/ }
    const reset = () => {
        removeAllIncrements()
        body.current.setTranslation({ x: 0, y: 1, z: 0 })
        body.current.setLinvel({ x: 0, y: 0, z: 0 })
        body.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    {/******************* increase Increment 3DText *******************/ }
    const increaseIncrementHtml = useGame((state) => state.increaseIncrementHtml)
    const increaseIncrementCss = useGame((state) => state.increaseIncrementCss)
    const increaseIncrementJavascript = useGame((state) => state.increaseIncrementJavascript)
    const increaseIncrementJquery = useGame((state) => state.increaseIncrementJquery)
    const increaseIncrementReact = useGame((state) => state.increaseIncrementReact)
    const increaseIncrementThreeJs = useGame((state) => state.increaseIncrementThreeJs)
    const increaseIncrementPython = useGame((state) => state.increaseIncrementPython)
    const increaseIncrementGithubGit = useGame((state) => state.increaseIncrementGithubGit)
    const increaseIncrementSpeedOptimization = useGame((state) => state.increaseIncrementSpeedOptimization)
    const increaseIncrementSeo = useGame((state) => state.increaseIncrementSeo)
    const increaseIncrementGoogleTagManager = useGame((state) => state.increaseIncrementGoogleTagManager)
    const increaseIncrementGoogleAnalytics = useGame((state) => state.increaseIncrementGoogleAnalytics)
    const increaseIncrementJira = useGame((state) => state.increaseIncrementJira)
    const increaseIncrementLitmus = useGame((state) => state.increaseIncrementLitmus)
    const increaseIncrementVisualStudioCode = useGame((state) => state.increaseIncrementVisualStudioCode)
    const increaseIncrementBlender = useGame((state) => state.increaseIncrementBlender)
    const increaseIncrementIllustrator = useGame((state) => state.increaseIncrementIllustrator)
    const increaseIncrementPhotoshop = useGame((state) => state.increaseIncrementPhotoshop)
    const increaseIncrementAfterEffects = useGame((state) => state.increaseIncrementAfterEffects)
    const increaseIncrementFigma = useGame((state) => state.increaseIncrementFigma)
    const increaseIncrementAdobeXD = useGame((state) => state.increaseIncrementAdobeXD)
    const increaseIncrementCanva = useGame((state) => state.increaseIncrementCanva)
    const increaseIncrementMusic = useGame((state) => state.increaseIncrementMusic)

    const increaseIncrementWebflow = useGame((state) => state.increaseIncrementWebflow)
    const increaseIncrementWordpress = useGame((state) => state.increaseIncrementWordpress)
    const increaseIncrementAdobeExperience = useGame((state) => state.increaseIncrementAdobeExperience)
    const increaseIncrementMagnolia = useGame((state) => state.increaseIncrementMagnolia)
    const increaseIncrementAnimation = useGame((state) => state.increaseIncrementAnimation)
    const increaseIncrementMailchimp = useGame((state) => state.increaseIncrementMailchimp)
    const increaseIncrementSalesforce = useGame((state) => state.increaseIncrementSalesforce)
    
    const increaseAllIncrements = useGame((state) => state.increaseAllIncrements)

    const incrementHtml = useGame((state) => state.incrementHtml)
    const incrementCss = useGame((state) => state.incrementCss)
    const incrementJavascript = useGame((state) => state.incrementJavascript)
    const incrementJquery = useGame((state) => state.incrementJquery)
    const incrementReact = useGame((state) => state.incrementReact)
    const incrementThreeJs = useGame((state) => state.incrementThreeJs)
    const incrementPython = useGame((state) => state.incrementPython)
    const incrementGithubGit = useGame((state) => state.incrementGithubGit)
    const incrementSpeedOptimization = useGame((state) => state.incrementSpeedOptimization)
    const incrementSeo = useGame((state) => state.incrementSeo)
    const incrementGoogleTagManager = useGame((state) => state.incrementGoogleTagManager)
    const incrementGoogleAnalytics = useGame((state) => state.incrementGoogleAnalytics)
    const incrementJira = useGame((state) => state.incrementJira)
    const incrementLitmus = useGame((state) => state.incrementLitmus)
    const incrementVisualStudioCode = useGame((state) => state.incrementVisualStudioCode)
    const incrementBlenders = useGame((state) => state.incrementBlender)
    const incrementIllustrator = useGame((state) => state.incrementIllustrator)
    const incrementPhotoshop = useGame((state) => state.incrementCss)
    const incrementAfterEffects = useGame((state) => state.incrementAfterEffects)
    const incrementFigma = useGame((state) => state.incrementFigma)
    const incrementAdobeXD = useGame((state) => state.incrementAdobeXD)
    const incrementCanva = useGame((state) => state.incrementCanva)
    const incrementMusic = useGame((state) => state.incrementMusic)

    const incrementWebflow = useGame((state) => state.incrementWebflow)
    const incrementWordpress = useGame((state) => state.incrementWordpress)
    const incrementAdobeExperience = useGame((state) => state.incrementAdobeExperience)
    const incrementMagnolia = useGame((state) => state.incrementMagnolia)
    const incrementAnimation = useGame((state) => state.incrementAnimation)
    const incrementMailchimp = useGame((state) => state.incrementMailchimp)
    const incrementSalesforce = useGame((state) => state.incrementSalesforce)

    const [hitSound] = useState(() => new Audio('./hit.mp3'))

    const onCollisionEnter = (target) => {

        if (target.rigidBodyObject.name === 'html') {
            increaseIncrementHtml()

            hitSound.currentTime = 0
            hitSound.volume = Math.random()
            hitSound.play()

        } else if (target.rigidBodyObject.name === 'css') {
            increaseIncrementCss()
        }
        else if (target.rigidBodyObject.name === 'javascript') {
            increaseIncrementJavascript()
        }
        else if (target.rigidBodyObject.name === 'jquery') {
            increaseIncrementJquery()
        }
        else if (target.rigidBodyObject.name === 'react') {
            increaseIncrementReact()
        }
        else if (target.rigidBodyObject.name === 'ThreeJs') {
            increaseIncrementThreeJs()
        }
        else if (target.rigidBodyObject.name === 'python') {
            increaseIncrementPython()
        }
        else if (target.rigidBodyObject.name === 'githubGit') {
            increaseIncrementGithubGit()
        }
        else if (target.rigidBodyObject.name === 'speedOptimization') {
            increaseIncrementSpeedOptimization()
        }
        else if (target.rigidBodyObject.name === 'seo') {
            increaseIncrementSeo()
        }
        else if (target.rigidBodyObject.name === 'tagManager') {
            increaseIncrementGoogleTagManager()
        }
        else if (target.rigidBodyObject.name === 'analytics') {
            increaseIncrementGoogleAnalytics()
        }
        else if (target.rigidBodyObject.name === 'jira') {
            increaseIncrementJira()
        }
        else if (target.rigidBodyObject.name === 'litmus') {
            increaseIncrementLitmus()
        }
        else if (target.rigidBodyObject.name === 'studio') {
            increaseIncrementVisualStudioCode()
        }
        else if (target.rigidBodyObject.name === 'blender') {
            increaseIncrementBlender()
        }
        else if (target.rigidBodyObject.name === 'illustrator') {
            increaseIncrementIllustrator()
        }
        else if (target.rigidBodyObject.name === 'photoshop') {
            increaseIncrementPhotoshop()
        }
        else if (target.rigidBodyObject.name === 'ae') {
            increaseIncrementAfterEffects()
        }
        else if (target.rigidBodyObject.name === 'figma') {
            increaseIncrementFigma()
        }
        else if (target.rigidBodyObject.name === 'xd') {
            increaseIncrementAdobeXD()
        }
        else if (target.rigidBodyObject.name === 'canva') {
            increaseIncrementCanva()
        }
        else if (target.rigidBodyObject.name === 'music') {

            increaseIncrementMusic()
        }
        else if (target.rigidBodyObject.name === 'webflow') {

            increaseIncrementWebflow()
        }
        else if (target.rigidBodyObject.name === 'wordpress') {

            increaseIncrementWordpress()
        }
        else if (target.rigidBodyObject.name === 'adobeexperience') {

            increaseIncrementAdobeExperience()
        }
        else if (target.rigidBodyObject.name === 'magnolia') {

            increaseIncrementMagnolia()
        }
        else if (target.rigidBodyObject.name === 'animation') {

            increaseIncrementAnimation()
        }
        else if (target.rigidBodyObject.name === 'mailchimp') {

            increaseIncrementMailchimp()
        }
        else if (target.rigidBodyObject.name === 'salesforce') {

            increaseIncrementSalesforce()
        }
    }
    const onCollisionExit = () => {
        if (incrementHtml && incrementCss && incrementJavascript && incrementJquery && incrementReact && incrementThreeJs && incrementPython && incrementGithubGit && incrementSpeedOptimization && incrementSeo && incrementGoogleTagManager && incrementGoogleAnalytics && incrementJira && incrementLitmus && incrementVisualStudioCode && incrementBlenders && incrementIllustrator && incrementPhotoshop && incrementAfterEffects && incrementFigma && incrementAdobeXD && incrementCanva && incrementMusic && incrementWebflow && incrementWordpress && incrementAdobeExperience && incrementMagnolia && incrementAnimation && incrementMailchimp && incrementSalesforce) {

            increaseAllIncrements()
        }
    }


    {/******************* useEffect *******************/ }
    useEffect(() => {
        const unsubscribeReset = useGame.subscribe(
            (state) => state.phase,
            (value) => {
                if (value === 'ready')
                    reset()

            }
        )

        // const unsubscribeJump = subscribeKeys(
        //     (state) => state.jump,
        //     (value) => {
        //         if (value)
        //             jump()

        //     }
        // )

        const unsubscribeAny = subscribeKeys(
            () => {
                start()
            }
        )

        return () => {
            unsubscribeReset()
            //unsubscribeJump()
            unsubscribeAny()
        }

    }, [])

    {/******************* Mobile Touch *******************/ }
    const forwardButton = useGame((state) => state.forwardButton)
    const backwardButton = useGame((state) => state.backwardButton)
    const leftwardButton = useGame((state) => state.leftwardButton)
    const rightwardButton = useGame((state) => state.rightwardButton)
    const jumpButton = useGame((state) => state.jumpButton)

    {/******************* useFrame *******************/ }
    useFrame((state, delta) => {

        /**
         * Controls
         */
        const { forward, backward, leftward, rightward, jump } = getKeys()



        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }

        const impulseStrength = 1.3 * delta
        const torqueStrength = 0.2 * delta


        if (forward || forwardButton) {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength

        }
        if (jump || jumpButton) {
            impulse.y += impulseStrength
            torque.x -= torqueStrength

        }

        if (rightward || rightwardButton) {
            impulse.x += impulseStrength
            torque.z -= torqueStrength
        }

        if (backward || backwardButton) {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }

        if (leftward || leftwardButton) {
            impulse.x -= impulseStrength
            torque.z += torqueStrength
        }

        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)


        /**
         * Camera
         */
        const bodyPosition = body.current.translation()

        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 3.25
        cameraPosition.y += 0.65

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 0.55

        smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
        smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

        state.camera.position.copy(smoothedCameraPosition)
        state.camera.lookAt(smoothedCameraTarget)

        /**
        * Phases
        */

        if (bodyPosition.y < - 3)
            restart()



    })


    return <RigidBody
        onCollisionEnter={onCollisionEnter}
        onCollisionExit={onCollisionExit}
        name="Crystal"
        ref={body}
        colliders="ball"
        restitution={0.2}
        friction={1}
        linearDamping={3}
        angularDamping={3}
        position={[0, 1, 0]}>
        <primitive object={characterLogo.scene} />
    </RigidBody>

}

useGLTF.preload('./characterLogo.glb')