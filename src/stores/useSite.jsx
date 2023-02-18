import { create } from "zustand"

export default create((set) => {
    return {
        /**
         * Progress
         */
        siteProgress: 0,

        /**
         * Phases
         */
        phase: 'ready',
        start: () =>
        {
            set((state) => {
                if (state.phase === 'ready') {
                    return
                    {
                        console.log('Site ready');    
                    }
                }
            })
        },

        phase: 'loading',
        start: () =>
        {
            set((state) => {
                if (state.phase === 'loading') {
                    return
                    {
                        console.log('Site loading');    
                    }
                }
            })
        }
    }
})