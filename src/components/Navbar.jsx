import './Navbar.css'
import navLogo from '../assets/img/LogoPB.png'

export default function()
{
    return <>
        {/* <nav id='Home'>
            <div classNameName="navBox">
                <a href="#Home" classNameName="navbar-brand">
                    <img src={navLogo} alt="Site Logo" classNameName="logoImg" />
                    <div classNameName="logoText">
                        <span classNameName="d-inline-block name-blue">
                            Peter&nbsp;
                        </span>
                        <span classNameName="d-inline-block name-orange">
                            Bredell
                        </span>
                    </div>
                </a>
                {(toggleMenu || screenWidth > 700) && (
                    <ul classNameName="list">
                        <li classNameName="items active"><a href="#Home">Home</a></li>
                        <li classNameName="items"><a href="#About">About</a></li>
                        <li classNameName="items"><a href="#Projects">Projects</a></li>
                        <li classNameName="items"><a href="#Contact">Contact</a></li>
                    </ul>
                )}
                <button onClick={toggleNav} classNameName="btn navbar-toggler collapsed" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNameName="toggler-icon top-bar"></span>
                    <span classNameName="toggler-icon middle-bar"></span>
                    <span classNameName="toggler-icon bottom-bar"></span>
                </button>
            </div>
        </nav> */}

        <nav className="navbar fixed-top navbar-expand-xl navbar-dark" id="Nav">
            <div className="container">
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
                        <li data-nav="Hero" className="nav-item">
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
                        {/* <li className="nav-item toggle-bar">
                            <button className="toggle-button">
                                <div className="toggle-circle">
                                </div>
                            </button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </>
}