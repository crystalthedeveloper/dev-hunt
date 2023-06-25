
import { useKeyboardControls } from '@react-three/drei'
import useGame from './stores/useGame.jsx'
import fireworks from '/texture/fireworks.gif'


export default function Interface() {

    const restart = useGame((state) => state.restart)

    const forward = useKeyboardControls((state) => state.forward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const jump = useKeyboardControls((state) => state.jump)
    {/* GROUP 1 */ }
    const incrementHtml = useGame((state) => state.incrementHtml)
    const incrementCss = useGame((state) => state.incrementCss)
    const incrementJavascript = useGame((state) => state.incrementJavascript)
    const incrementJquery = useGame((state) => state.incrementJquery)
    const incrementReact = useGame((state) => state.incrementReact)
    const incrementThreeJs = useGame((state) => state.incrementThreeJs)
    const incrementPython = useGame((state) => state.incrementPython)
    {/* GROUP 2 */ }
    const incrementGithubGit = useGame((state) => state.incrementGithubGit)
    const incrementJira = useGame((state) => state.incrementJira)
    const incrementLitmus = useGame((state) => state.incrementLitmus)
    const incrementVisualStudioCode = useGame((state) => state.incrementVisualStudioCode)
    {/* GROUP 3 */ }
    const incrementSpeedOptimization = useGame((state) => state.incrementSpeedOptimization)
    const incrementSeo = useGame((state) => state.incrementSeo)
    const incrementGoogleTagManager = useGame((state) => state.incrementGoogleTagManager)
    const incrementGoogleAnalytics = useGame((state) => state.incrementGoogleAnalytics)
    {/* GROUP 4 */ }
    const incrementBlender = useGame((state) => state.incrementBlender)
    {/* GROUP 5 */ }
    const incrementIllustrator = useGame((state) => state.incrementIllustrator)
    const incrementPhotoshop = useGame((state) => state.incrementPhotoshop)
    const incrementAfterEffects = useGame((state) => state.incrementAfterEffects)
    const incrementAdobeXD = useGame((state) => state.incrementAdobeXD)
    {/* GROUP 6 */ }
    const incrementFigma = useGame((state) => state.incrementFigma)
    const incrementCanva = useGame((state) => state.incrementCanva)
    const incrementMusic = useGame((state) => state.incrementMusic)
    {/* GROUP 7 */ }
    const incrementWebflow = useGame((state) => state.incrementWebflow)
    const incrementWordpress = useGame((state) => state.incrementWordpress)
    const incrementAdobeExperience = useGame((state) => state.incrementAdobeExperience)
    const incrementMagnolia = useGame((state) => state.incrementMagnolia)
    const incrementMailchimp = useGame((state) => state.incrementMailchimp)
    const incrementSalesforce = useGame((state) => state.incrementSalesforce)
    {/* GROUP ALL */ }
    const AllIncrements = useGame((state) => state.AllIncrements)

    const increaseIncrementforwardButton = useGame((state) => state.increaseIncrementforwardButton)
    const removeforwardButton = useGame((state) => state.removeforwardButton)

    function forwardClicked() {
        increaseIncrementforwardButton()
    }
    function forwardEnd() {
        removeforwardButton()
    }
    const increaseIncrementrightwardButton = useGame((state) => state.increaseIncrementrightwardButton)
    const removerightwardButton = useGame((state) => state.removerightwardButton)

    function rightwardClicked() {
        increaseIncrementrightwardButton()
    }
    function rightwardEnd() {
        removerightwardButton()
    }
    const increaseIncrementleftwardButton = useGame((state) => state.increaseIncrementleftwardButton)
    const removeleftwardButton = useGame((state) => state.removeleftwardButton)

    function leftwardClicked() {
        increaseIncrementleftwardButton()
    }
    function leftwardEnd() {
        removeleftwardButton()
    }
    const increaseIncrementbackwardButton = useGame((state) => state.increaseIncrementbackwardButton)
    const removebackwardButton = useGame((state) => state.removebackwardButton)

    function backwardClicked() {
        increaseIncrementbackwardButton()
    }
    function backwardEnd() {
        removebackwardButton()
    }

    const increaseIncrementjumpButton = useGame((state) => state.increaseIncrementjumpButton)
    const removejumpButton = useGame((state) => state.removejumpButton)

    function jumpClicked() {
        increaseIncrementjumpButton()
    }
    function jumpEnd() {
        removejumpButton()
    }


    return <div className="interface">
        {/* CONGRATS */}
        <div onClick={restart} className="winner">
            <div className={`winnerHit ${AllIncrements ? 'active' : ''}`}>
                CONGRATS!
                <div className="winnerText">You collect them all.</div>
                <img src={fireworks} alt="fireworks" />
            </div>
        </div>

        {/* Collect */}
        <div className="collect">
            <div className={`collectHitStar`}>
                *
            </div>
            <div className={`collectHit ${incrementHtml ? 'active' : ''}`}>
                HTML
            </div>

            <div className={`collectHit ${incrementCss ? 'active' : ''}`}>
                CSS
            </div>
            <div className={`collectHit ${incrementJavascript ? 'active' : ''}`}>
                Javascript
            </div>
            <div className={`collectHit ${incrementJquery ? 'active' : ''}`}>
                Jquery
            </div>
            <div className={`collectHit ${incrementReact ? 'active' : ''}`}>
                React
            </div>
            <div className={`collectHit ${incrementThreeJs ? 'active' : ''}`}>
                Three.js
            </div>
            <div className={`collectHit ${incrementPython ? 'active' : ''}`}>
                Python
            </div>
            <div className={`collectHit ${incrementGithubGit ? 'active' : ''}`}>
                Github & Git
            </div>
            <div className={`collectHit ${incrementSpeedOptimization ? 'active' : ''}`}>
                Speed Optimization
            </div>
            <div className={`collectHit ${incrementSeo ? 'active' : ''}`}>
                SEO
            </div>
            <div className={`collectHit ${incrementGoogleTagManager ? 'active' : ''}`}>
                Google Tag Manager
            </div>
            <div className={`collectHit ${incrementGoogleAnalytics ? 'active' : ''}`}>
                Google Analytics
            </div>
            <div className={`collectHit ${incrementJira ? 'active' : ''}`}>
                Jira
            </div>
            <div className={`collectHit ${incrementLitmus ? 'active' : ''}`}>
                Litmus
            </div>
            <div className={`collectHit ${incrementVisualStudioCode ? 'active' : ''}`}>
                Visual Studio Code
            </div>
            {/* DESIGNER & ANIMATION TOOLS */}
            <div className={`collectHit ${incrementBlender ? 'active' : ''}`}>
                Blender
            </div>
            <div className={`collectHit ${incrementIllustrator ? 'active' : ''}`}>
                Illustrator
            </div>
            <div className={`collectHit ${incrementPhotoshop ? 'active' : ''}`}>
                Photoshop
            </div>
            <div className={`collectHit ${incrementAfterEffects ? 'active' : ''}`}>
                After Effects
            </div>
            <div className={`collectHit ${incrementFigma ? 'active' : ''}`}>
                Figma
            </div>
            <div className={`collectHit ${incrementAdobeXD ? 'active' : ''}`}>
                Adobe XD
            </div>
            <div className={`collectHit ${incrementCanva ? 'active' : ''}`}>
                Canva
            </div>
            <div className={`collectHit ${incrementMusic ? 'active' : ''}`}>
                Music
            </div>
            <div className={`collectHit ${incrementWebflow ? 'active' : ''}`}>
                Webflow
            </div>
            <div className={`collectHit ${incrementWordpress ? 'active' : ''}`}>
                Wordpress
            </div>
            <div className={`collectHit ${incrementAdobeExperience ? 'active' : ''}`}>
                CQ6
            </div>
            <div className={`collectHit ${incrementMagnolia ? 'active' : ''}`}>
                Magnolia
            </div>
            <div className={`collectHit ${incrementMailchimp ? 'active' : ''}`}>
                Mailchimp
            </div>
            <div className={`collectHit ${incrementSalesforce ? 'active' : ''}`}>
                Salesforce
            </div>
        </div>

        {/* Controls */}
        <div className="controls">
            <div className="raw">
                <div onTouchStart={forwardClicked} onTouchEnd={forwardEnd} className={`key ${forward ? 'active' : ''}`}>

                </div>
            </div>
            <div className="raw">
                <div onTouchStart={leftwardClicked} onTouchEnd={leftwardEnd} className={`key ${leftward ? 'active' : ''}`}></div>
                <div className="raw">
                    <div onTouchStart={jumpClicked} onTouchEnd={jumpEnd} className={`key ${jump ? 'active' : ''}`}>FLY</div>
                </div>
                <div onTouchStart={rightwardClicked} onTouchEnd={rightwardEnd} className={`key ${rightward ? 'active' : ''}`}></div>

            </div>
            <div className="raw">
                <div onTouchStart={backwardClicked} onTouchEnd={backwardEnd} className={`key ${backward ? 'active' : ''}`}></div>
            </div>
            {/* <div className="raw">
                <div onTouchStart={jumpClicked} onTouchEnd={jumpEnd} className={`key large ${jump ? 'active' : ''}`}></div>
            </div> */}
        </div>

    </div>
}