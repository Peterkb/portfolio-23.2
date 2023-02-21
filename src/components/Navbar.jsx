import React, {useState, useEffect, useRef} from 'react'
import useSite from '../stores/useSite'
import { addEffect } from '@react-three/fiber'

import './Navbar.css'
import navLogo from '../assets/img/LogoPB.png'

export default function()
{
    const navRef = useRef()

    const [toggleMenu, setToggleMenu] = useState(true)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const phase = useSite((state) => state.phase)
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }

    useEffect(() => {

    // const changeWidth = () => {
    //     setScreenWidth(window.innerWidth);
    // }

    // window.addEventListener('resize', changeWidth)

    // return () => {
    //     window.removeEventListener('resize', changeWidth)
    // }
        if (phase === 'go') {
            navRef.current.classList.remove('hide')
        }
    }, [phase])

    useEffect(() => {
        const unsubsribeEffect = addEffect(() => {
            const state = useSite.getState()

            if (state.phase == 'go') {
                
            }
        })
    }, [])
    
    return <>
        {toggleMenu ? 
            <nav ref={navRef} className="navbar fixed-top navbar-expand-xl navbar-dark hide" id="Nav">
                <div className="navContainerBox">
                    <a href="#Home" className="navbar-brand">
                        <img src={navLogo} alt="Site Logo" className="d-inline-block me-2" />
                        <span className="logoText">
                            <span className="d-inline-block profBlue me-2">
                                Peter
                            </span>
                            <span className="d-inline-block profOrange ">
                                Bredell
                            </span>
                        </span>
                    </a>
                    <button className="navbar-toggler collapsed d-flex d-xl-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse"  id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li data-nav="Hero" className="nav-item active">
                                <a href="#Hero" className="nav-link">Home</a>
                            </li>
                            <li data-nav="About" className="nav-item">
                                <a href="#About" className="nav-link">About</a>
                            </li>
                            <li data-nav="Projects" className="nav-item">
                                <a href="#Projects" className="nav-link">Projects</a>
                            </li>
                            <li data-nav="Contact" className="nav-item">
                                <a className="nav-link" href="#Contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        : null}
    </>
}