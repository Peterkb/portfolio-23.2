import navLogo from '../assets/img/LogoPB.png'

export default function()
{
    return <>
        <nav className="navbar fixed-top navbar-expand-xl navbar-dark" id="Nav" aria-label="navbar">
        
            <a href="#Home" className="navbar-brand">
                <img src={navLogo} id="LogoImg" alt="Site Logo" className="logoImg d-inline-block me-2 slideDown" />
                <span className="d-inline-block logoText" id="LogoText">
                    <span className="d-inline-block profBlue me-2">
                        Peter
                    </span>
                    <span className="d-inline-block profOrange">
                        Bredell
                    </span>
                </span>
            </a>

            {/* <!-- Nav Button Expand --> */}
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="NavButton">
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
            </button>
        
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li data-nav="Hero" className="nav-item slideDown">
                        <a href="#Hero" className="nav-link">Home</a>
                    </li>
                    <li data-nav="About" className="nav-item slideDown">
                        <a href="#About" className="nav-link">About</a>
                    </li>
                    <li data-nav="Projects" className="nav-item slideDown">
                        <a href="#Projects" className="nav-link">Projects</a>
                    </li>
                    {/* <li data-nav="Blog" className="nav-item slideDown">
                        <a href="#Blog" className="nav-link">Blog</a>
                    </li> */}
                    <li data-nav="Contact" className="nav-item slideDown">
                        <a className="nav-link" href="#Contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}