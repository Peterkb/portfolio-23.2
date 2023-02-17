import './Loader.css'
import loaderLogo from '../assets/img/LogoPB.png'

export default function Loader()
{
    
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