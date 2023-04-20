
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
    const incrementBlender = useGame((state) => state.incrementBlender)
    const incrementIllustrator = useGame((state) => state.incrementIllustrator)
    const incrementPhotoshop = useGame((state) => state.incrementPhotoshop)
    const incrementAfterEffects = useGame((state) => state.incrementAfterEffects)
    const incrementFigma = useGame((state) => state.incrementFigma)
    const incrementAdobeXD = useGame((state) => state.incrementAdobeXD)
    const incrementCanva = useGame((state) => state.incrementCanva)
    const incrementMusic = useGame((state) => state.incrementMusic)
    const AllIncrements = useGame((state) => state.AllIncrements)
    function sayHello() {
        alert('You clicked me!');
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
        </div>

        {/* Controls */}
        <div className="controls">
            <div className="raw">
                <div onClick={sayHello} className={`key ${forward ? 'active' : ''}`}>
                
                </div>
            </div>
            <div className="raw">
                <div className={`key ${leftward ? 'active' : ''}`}></div>
                <div className={`key ${backward ? 'active' : ''}`}></div>
                <div className={`key ${rightward ? 'active' : ''}`}></div>
            </div>
            <div className="raw">
                <div className={`key large ${jump ? 'active' : ''}`}></div>
            </div>
        </div>

    </div>
}