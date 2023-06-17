

import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'


export default create(subscribeWithSelector((set) => {
    return {

        phase: 'ready',

        forwardButton: 0,
        increaseIncrementforwardButton: () => set((state) => ({ forwardButton: state.forwardButton + 1 })),
        removeforwardButton: () => set({
            forwardButton: 0,
        }),
        leftwardButton: 0,
        increaseIncrementleftwardButton: () => set((state) => ({ leftwardButton: state.leftwardButton + 1 })),
        removeleftwardButton: () => set({
            leftwardButton: 0,
        }),
        rightwardButton: 0,
        increaseIncrementrightwardButton: () => set((state) => ({ rightwardButton: state.rightwardButton + 1 })),
        removerightwardButton: () => set({
            rightwardButton: 0,
        }),
        backwardButton: 0,
        increaseIncrementbackwardButton: () => set((state) => ({ backwardButton: state.backwardButton + 1 })),
        removebackwardButton: () => set({
            backwardButton: 0,
        }),

        jumpButton: 0,
        increaseIncrementjumpButton: () => set((state) => ({ jumpButton: state.jumpButton + 1 })),
        removejumpButton: () => set({
            jumpButton: 0,
        }),

        incrementHtml: 0,
        incrementCss: 0,
        incrementJavascript: 0,
        incrementJquery: 0,
        incrementReact: 0,
        incrementThreeJs: 0,
        incrementPython: 0,
        incrementGithubGit: 0,
        incrementSpeedOptimization: 0,
        incrementSeo: 0,
        incrementGoogleTagManager: 0,
        incrementGoogleAnalytics: 0,
        incrementJira: 0,
        incrementLitmus: 0,
        incrementVisualStudioCode: 0,
        incrementBlender: 0,
        incrementIllustrator: 0,
        incrementPhotoshop: 0,
        incrementAfterEffects: 0,
        incrementFigma: 0,
        incrementAdobeXD: 0,
        incrementCanva: 0,
        incrementMusic: 0,

        incrementWebflow: 0,
        incrementWordpress: 0,
        incrementAdobeExperience: 0,
        incrementMagnolia: 0,
        incrementAnimation: 0,
        incrementMailchimp: 0,
        incrementSalesforce: 0,


        increaseIncrementHtml: () => set((state) => ({ incrementHtml: state.incrementHtml + 1 })),
        increaseIncrementCss: () => set((state) => ({ incrementCss: state.incrementCss + 1 })),
        increaseIncrementJavascript: () => set((state) => ({ incrementJavascript: state.incrementJavascript + 1 })),
        increaseIncrementJquery: () => set((state) => ({ incrementJquery: state.incrementJquery + 1 })),
        increaseIncrementReact: () => set((state) => ({ incrementReact: state.incrementReact + 1 })),
        increaseIncrementThreeJs: () => set((state) => ({ incrementThreeJs: state.incrementThreeJs + 1 })),
        increaseIncrementPython: () => set((state) => ({ incrementPython: state.incrementPython + 1 })),
        increaseIncrementGithubGit: () => set((state) => ({ incrementGithubGit: state.incrementGithubGit + 1 })),
        increaseIncrementSpeedOptimization: () => set((state) => ({ incrementSpeedOptimization: state.incrementSpeedOptimization + 1 })),
        increaseIncrementSeo: () => set((state) => ({ incrementSeo: state.incrementSeo + 1 })),
        increaseIncrementGoogleTagManager: () => set((state) => ({ incrementGoogleTagManager: state.incrementGoogleTagManager + 1 })),
        increaseIncrementGoogleAnalytics: () => set((state) => ({ incrementGoogleAnalytics: state.incrementGoogleAnalytics + 1 })),
        increaseIncrementJira: () => set((state) => ({ incrementJira: state.incrementJira + 1 })),
        increaseIncrementLitmus: () => set((state) => ({ incrementLitmus: state.incrementLitmus + 1 })),
        increaseIncrementVisualStudioCode: () => set((state) => ({ incrementVisualStudioCode: state.incrementVisualStudioCode + 1 })),
        increaseIncrementBlender: () => set((state) => ({ incrementBlender: state.incrementBlender + 1 })),
        increaseIncrementIllustrator: () => set((state) => ({ incrementIllustrator: state.incrementIllustrator + 1 })),
        increaseIncrementPhotoshop: () => set((state) => ({ incrementPhotoshop: state.incrementPhotoshop + 1 })),
        increaseIncrementAfterEffects: () => set((state) => ({ incrementAfterEffects: state.incrementAfterEffects + 1 })),
        increaseIncrementFigma: () => set((state) => ({ incrementFigma: state.incrementFigma + 1 })),
        increaseIncrementAdobeXD: () => set((state) => ({ incrementAdobeXD: state.incrementAdobeXD + 1 })),
        increaseIncrementCanva: () => set((state) => ({ incrementCanva: state.incrementCanva + 1 })),
        increaseIncrementMusic: () => set((state) => ({ incrementMusic: state.incrementMusic + 1 })),

        increaseIncrementWebflow: () => set((state) => ({ incrementWebflow: state.incrementWebflow + 1 })),
        increaseIncrementWordpress: () => set((state) => ({ incrementWordpress: state.incrementWordpress + 1 })),
        increaseIncrementAdobeExperience: () => set((state) => ({ incrementAdobeExperience: state.incrementAdobeExperience + 1 })),
        increaseIncrementMagnolia: () => set((state) => ({ incrementMagnolia: state.incrementMagnolia + 1 })),
        increaseIncrementAnimation: () => set((state) => ({ incrementAnimation: state.incrementAnimation + 1 })),
        increaseIncrementMailchimp: () => set((state) => ({ incrementMailchimp: state.incrementMailchimp + 1 })),
        increaseIncrementSalesforce: () => set((state) => ({ incrementSalesforce: state.incrementSalesforce + 1 })),

        AllIncrements: 0,
        increaseAllIncrements: () => set((state) => ({ AllIncrements: state.AllIncrements + 1 })),


        removeAllIncrements: () => set({
            incrementHtml: 0,
            incrementCss: 0,
            incrementJavascript: 0,
            incrementJquery: 0,
            incrementReact: 0,
            incrementThreeJs: 0,
            incrementPython: 0,
            incrementGithubGit: 0,
            incrementSpeedOptimization: 0,
            incrementSeo: 0,
            incrementGoogleTagManager: 0,
            incrementGoogleAnalytics: 0,
            incrementJira: 0,
            incrementLitmus: 0,
            incrementVisualStudioCode: 0,
            incrementBlender: 0,
            incrementIllustrator: 0,
            incrementPhotoshop: 0,
            incrementAfterEffects: 0,
            incrementFigma: 0,
            incrementAdobeXD: 0,
            incrementCanva: 0,
            incrementMusic: 0,

            incrementWebflow: 0,
            incrementWordpress: 0,
            incrementAdobeExperience: 0,
            incrementMagnolia: 0,
            incrementAnimation: 0,
            incrementMailchimp: 0,
            incrementSalesforce: 0,

            AllIncrements: 0,
        }),

        start: () => {
            set((state) => {
                if (state.phase === 'ready')
                    return { phase: 'playing' }
                    

                return {}
            })
        },

        restart: () => {
            set((state) => {
                if (state.phase === 'playing')
                    return { phase: 'ready' }

                return {}
            })
        },

    }
}))