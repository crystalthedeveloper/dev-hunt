import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { Text3D, Float } from '@react-three/drei'

{/* FIX COLORS FROM THREE */ }
THREE.ColorManagement.enabled = true

{/* Text3D */ }
const sizeText3D = 0.1
const sizeText3DTwo = 0.09
const sizeText3DThree = 0.13
const fontText3D = "Cinzel ExtraBold_Regular.json"
const bevelThicknessText3D = 0
const bevelSizeText3D = 0
const heightText3D = [0.03]

{/* POSITION GROUND & TEXT3D */ }
const positionGround1Y = 1
const positionGround1pY = 0.5
const positionGround2Y = 0
const positionGround3Y = 1
const positionGround4Y = 4
const positionGround5Y = 2
const positionGround6Y = 0
const positionGround7Y = 3

{/* GROUP 1 */ }
const positionReactText3D = [0, positionGround1pY, -19]
const positionThreeJsText3D = [-1, positionGround1pY, -21]
const positionJqueryText3D = [1, positionGround1pY, -19]
const positionJavascriptText3D = [-1.5, positionGround1Y, -19]
const positionPythonText3D = [1, positionGround1Y, -20]
const positionCssText3D = [0, positionGround1Y, -21]

const positionHText3D = [-1, positionGround1Y, -20]
const positionTText3D = [-0.80, positionGround1Y, -20]
const positionMText3D = [-0.65, positionGround1Y, -20]
const positionLText3D = [-0.43, positionGround1Y, -20]
{/* GROUP 2 */ }
const positionGithubGitText3D = [-3.5, positionGround2Y, -9.5]
const positionLitmusText3D = [-5, positionGround2Y, -10]
const positionVisualStudioCodeText3D = [-5.5, positionGround2Y, -9]
const positionJiraText3D = [-4, positionGround2Y, -11]
{/* GROUP 3 */ }
const positionSeoText3D = [3, positionGround3Y, -10]
const positionSpeedOptimizationText3D = [3.5, positionGround3Y, -11]
const positionGoogleTagManagerText3D = [3, positionGround3Y, -9]
const positionGoogleAnalyticsText3D = [4.5, positionGround3Y, -10]
{/* GROUP 4 */ }
const positionBlenderText3D = [-3, positionGround4Y, -12]
{/* GROUP 5 */ }
const positionPhotoshopText3D = [7, positionGround5Y, -40]
const positionIllustratorText3D = [4, positionGround5Y, -40]
const positionadobeAfterEffectsText3D = [6, positionGround5Y, -39]
const positionAdobeXdText3D = [6, positionGround5Y, -41]
{/* GROUP 6 */ }
const positionFigmaText3D = [5, positionGround6Y, -60.5]
const positionCanvaText3D = [5, positionGround6Y, -59.5]
const positionMusicText3D = [4.2, positionGround6Y, -60]
{/* GROUP 7 */ }
const positionWebflowText3D = [-5, positionGround7Y, -29.5]
const positionWordpressText3D = [-8, positionGround7Y, -30]
const positionAdobeExperienceText3D = [-6.5, positionGround7Y, -29.5]
const positionMagnoliaText3D = [-6, positionGround7Y, -28.5]
const positionMailchimpText3D = [-5.5, positionGround7Y, -31]
const positionSalesforceText3D = [-7, positionGround7Y, -29]

{/* BASIC MATERIAL COLOR */ }
const meshBasicMaterialColorYellow = "#ffe600"
const meshBasicMaterialColorWhite = "#ffffff"


{/******************* EXPERTISE FUNCTION *******************/ }
export function BlockExpertise({ position = [0, 0, 0] }) {


    return <><group position={position}>

        {/* GROUP 1 */}

        {/* Html */}
        <RigidBody name="html">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />

            </Text3D>
        </RigidBody >

        <RigidBody >
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody >
        <RigidBody >
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody >
        <RigidBody >
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody >

        {/* Css Developer */}
        <RigidBody type="fixed" name="css">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* Javascript Developer */}
        <RigidBody type="fixed" name="javascript">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* ‍Jquery */}
        <RigidBody type="fixed" name="jquery">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* ‍React Developer */}
        <RigidBody type="fixed" name="react">

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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* ‍Three.js */}
        <RigidBody type="fixed" name="ThreeJs">

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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* ‍python Developer */}
        <RigidBody type="fixed" name="python">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* GROUP 2 */}

        {/* Github Git Developer */}
        <RigidBody type="fixed" name="githubGit">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* ‍Jira */}
        <RigidBody type="fixed" name="jira">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* ‍Litmus */}
        <RigidBody type="fixed" name="litmus">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* Visual Studio Code */}
        <RigidBody type="fixed" name="studio">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* GROUP 3 */}

        {/* Speed Optimization */}
        <RigidBody type="fixed" name="speedOptimization">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody >

        {/* seo */}
        <RigidBody type="fixed" name="seo">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody >

        {/* Google Tag Manager */}
        <RigidBody type="fixed" name="tagManager">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody >

        {/* Google Analytics */}
        <RigidBody type="fixed" name="analytics">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody >

        {/* GROUP 4 */}

        {/* blender */}
        <RigidBody type="fixed" name="blender" >
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* GROUP 5 */}

        {/* Illustrator */}
        <RigidBody type="fixed" name="illustrator">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* Photoshop */}
        <RigidBody type="fixed" name="photoshop">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* adobe After Effects */}
        <RigidBody type="fixed" name="ae">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* Adobe XD */}
        <RigidBody type="fixed" name="xd">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* GROUP 6 */}
        {/* figma */}
        <RigidBody type="fixed" name="figma">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* canva */}
        <RigidBody type="fixed" name="canva">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

        {/* music */}
        <RigidBody name="music">
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
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>
        {/* GROUP 7 */}
        {/* WEBFLOW */}
        <RigidBody name="webflow">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionWebflowText3D}
            >
                Webflow
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>
        {/* WORDPRESS */}
        <RigidBody name="wordpress">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionWordpressText3D}
            >
                Wordpress
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>
        {/* ADOBE EXPERIENCE */}
        <RigidBody name="adobeexperience">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionAdobeExperienceText3D}
            >
                CQ6
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>
        {/* MAGNOLIA */}
        <RigidBody name="magnolia">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionMagnoliaText3D}
            >
                Magnolia
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>
        {/* MAILCHIMP */}
        <RigidBody name="mailchimp">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionMailchimpText3D}
            >
                Mailchimp
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>
        {/* SALESFORCE */}
        <RigidBody name="salesforce">
            <Text3D
                bevelEnabled
                font={fontText3D}
                size={sizeText3DTwo}
                height={heightText3D}
                bevelThickness={bevelThicknessText3D}
                bevelSize={bevelSizeText3D}
                position={positionSalesforceText3D}
            >
                Salesforce
                <meshBasicMaterial color={meshBasicMaterialColorWhite} />
            </Text3D>
        </RigidBody>

    </group>
    </>
}

{/******************* END EXPERTISE FUNCTION *******************/ }



{/******************* EXPORT TO SENSE *******************/ }
export function Level() {

    return <>
        <BlockExpertise />
        

    </>
}
