import { create } from "zustand"

export default create((set) => {
    return {
        /**
         * Progress
         */
        siteProgress: 0,
        maxProgress: 100,

        /**
         * Time
         */
        startTime: 0,
        endTime: 0,

        /**
         * Phases
         */
        phase: 'ready',

        start: () =>
        {
            set((state) =>
            {
                if (state.phase === 'ready') {
                    return console.log('Site ready')
                }
                return {}
            })
        },

        phase: 'loading',
        load: () =>
        {
            set((state) =>
            {
                if (state.phase === 'loading') {
                    return console.log('Site loading')
                }
                return {}
            })
        }
    }
})