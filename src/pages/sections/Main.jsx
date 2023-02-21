import './Main.css'
import { useRef, useState, useEffect, useMemo } from 'react';

import Projects from './Projects'
import { ContactUs } from './ContactForm';

export default function()
{
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    const [ isHovering, setIsHovering ] = useState(false)
    
    const skills = useRef()
    const cards = useRef([])

    function handleMouseMove(ev, id)
    { 
        setMousePosition({left: ev.clientX, top: ev.clientY})

        if (isHovering) {

            cards.current.map(card => {
                const rect = card.getBoundingClientRect()

                const x = MousePosition.left - rect.left
                const y = MousePosition.top - rect.top

                card.style.setProperty("--mouse-x", `${x}px`)
                card.style.setProperty("--mouse-y", `${y}px`)
            })
        }
    }

    function handleMouseEnter(e) {
        setIsHovering(true)
    }

    function handleMouseExit(e) {
        setIsHovering(false)
    }

    return <>
        <div className='container'>
                {/* Hero Section */}
                <div className="hero" id='Hero'></div>

                {/* <!-- About / Skills Section --> */}
                <div className="row section content" id="About">
                    <div className="col">
                        <h2>About Me</h2>
                        <p>Full Stack Developer</p>

                        <h2>My Skills</h2>
                        <p>What I currently bring to the table.</p>
                        <div className="skill-grid" id='skills' ref={skills} >
                            {/* <!-- Languages --> */}
                            <article className="skill-grid-card" id="skillCards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} onMouseMove={(ev) => handleMouseMove(ev, 0)} ref={(el) => (cards.current[0] = el)}>
                                <div className="card-border"></div>
                                <div className="skill-card-content">
                                    <img className="card-img" src="https://img.icons8.com/material/96/f64b07/source-code--v1.png" alt="" />
                                    <div className="card-text-section">
                                        <div className="card-text-icon">
                                            <img src="https://img.icons8.com/material/28/07B4F6/source-code--v1.png"/>
                                        </div>
                                        <div className="card-text">
                                            <h5 className="skill-title">Languages</h5>
                                            <ul>
                                                <li>JavaScript</li>
                                                <li>Html</li>
                                                <li>CSS</li>    
                                                <li>jQuery</li>
                                                <li>Bootstrap</li>
                                                <li>react</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* <!-- Databases --> */}
                            <article className="skill-grid-card" id="skillCards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} onMouseMove={(ev) => handleMouseMove(ev, 1)} ref={(el) => (cards.current[1] = el)}>
                                <div className="card-border"></div>
                                <div className="skill-card-content">
                                    <img className="card-img" src="https://img.icons8.com/material/96/f64b07/database--v1.png" alt="" />
                                    <div className="card-text-section">
                                        <div className="card-text-icon">
                                            <img src="https://img.icons8.com/material/28/07B4F6/database--v1.png"/>
                                        </div>
                                        <div className="card-text">
                                            <h5 className="skill-title">Databases</h5>
                                            <ul>
                                                <li>PostgreSql</li>
                                                <li>MySql</li>
                                                <li>Microsft Sql</li>
                                                <li>MongoDb</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* <!-- Frameworks --> */}
                            <article className="skill-grid-card" id="skillCards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} onMouseMove={(ev) => handleMouseMove(ev, 2)} ref={(el) => (cards.current[2] = el)}>
                                <div className="card-border"></div>
                                <div className="skill-card-content">
                                    <img className="card-img" src="https://img.icons8.com/material/96/f64b07/overview-pages-4.png" alt="" />
                                    <div className="card-text-section">
                                        <div className="card-text-icon">
                                            <img src="https://img.icons8.com/material/28/07B4F6/overview-pages-4.png"/>
                                        </div>
                                        <div className="card-text">
                                            <h5 className="skill-title">Technologies</h5>
                                            <ul>
                                                <li>ASP.Net Core (C#)</li>
                                                <li>Bootstrap (CSS)</li>
                                                <li>React (JS)</li>
                                                <li>Three.js</li>
                                                <li>Source Control</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* <!-- Software --> */}
                            <article className="skill-grid-card" id="skillCards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} onMouseMove={(ev) => handleMouseMove(ev, 3)} ref={(el) => (cards.current[3] = el)}>
                                <div className="card-border"></div>
                                <div className="skill-card-content">
                                    <img className="card-img" src="https://img.icons8.com/material/96/f64b07/imac.png" alt="" />
                                    <div className="card-text-section">
                                        <div className="card-text-icon">
                                            <img src="https://img.icons8.com/material/28/07B4F6/imac.png"/>
                                        </div>
                                        <div className="card-text">
                                            <h5 className="skill-title">Sofware</h5>
                                            <ul>
                                                <li>Postman</li>
                                                <li>GitHub</li>
                                                <li>Trello</li>
                                                <li>Jira</li>
                                                <li>Asana</li>
                                                <li>Blender</li>
                                                <li>Figma</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* <!-- Coding Environments --> */}
                            <article className="skill-grid-card" id="skillCards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} onMouseMove={(ev) => handleMouseMove(ev, 4)} ref={(el) => (cards.current[4] = el)}>
                                <div className="card-border"></div>
                                <div className="skill-card-content">
                                    <img className="card-img" src="https://img.icons8.com/material/96/f64b07/imac-settings.png" alt="" />
                                    <div className="card-text-section">
                                        <div className="card-text-icon">
                                            <img src="https://img.icons8.com/material/28/07B4F6/imac-settings.png"/>
                                        </div>
                                        <div className="card-text">
                                            <h5 className="skill-title">IDE's</h5>
                                            <ul>
                                                <li>VS Code</li>
                                                <li>VS Studio</li>
                                                <li>Rider</li>
                                                <li>PyCharm</li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            
                            {/* <!-- Learning --> */}
                            <article className="skill-grid-card" id="skillCards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}  onMouseMove={(ev) => handleMouseMove(ev, 6)} ref={(el) => (cards.current[5] = el)}>
                                <div className="card-border"></div>
                                <div className="skill-card-content">
                                    <img className="card-img" src="https://img.icons8.com/material/96/f64b07/student-male--v1.png" alt="" />
                                    <div className="card-text-section">
                                        <div className="card-text-icon">
                                            <img src="https://img.icons8.com/material/28/07B4F6/student-male--v1.png"/>
                                        </div>
                                        <div className="card-text">
                                            <h5 className="skill-title">Always Learning</h5>
                                            <p>I love solving problems and learning by doing so every day.</p>
                                        </div>
                                    </div>
                                </div>
                            </article>

                        </div>

                        <hr className="divider" />

                        <div className="d-flex gap-3">
                            <a className="btn btn-outline-primary" target="_blank" href="https://europa.eu/europass/eportfolio/screen/share/documents/d8e0108f-e2a3-41a7-ad8a-2bf21abf1877?lang=en">CV</a>
                            <a className="btn btn-outline-primary" href="#Projects">Porfolio</a>
                            <a className="btn btn-outline-primary" target="_blank" href="https://github.com/Peterkb">Github</a>
                            <a className="btn btn-outline-primary ms-auto" href="#Contact">Let's Talk</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Projects Section --> */}
                <Projects />

                {/* <!-- Blog Section --> */}
                {/* <!-- <div className="row section content" id="Blog">
                    <div className="col">
                        <h2>Blogs</h2>
                        <div>thats what im saying</div>
                    </div>
                </div> --> */}

                {/* <!-- Contact Section --> */}
                <div className="row section content" id="Contact">
                    <div className="col">
                        <h2 className='profOrange'>Contact</h2>
                        <div className='mb-3'>Thank you for visiting my portfolio, please leave a message or suggestion on your way out!</div>
                        <ContactUs />
                    </div>
                </div>
            </div>

        {/* <!--Footer Section--> */}
        <footer className="footer mt-auto py-3" id="Footer">
            <div className="container-fluid">
                <div className="row row-cols-1 gy-2">
                    <div className="col d-flex align-items-end justify-content-center justify-content-lg-end">
                        <div className="row">
                            <div className="col social"><a href="https://www.linkedin.com/in/pkbredell/" target="_black"><i className="devicon-linkedin-plain"></i></a></div>
                            <div className="col social"><a href="https://github.com/Peterkb" target="_black"><i className="devicon-github-original"></i></a></div>
                            <div className="col social"><a href="https://twitter.com/petekb" target="_black"><i className="devicon-twitter-original"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}