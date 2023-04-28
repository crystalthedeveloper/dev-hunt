import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useMatcapTexture, Text3D } from '@react-three/drei'
import ServicesLevel from './ServicesLevel.jsx'
import ContactLevel from './ContactLevel.jsx'
import StartLevel from './StartLevel.jsx'

{/* FIX COLORS FROM THREE */ }
THREE.ColorManagement.enabled = true
{/* All Box Geometry */ }
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
{/* Text3D */ }
const sizeText3D = 0.2
const fontText3D = "Cinzel ExtraBold_Regular.json"
const bevelThicknessText3D = 0
const bevelSizeText3D = 0
const heightText3D = [0.1]
{/* Text3D positions Designer & Animation*/ }
const positionadobeAfterEffectsText3D = [-10, -9, -6]
const positionAdobeXdText3D = [-7, -9, -13]
const positionPhotoshopText3D = [-1, -9, -3]
const positionBlenderText3D = [10, -9, -13]
const positionFigmaText3D = [-4, -9, -7]
const positionMusicText3D = [3, -9, -13]
const positionIllustratorText3D = [8, -9, -6]
const positionCanvaText3D = [-3, -9, -11]
{/* Text3D Developer */ }

const positionReactText3D = [-6, 0, -20]
const positionThreeJsText3D = [-2, 0, -20]
const positionPythonText3D = [4, 0, -24]
const positionJqueryText3D = [-8, 0, -20]
const positionJavascriptText3D = [-7, 0, -24]
const positionCssText3D = [5, 0, -16]
const positionVisualStudioCodeText3D = [0, 0, -24]

const positionHText3D = [2, 0, -8]
const positionTText3D = [2.3, 0, -8]
const positionMText3D = [2.5, 0, -8]
const positionLText3D = [2.7, 0, -8]

const positionLitmusText3D = [1, 0, 3]
const positionJiraText3D = [0, 5, -8]
const positionGithubGitText3D = [-8, 0, 3]
const positionSeoText3D = [-5, 0, -10]
const positionGoogleTagManagerText3D = [-3, 0, 4]
const positionSpeedOptimizationText3D = [4, 0, 0]
const positionGoogleAnalyticsText3D = [-8, 0, 0]


{/* gravity Text3D Developer */ }
const gravityScaleDeveloper = [0.3]
const gravityScaleCMS = [1]
{/* Basic Material Color */ }
const meshBasicMaterialColorYellow = "#ffe600"
const meshBasicMaterialColorGreen = "#039f00"
const meshBasicMaterialColorBlue = "#1245a8"


{/******************* EXPERTISE FUNCTION *******************/ }
export function BlockExpertise({ position = [0, 0, 0] }) {

    const [matcap] = useMatcapTexture('E6BF3C_5A4719_977726_FCFC82')

    return <><group position={position}>

        {/* Html Developer */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="html">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionHText3D}

            >
                H
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody >

        <RigidBody gravityScale={gravityScaleDeveloper}>
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionTText3D}
            >
                T
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody >
        <RigidBody gravityScale={gravityScaleDeveloper}>
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionMText3D}
            >
                M
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody >
        <RigidBody gravityScale={gravityScaleDeveloper}>
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionLText3D}
            >
                L
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody >
        {/* Css Developer */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="css">
            <Text3D

                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionCssText3D}
            >
                CSS
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* Javascript Developer */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="javascript">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionJavascriptText3D}
            >
                Javascript
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* ‍Jquery */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="jquery">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionJqueryText3D}
            >
                Jquery
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* ‍React Developer */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="react">

            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionReactText3D}
            >
                React
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* ‍Three.js */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="ThreeJs">

            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionThreeJsText3D}
            >
                Three.js
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* ‍python Developer */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="python">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionPythonText3D}
            >
                Python
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>

        {/* Github Git Developer */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="githubGit">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionGithubGitText3D}
            >
                Github & Git
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* Speed Optimization */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="speedOptimization">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionSpeedOptimizationText3D}
            >
                Speed Optimization
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody >
        {/* seo */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="seo">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionSeoText3D}
            >
                SEO
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody >
        {/* Google Tag Manager */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="tagManager">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionGoogleTagManagerText3D}
            >
                Google Tag Manager
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody >
        {/* Google Analytics */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="analytics">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionGoogleAnalyticsText3D}
            >
                Google Analytics
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody >
        {/* ‍Jira */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="jira">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionJiraText3D}
            >
                Jira
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>

        {/* ‍Litmus */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="litmus">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionLitmusText3D}
            >
                Litmus
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* Visual Studio Code */}
        <RigidBody gravityScale={gravityScaleDeveloper} name="studio">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionVisualStudioCodeText3D}
            >
                Visual Studio Code
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>

        {/* DESIGNER & ANIMATION TOOLS */}
        {/* blender */}
        <RigidBody name="blender">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionBlenderText3D}
            >
                Blender
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* Illustrator */}
        <RigidBody name="illustrator">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionIllustratorText3D}
            >
                Illustrator
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* Photoshop */}
        <RigidBody name="photoshop">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionPhotoshopText3D}
            >
                Photoshop
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* adobe After Effects */}
        <RigidBody name="ae">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionadobeAfterEffectsText3D}
            >
                After Effects
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* figma */}
        <RigidBody name="figma">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionFigmaText3D}
            >
                Figma
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>
        {/* Adobe XD */}
        <RigidBody name="xd">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionAdobeXdText3D}
            >
                Adobe XD
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>

        {/* canva */}
        <RigidBody name="canva">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionCanvaText3D}
            >
                Canva
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>

        {/* music */}
        <RigidBody name="music">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3D}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionMusicText3D}
            >
                Music
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </RigidBody>

    </group>
    </>
}

