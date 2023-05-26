import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useMatcapTexture, Text3D, Cloud, Float } from '@react-three/drei'
import ServicesLevel from './ServicesLevel.jsx'
import StartLevel from './StartLevel.jsx'

{/* FIX COLORS FROM THREE */ }
THREE.ColorManagement.enabled = true

{/* All Box Geometry */ }
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

{/* Text3D */ }
const sizeText3D = 0.1
const sizeText3DTwo = 0.09
const sizeText3DThree = 0.13
const fontText3D = "Cinzel ExtraBold_Regular.json"
const bevelThicknessText3D = 0
const bevelSizeText3D = 0
const heightText3D = [0.03]

{/* Text3D positions */ }
const text3DpositionDesignerY = 2
const text3DpositionDeveloperY = 3
const text3DpositionMoreY = 0

{/* DESGIN */ }
const positionBlenderText3D = [7, text3DpositionDesignerY, -41]
const positionPhotoshopText3D = [5, text3DpositionDesignerY, -40]
const positionIllustratorText3D = [4, text3DpositionDesignerY, -40]
const positionadobeAfterEffectsText3D = [6, text3DpositionDesignerY, -39]
const positionAdobeXdText3D = [6, text3DpositionDesignerY, -42]
const positionFigmaText3D = [6, text3DpositionDesignerY, -40]
const positionCanvaText3D = [5, text3DpositionDesignerY, -39]

{/* DEVELOPER */ }
const positionReactText3D = [-6, text3DpositionDeveloperY, -29]
const positionThreeJsText3D = [-5, text3DpositionDeveloperY, -31]
const positionJqueryText3D = [-7, text3DpositionDeveloperY, -29]
const positionJavascriptText3D = [-6, text3DpositionDeveloperY, -31]
const positionPythonText3D = [-5, text3DpositionDeveloperY, -30]
const positionCssText3D = [-7, text3DpositionDeveloperY, -31]

const positionHText3D = [-7, text3DpositionDeveloperY, -30]
const positionTText3D = [-6.80, text3DpositionDeveloperY, -30]
const positionMText3D = [-6.65, text3DpositionDeveloperY, -30]
const positionLText3D = [-6.43, text3DpositionDeveloperY, -30]

{/* MORE */ }
const positionLitmusText3D = [5, text3DpositionMoreY, -58.2]
const positionGithubGitText3D = [6, text3DpositionMoreY, -61]
const positionSeoText3D = [5, text3DpositionMoreY, -59]
const positionSpeedOptimizationText3D = [4, text3DpositionMoreY, -60.8]
const positionGoogleTagManagerText3D = [5, text3DpositionMoreY, -60]
const positionGoogleAnalyticsText3D = [5, text3DpositionMoreY, -61.5]
const positionVisualStudioCodeText3D = [3, text3DpositionMoreY, -60]
const positionJiraText3D = [6, text3DpositionMoreY, -59]
const positionMusicText3D = [4, text3DpositionMoreY, -59]

{/* gravity Text3D Developer */ }
const gravityScaleLow = [1]
const gravityScaleHigh = [1]

{/* Basic Material Color */ }
const meshBasicMaterialColorYellow = "#ffe600"
const meshBasicMaterialColorWhite = "#ffffff"


{/******************* EXPERTISE FUNCTION *******************/ }
export function BlockExpertise({ position = [0, 0, 0] }) {

    const [matcap] = useMatcapTexture('E6BF3C_5A4719_977726_FCFC82')

    return <><group position={position}>

        {/* Html Developer */}
        <RigidBody gravityScale={gravityScaleLow} name="html">
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

        <RigidBody gravityScale={gravityScaleLow}>
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
        <RigidBody gravityScale={gravityScaleLow}>
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
        <RigidBody gravityScale={gravityScaleLow}>
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
        <RigidBody gravityScale={gravityScaleLow} name="css">
            <Text3D

                bevelEnabled
                font={fontText3D}
                size={sizeText3DThree}
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
        <RigidBody gravityScale={gravityScaleLow} name="javascript">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
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
        <RigidBody gravityScale={gravityScaleLow} name="jquery">
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
        <RigidBody gravityScale={gravityScaleLow} name="react">

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
        <RigidBody gravityScale={gravityScaleLow} name="ThreeJs">

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
        <RigidBody gravityScale={gravityScaleLow} name="python">
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
        <RigidBody gravityScale={gravityScaleLow} name="githubGit">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
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
        <RigidBody gravityScale={gravityScaleLow} name="speedOptimization">
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
        <RigidBody gravityScale={gravityScaleLow} name="seo">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
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
        <RigidBody gravityScale={gravityScaleLow} name="tagManager">
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
        <RigidBody gravityScale={gravityScaleLow} name="analytics">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
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
        <RigidBody gravityScale={gravityScaleLow} name="jira">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
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
        <RigidBody gravityScale={gravityScaleLow} name="litmus">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DThree}
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
        <RigidBody gravityScale={gravityScaleLow} name="studio">
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
        <RigidBody name="blender" gravityScale={gravityScaleHigh}>
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DThree}
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
        <RigidBody name="illustrator" gravityScale={gravityScaleHigh}>
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
        <RigidBody name="photoshop" gravityScale={gravityScaleHigh}>
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
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
        <RigidBody name="ae" gravityScale={gravityScaleHigh}>
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
        <RigidBody name="figma" gravityScale={gravityScaleHigh}>
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DThree}
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
        <RigidBody name="xd" gravityScale={gravityScaleHigh}>
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
        <RigidBody name="canva" gravityScale={gravityScaleHigh}>
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
        <RigidBody name="music" gravityScale={gravityScaleHigh}>
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
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
                <meshBasicMaterial color={meshBasicMaterialColorYellow} wireframe />
            </mesh>
        </RigidBody>
    </group>
}

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
            <Cloud
                opacity={0.5}
                speed={0.4} // Rotation speed
                width={10} // Width of the full cloud
                depth={1.5} // Z-dir depth
                segments={20} // Number of particles
                color={meshBasicMaterialColorWhite}
            />
        </RigidBody>
    </group>
}

{/******************* AXE FUNCTION *******************/ }
export function BlockAxe({ position = [0, 0, 0] }) {
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

    {/* Axe anmation */ }
    useFrame((state) => {
        {/* need clock to anmation */ }
        const time = state.clock.getElapsedTime()
        {/* up and down anmation */ }
        const z = Math.sin(time + timeOffset) * 3
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
            <Cloud
                opacity={0.5}
                speed={0.4} // Rotation speed
                width={10} // Width of the full cloud
                depth={1.5} // Z-dir depth
                segments={20} // Number of particles
                colliders={false}
                color={meshBasicMaterialColorYellow}
            />
        </RigidBody>
    </group>
}

{/******************* EXPORT TO SENSE *******************/ }
export function Level() {

    return <>

        <StartLevel />
        <ServicesLevel />
        <BlockExpertise />

        {/* <BlockSpinner position={[0, 0, 0]} /> */}
        <BlockAxe position={[-14, 10, -50]} />
        <BlockAxe position={[10, -10, -70]} />
        <BlockLimbo position={[0, -10, -20]} />
        <BlockLimbo position={[16, 10, -50]} />

    </>
}
