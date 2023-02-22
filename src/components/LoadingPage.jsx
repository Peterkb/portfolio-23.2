import { addEffect } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import useSite from '../stores/useSite'

import loaderLogo from '../assets/img/LogoPB.png'
import arrow from "../assets/svg/ArrowDown.svg";
import './LoadingPage.css'

export default function LoadingPage()
{
    const startBox = useRef()
    const readyBox = useRef()
    const overlay = useRef()

    const counter = useRef()

    const phase = useSite((state) => state.phase)

    // const load = useSite((state) => state.load)
    let go = useSite((state) => state.go)
    // const ready = useSite((state) => state.ready)

    const [ siteLoading, setSiteLoading ] = useState(true)

    const handleScroll = (e) => { 
        setSiteLoading(false)
        go()
    }

    useEffect(() => {
        console.log(`State: ${phase}`);
        if (phase === 'ready') {
            window.addEventListener('keypress', handleScroll);
            return () => window.removeEventListener('keypress', handleScroll);
        }
    }, [phase])

    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {
            const state = useSite.getState()

            if (state.phase === 'start') state.load()

            if (state.phase === 'loading' && state.siteProgress < state.maxProgress) {
                state.siteProgress += 0.25
                
                document.documentElement.style.setProperty('--LoaderBar-Percentage', state.siteProgress + '%');
            }
            
            if(state.phase === 'loading' && state.siteProgress >= 100) state.ready()

            if (state.phase === 'ready' && siteLoading == true) {
                if (startBox.current) {
                    startBox.current.classList.add('fadeOut')
                    readyBox.current.classList.remove('hidden')
                }
            }

            let percentage = state.siteProgress    

            percentage = percentage.toFixed(0)

            if(counter.current)
                counter.current.textContent = percentage

        })

        return () => {
            unsubscribeEffect()
        }
    }, [])

    return <>
        {siteLoading ? 
        <div ref={overlay} className="loaderOverlay">
            <div ref={startBox} className="startingBox">
                {/* <div className="loader-grid-item loader-background"></div> */}
                <div className="loader-grid-item loader-transition"></div>
                <div className="loader-grid-item loader-logo-box">
                    <img className='loader-logo-img' src={loaderLogo} />
                </div>
                <div className="loader-grid-item loader-text-container">
                    <div className="loading-text">
                        <span className='sh-1'>Portfolio</span>
                        <span className="sh-2">.</span>
                        <span className="sh-3">Load</span>
                        <span className='sh-4'>(</span>
                            <span ref={ counter } className='sh-5'>0</span>
                        <span className='sh-4'>)</span>
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

            <div ref={readyBox} className="readyBox hidden">
                {/* Logo */}
                <div className="readyLogoBox">
                    <img className="welcomeLogo" src={loaderLogo} alt="" />
                </div>

                {/* Title */}
                <div className="readyTextBox">
                    <div className="readyTitle">
                        <span>Welcome to</span><br />
                        <span>my portfolio!</span>
                    </div>
                </div>

                {/* Subtitle */}
                <div className="readySubTitleBox">
                    <div className="arrowBox me-3">
                        <img src={arrow} className="readyArrow ready-Arrow-a1" alt="arrow" />
                        <img src={arrow} className="readyArrow ready-Arrow-a2" alt="arrow" />
                    </div>
                    <div className="readyScrollText">
                        Scroll For More...
                    </div>
                </div>
            </div>
        </div>
        : null}
    </>
}