{/******************* END EXPERTISE FUNCTION *******************/ }

{/******************* END STAIRS FUNCTION *******************/ }
{/******************* SPINNER FUNCTION *******************/ }
export function BlockSpinner({ position = [0, 0, 0] }) {
    const obstacle = useRef()
    const [speed] = useState(() => (Math.random() + 0.1) * (Math.random() < 0.5 ? - 1 : 1))

    {/* Spinner anmation */ }
    useFrame((state) => {
        {/* need clock to anmation */ }
        const time = state.clock.getElapsedTime()
        {/* rotation anmation */ }
        const rotation = new THREE.Quaternion()

        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))
        obstacle.current.setNextKinematicRotation(rotation)
    })

    return <group position={position}>
        {/* Spinner Rigidbody Physics */}
        <RigidBody type="kinematicPosition"
            ref={obstacle}
            position={[0, 1, -10]}
            restitution={0.2}
            friction={0}>
            <mesh geometry={boxGeometry}>
                <meshBasicMaterial color={meshBasicMaterialColorYellow} />
            </mesh>
        </RigidBody>
    </group>
}
{/******************* END SPINNER FUNCTION *******************/ }
{/****************** LIMBO FUNCTION ******************/ }
export function BlockLimbo({ position = [0, 0, 0] }) {
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 1)

    {/* Limbo anmation */ }
    useFrame((state) => {
        {/* need clock to anmation */ }
        const time = state.clock.getElapsedTime()
        {/* up and down anmation */ }
        const y = Math.sin(time + timeOffset) + 1.30
        obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1] + y, z: position[2] })
    })

    return <group position={position}>
        {/* Limbo Rigidbody Physics */}
        <RigidBody type="kinematicPosition"
            ref={obstacle}
            restitution={0.2}
            friction={0}
            colliders={false}
        >
            <mesh geometry={boxGeometry}>
                <meshBasicMaterial color={meshBasicMaterialColorYellow} />
            </mesh>
        </RigidBody>
    </group>
}
{/****************** END LIMBO FUNCTION ******************/ }
{/******************* AXE FUNCTION *******************/ }
export function BlockAxe({ position = [6, 0, -5] }) {
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

    {/* Axe anmation */ }
    useFrame((state) => {
        {/* need clock to anmation */ }
        const time = state.clock.getElapsedTime()
        {/* up and down anmation */ }
        const z = Math.sin(time + timeOffset) * 10
        obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1], z: position[2] + z })
    })

    return <group position={position}>

        {/* Axe Rigidbody Physics */}
        <RigidBody type="kinematicPosition"
            ref={obstacle}
            colliders={false}
            position={[0, 0.3, 0]}
            restitution={0.2}
            friction={0}>

            {/* Axe mesh */}
            <mesh geometry={boxGeometry}>
                <meshBasicMaterial color={meshBasicMaterialColorYellow} />
            </mesh>
        </RigidBody>
    </group>
}
{/******************* END AXE FUNCTION *******************/ }
{/******************* EXPORT TO SENSE *******************/ }
export function Level() {

    return <>

        <StartLevel />
        <ServicesLevel />
        <ContactLevel />
        <BlockExpertise position={[0, 0, 0]} />

        <BlockSpinner position={[14, -9, -6]} />
        <BlockSpinner position={[-2, 2, -10]} />

        <BlockLimbo position={[-9, 0.60, -3]} />

        <BlockAxe position={[0, 45, -70]} />



    </>
}
