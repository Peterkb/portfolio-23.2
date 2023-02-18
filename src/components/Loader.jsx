import { useProgress } from '@react-three/drei'
import { addEffect } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import useSite from '../stores/useSite'

import loaderLogo from '../assets/img/LogoPB.png'
import './Loader.css'

export default function Loader()
{
    const counter = useRef()

    const phase = useSite((state) => { state.phase } )

    useEffect(() => {
        const unsubscribeEffect = addEffect(() =>
        {
            const state = useSite.getState()

            if(state.startTime = 0) state.startTime = Date.now()

            let counterVal = 0
            
            if( state.siteProgress < state.maxProgress )
                counterVal = Date.now() - state.startTime
            else if( state.phase === 'ready' )
                counterVal = state.endTime - state.startTime

            counterVal /= 1000
            counterVal = counterVal.toFixed(2)
            
            if(counter.current)
                counter.current.textContent = counterVal

            console.log(state.startTime);
            console.log(state.endTime);
        })

        return () => {
            unsubscribeEffect()
        }
    }, [])

    return <>
        <div className="loaderOverlay" id="Loader">
            <div className="loader-grid-item loader-background"></div>

            <div className="loader-grid-item loader-transition"></div>

            <div className="loader-grid-item loader-logo-box">
                <img className='loader-logo-img' src={loaderLogo} />
            </div>

            <div className="loader-grid-item loader-text-container">
                <div className="loading-text">
                    <span className='sh-1'>Portfolio</span>
                    <span className="sh-2">.</span>
                    <span className="sh-3">Load</span>
                    <span className='sh-4'>()</span>
                    <span ref={ counter }>0</span>
                </div>

                <div className='loader-text-name'>
                    <span className='loader-name-first' >Peter&nbsp;</span> <span className='loader-name-last' >Bredell</span>
                </div>
            </div>

            <div className="loader-grid-item loader-smash">
                <div className="loader-smash-top">FULL</div>
                <div className="loader-smash-bottom">STACK</div>
            </div>
        </div>
    </>
}

// function Loader() {
//     const { active, progress, errors, item, loaded, total } = useProgress()
//     return <Html center>{progress} % loaded</Html>
// }