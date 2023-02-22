import React, { useMemo } from "react"
import technologies from "../../components/models/technologies"
import projects from "../../components/models/projects"

export default function Projects()
{
    return <>
        <Sections />
    </>
}

const Sections = React.memo(() =>
{
    // TODO be populated via API
    const proj = projects
    const tech = technologies

    const sections = [
        {
            Title: 'Full Stack Projects',
            Projects: [
                proj.FastTrack,
                proj.ContactCrate,
                proj.Blog,
                //proj.MoviePro,
                //proj.BlazorCom,
            ]
        },
        {
            Title: 'Real World Projects',
            Projects: [
                proj.DrFB,
                proj.ItaEcco
            ]
        },
        {
            Title: 'Coding Challenges',
            Projects: [
                proj.FizzBuzz,
                proj.EasyLoan,
                proj.LionOil
            ]
        }
    ]

    // const randomColor = Math.floor(Math.random()*16777215).toString(16)

    return <>
        <div className="row section projects-section-content" id="Projects">
            <div className="col" id="ProjectsCol">
                <h2 className="Projects"></h2>
                    {sections.map((section, i) => {
                        return <div key={i}>
                            <h3>{section.Title}</h3>
                            <div className="project-grid">
                            { section.Projects.map((project, index) => {
                                return <div key={index} className={project.Featured ? 'grid-col-span-2' : ''}>
                                            <article className={`project ${project.Css} `} type="button" data-bs-toggle="modal" data-bs-target={'#' + project.Modal}>
                                                <img className="img-project" src={project.BannerLink} />
                                                <div className="project-content">
                                                        <h5 className="title">{project.Title}</h5>
                                                        <p className="description content-item">{project.ShortDescription}</p>
                                                        <div className="row">
                                                            <div className="col">
                                                                <a type="button" className={`link-proj ${project.SiteLink === 'private' ? 'disabled' : ''}`} href={project.SiteLink} target="_blank">
                                                                    {/* <img src={'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/15/07B4F6/external-screen-ui-basic-anggara-basic-outline-anggara-putra.png'} alt="Screen Logo" /> */}
                                                                    Site
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <a type="button" className={`link-proj ${project.GitLink == 'private' ? 'disabled' : ''}`} href={project.GitLink} target="_blank">
                                                                    <span>Source</span>
                                                                    {/* <img src={'https://img.icons8.com/windows/15/07B4F6/code-fork--v1.png'} alt="Github Logo" /> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {project.Featured ? <div className="featured">Featured</div> : ''}
                                            </article>

                                            {/* <div className="modal myModal fade" id={project.Modal} tabIndex="-1" aria-labelledby={`${project.Title} Info`} aria-hidden="true">
                                                <div className="modal-dialog modal-fullscreen">
                                                    <div className="modal-header">
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>

                                                    <div className="modal-body">
                                                        <div className="row">

                                                            
                                                            <div className="col">
                                                                <div className="h2 mb-3">${project.Title}</div>
                                                                
                                                                <img loading="lazy" src={project.BannerLink} alt=""/>
                                                                    <div className="d-flex justify-content-between">
                                                                        <a href="${project.SiteLink}" target="_blank">
                                                                            <img src={'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/15/07B4F6/external-screen-ui-basic-anggara-basic-outline-anggara-putra.png'} alt="Screen Logo" />
                                                                            Live Preview
                                                                        </a>

                                                                        <a href="${project.GitLink}" target="_blank">
                                                                            <img src={'https://img.icons8.com/windows/15/07B4F6/code-fork--v1.png'} alt="Github Logo" />
                                                                            Source
                                                                        </a>
                                                                    </div>
                                                                <p>Information</p>

                                                                <div className="h5">Technologies Used</div>
                                                                <ul>
                                                                    <li>tech</li>
                                                                </ul>

                                                            
                                                            </div>
                                                            <div className="col">
                                                                <div className="h5">Features</div>
                                                                <ul>
                                                                    <li>features</li>
                                                                </ul>

                                                                <div className="h5">Description of App</div>
                                                                <p>${project.LongDescription}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div> */}
                                    </div>
                                }) }
                            </div>
                        </div>
                    })}
            </div>
        </div>
    </>
})

function CreateModal(item)
{
    const project = item

    return <>
        <div className="modal myModal fade" id={project.Modal} tabIndex="-1" aria-labelledby={`${project.Title} Info`} aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    <div className="row">
                        {/* <!-- left side --> */}
                        <div className="col">
                            <div className="h2 mb-3">${project.Title}</div>
                            
                            <img loading="lazy" src={project.BannerLink} alt=""/>
                                <div className="d-flex justify-content-between">
                                    <a href="${project.SiteLink}" target="_blank">
                                        <img src={'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/15/07B4F6/external-screen-ui-basic-anggara-basic-outline-anggara-putra.png'} alt="Screen Logo" />
                                        Live Preview
                                    </a>

                                    <a href="${project.GitLink}" target="_blank">
                                        <img src={'https://img.icons8.com/windows/15/07B4F6/code-fork--v1.png'} alt="Github Logo" />
                                        Source
                                    </a>
                                </div>
                            <p>Information</p>

                            <div className="h5">Technologies Used</div>
                            <ul>
                                <li>tech</li>
                            </ul>

                        {/* <!-- right side --> */}
                        </div>
                        <div className="col">
                            <div className="h5">Features</div>
                            <ul>
                                <li>features</li>
                            </ul>

                            <div className="h5">Description of App</div>
                            <p>${project.LongDescription}</p>
                        </div>
                    </div>
                </div>



                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </>
}

