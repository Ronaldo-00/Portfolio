import React from 'react'
import './Project.css'
import project_1 from "../../Assets/project-img/img1.jpg"
import project_2 from "../../Assets/project-img/img8.png"
import project_3 from "../../Assets/project-img/img2.jpg"
import project_4 from "../../Assets/project-img/img4.jpg"
import project_5 from "../../Assets/project-img/img5.png"
import project_6 from "../../Assets/project-img/img7.png"
import project_7 from "../../Assets/project-img/img6.jpg"
import github from "../../Assets/icons/github.png"
import link from "../../Assets/icons/link.png"
//images for tech
import html from "../../Assets/icons/html.png"
import css from "../../Assets/icons/css-3.png"
import js from "../../Assets/icons/js.png"
import react from "../../Assets/icons/science.png"
import figma from "../../Assets/icons/figma.png"
import bootstrap from "../../Assets/icons/bootstrap.png"
const Project = () => {
  return (
    <div className='project'>
        <div className="project-container">
            <div className="project-head">
                <h2>Projects</h2>
                <h3>Each projects is unique piece of development</h3>
            </div>
            <div className="project-content">
                {/* Project 1 */}
                <div className="project-row">
                    <div className="project-col-1">
                        <img className='project-img' src={project_1} alt='project'></img>
                    </div>
                    <div className="project-col-2">
                        <div className="pro-head">
                            <h2>Rise-Stox React-web</h2>
                        </div>
                        <div className="pro-detail">
                            <p>
                            The Stock Market Website Template Project is designed to provide a framework
                            for creating a user-friendly and informative platform for tracking stock market trends,
                            analyzing stock performance. With a focuson navigation and interactive features,
                            this template aims to offer users a seamless experience and features like "Image-slider",
                            "scroll-to-top" , "search button", "sticky navbar" etc..
                            </p>
                        </div>
                        <div className="tech-img">
                            <img src={html} alt="html"></img>
                            <img src={css} alt='css'></img>
                            <img src={js} alt='js'></img>
                            <img src={react} alt='react'></img>
                        </div>
                        <div className="coding-div">
                            <div className="code">
                                <img src={github} alt='github'></img>
                                <h4><a href='https://github.com/Ronaldo-00/Stox-React-Web' target='blank'>Github</a></h4>
                            </div>
                            <div className="link">
                                <img src={link} alt='link'></img>
                                <h4><a href=' https://ronaldo-00.github.io/Stox-React-Web/' target='blank'>Live Demo</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 2 */}
                <div className="project-row">
                    <div className="project-col-1 order-right">
                        <img className='project-img' src={project_2} alt='project'></img>
                    </div>
                    <div className="project-col-2 order-left">
                        <div className="pro-head">
                            <h2>Careers-web-page</h2>
                        </div>
                        <div className="pro-detail">
                            <p>
                                A React-based application showcasing job listings with filterable
                                and expandable job details, including a responsive design and navigation.
                                This application is designed to provide an interactive and informative career section.
                            </p>
                        </div>
                        <div className="tech-img">
                            <img src={html} alt="html"></img>
                            <img src={css} alt='css'></img>
                            <img src={js} alt='js'></img>
                            <img src={figma} alt='figma'></img>
                        </div>
                        <div className="coding-div">
                            <div className="code">
                                <img src={github} alt='github'></img>
                                <h4><a href='https://github.com/Ronaldo-00/careers-page' target='blank'>Github</a></h4>
                            </div>
                            <div className="link">
                                <img src={link} alt='link'></img>
                                <h4><a href=' https://ronaldo-00.github.io/careers-page/' target='blank'>Live Demo</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 3 */}
                <div className="project-row">
                    <div className="project-col-1 ">
                        <img className='project-img' src={project_3} alt='project'></img>
                    </div>
                    <div className="project-col-2 order-left">
                        <div className="pro-head">
                            <h2>Dental care web</h2>
                        </div>
                        <div className="pro-detail">
                            <p>
                            The Dental Care Website Template Project provides a versatile and user-friendly platform
                            for dental clinics and practitioners to showcase their services and connect with patients.
                            This template aims to offer users a seamless experience With its key features such as the
                            "image carousel", "scroll-to-top button" and "Appoinment form".
                            </p>
                        </div>
                        <div className="tech-img">
                            <img src={html} alt="html"></img>
                            <img src={css} alt='css'></img>
                            <img src={js} alt='js'></img>
                            <img src={bootstrap} alt='bootstrap'></img>
                        </div>
                        <div className="coding-div">
                            <div className="code">
                                <img src={github} alt='github'></img>
                                <h4><a href='https://github.com/Ronaldo-00/Dental-web' target='blank'>Github</a></h4>
                            </div>
                            <div className="link">
                                <img src={link} alt='link'></img>
                                <h4><a href=' https://ronaldo-00.github.io/Dental-web/' target='blank'>Live Demo</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 4 */}
                <div className="project-row">
                    <div className="project-col-1 order-right">
                        <img className='project-img' src={project_4} alt='project'></img>
                    </div>
                    <div className="project-col-2">
                        <div className="pro-head">
                            <h2>Register/ login page</h2>
                        </div>
                        <div className="pro-detail">
                            <p>
                            The Register and Login Web Page provides users with a convenient and secure
                            platform for creating new accounts and accessing existing ones. With its user-friendly interface,
                            toggle button functionality, and emphasis on user experience, the web page aims to streamline
                            the registration and login processes, empowering users to interact with the platform
                            effortlessly and access personalized content and services.
                            </p>
                        </div>
                        <div className="tech-img">
                            <img src={html} alt="html"></img>
                            <img src={css} alt='css'></img>
                            <img src={js} alt='js'></img>
                        </div>
                        <div className="coding-div">
                            <div className="code">
                                <img src={github} alt='github'></img>
                                <h4><a href='https://github.com/Ronaldo-00/Register-login-page' target='blank'>Github</a></h4>
                            </div>
                            <div className="link">
                                <img src={link} alt='link'></img>
                                <h4><a href='https://ronaldo-00.github.io/Register-login-page/' target='blank'>Live Demo</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 5 */}
                <div className="project-row">
                    <div className="project-col-1 ">
                        <img className='project-img' src={project_5} alt='project'></img>
                    </div>
                    <div className="project-col-2 order-left">
                        <div className="pro-head">
                            <h2>Portfolio Design</h2>
                        </div>
                        <div className="pro-detail">
                            <p>
                                In this portfolio design in Figma involves crafting a visually appealing
                                layout to showcase your work, skills, and accomplishments.Key elements of this portfolio design
                                includes the sticky header, fixed aside profiles, light mode and dark mode.
                                By integrating both light and dark themes with a toggle switch, the portfolio design in Figma offers
                                flexibility and personalization while ensuring an engaging and immersive user experience.
                            </p>
                        </div>
                        <div className="tech-img">
                            <img src={figma} alt="figma"></img>
                        </div>
                        <div className="coding-div">
                            <div className="code">
                            <img src={figma} alt="figma"></img>
                                <h4><a href='https://www.figma.com/community/file/1362028710620256551/dark-portfolio' target='blank'>Figma</a></h4>
                            </div>
                            <div className="link">
                                <img src={link} alt='link'></img>
                                <h4><a href='https://www.figma.com/community/file/1362028710620256551/dark-portfolio' target='blank'>Live Demo</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Project 6 */}
                 <div className="project-row">
                    <div className="project-col-1 order-right ">
                        <img className='project-img' src={project_6} alt='project'></img>
                    </div>
                    <div className="project-col-2 ">
                        <div className="pro-head">
                            <h2>Tailoring-web Design</h2>
                        </div>
                        <div className="pro-detail">
                            <p>
                                This is a Tailoring website UI designed in FIGMA.
                                And this design it involves the meticulous crafting of a user interface
                                to meet the unique needs, preferences, and goals of a client and target audience.
                                It's a process that goes beyond generic templates and requires careful
                                consideration of various factors to create a customized and effective digital experience.
                                It is a Landing page design of the website..
                            </p>
                        </div>
                        <div className="tech-img">
                            <img src={figma} alt="figma"></img>
                        </div>
                        <div className="coding-div">
                            <div className="code">
                            <img src={figma} alt="figma"></img>
                                <h4><a href='https://www.figma.com/community/file/1364915619703305860/tailors-webpage' target='blank'>Figma</a></h4>
                            </div>
                            <div className="link">
                                <img src={link} alt='link'></img>
                                <h4><a href=' https://www.figma.com/community/file/1364915619703305860/tailors-webpage' target='blank'>Live Demo</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 7 */}
                <div className="project-row">
                    <div className="project-col-1 ">
                        <img className='project-img' src={project_7} alt='project'></img>
                    </div>
                    <div className="project-col-2 order-left">
                        <div className="pro-head">
                            <h2>Portfolio Design</h2>
                        </div>
                        <div className="pro-detail">
                            <p>
                                In this portfolio design in Figma involves crafting a visually appealing
                                layout to showcase your work, skills, and accomplishments.Key elements of this portfolio design
                                includes the sticky header, fixed aside profiles, light mode and dark mode.
                                By integrating both light and dark themes with a toggle switch, the portfolio design in Figma offers
                                flexibility and personalization while ensuring an engaging and immersive user experience.
                            </p>
                        </div>
                        <div className="tech-img">
                            <img src={figma} alt="figma"></img>
                        </div>
                        <div className="coding-div">
                            <div className="code">
                            <img src={figma} alt="figma"></img>
                                <h4><a href='https://www.figma.com/community/file/1356926120888657628/portfolio' target='blank'>Figma</a></h4>
                            </div>
                            <div className="link">
                                <img src={link} alt='link'></img>
                                <h4><a href=' https://www.figma.com/community/file/1356926120888657628/portfolio' target='blank'>Live Demo</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
