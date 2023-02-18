import './Loader.css'
import loaderLogo from '../assets/img/LogoPB.png'
import { useProgress } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

export default function Loader()
{
    counter = useRef()

    const maxPercentage = 100
    
    seEffect(() => {
        const unsubscribeEffect = addEffect(() => {
            let elapsedTime = 0

            if( < maxPercentage)
                elapsedTime = Date.now() - state.startTime
            else if(state.phase === 'ended')
                elapsedTime = state.endTime - state.startTime

            elapsedTime /= 1000
            elapsedTime = elapsedTime.toFixed(2)
            
            if(time.current)
                time.current.textContent = elapsedTime
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
                    <span useRef={counter}>0</span>
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