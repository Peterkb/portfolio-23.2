import {create} from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) =>
{
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

        /**
         * Phases
         */
        phase: 'start',

        ready: () =>
        {
            set((state) =>
            {
                if (state.phase === 'loading') {
                    return {
                        phase: 'ready'
                    }
                }
                return {}
            })
        },

        load: () =>
        {
            set((state) =>
            {
                if (state.phase === 'start') {
                    return {
                        phase: 'loading'
                    }
                }
                return {}
            })
        },

        go: () =>
        {
            set((state) =>
            {
                if (state.phase === 'ready') {
                    return {
                        phase: 'go'
                    }
                }
                return {}
            })
        }
    }
}))