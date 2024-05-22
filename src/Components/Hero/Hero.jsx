import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter' 
import './Hero.css' // css file
import linkedin from "../../Assets/icons/linkedin.png"
import github from "../../Assets/icons/github.png"
import profile from "../../Assets/Profile2.gif"
//images for tech
import html from "../../Assets/icons/html.png"
import css from "../../Assets/icons/css-3.png"
import js from "../../Assets/icons/js.png"
import react from "../../Assets/icons/science.png"
import node from "../../Assets/icons/node-js.png"
import figma from "../../Assets/icons/figma.png"
import bootstrap from "../../Assets/icons/bootstrap.png"
const Hero = () => {
  const [text] = useTypewriter({
    words:['Front-end developer','Web developer', 'UI designer','React developer'],
    loop:{},
  });
  return (
    <div className="main-hero">
    <div className="hero">
      <div className="container-row">
        <div className="container-left">
            <h1>I'm a <span>{text}</span> <Cursor/> </h1>
            <p>I'm MUTHU RAMAN.<br></br> A passionate Front End Developer based in Madurai.</p>
            <div className="professional-link">
                <a href='https://www.linkedin.com/in/muthu-raman-58a150284' target="blank"><img src={linkedin} alt='linked-in'></img></a>
                <a href='https://github.com/Ronaldo-00' target="blank"><img src={github} alt='git-hub'></img></a>
                <a href='https://www.figma.com/@ronaldo11' target="blank"><img src={figma} alt='figma'></img></a>
            </div>
        </div>
        <div className="container-right">
            <img src={profile} alt='profile-img'></img>
        </div> 
      </div>
      <div className="tech-stack">
        <div className="tech-heading">
            <h3>Tech Stack | </h3>
        </div>
        <div className="tech-img">
            <img src={html} alt="html" title='html'></img>
            <img src={css} alt='css' title='css' ></img>
            <img src={js} alt='js'title='Js'></img>
            <img src={react} alt='react'title='React'></img>
            <img src={figma} alt='figma'title='Figma'></img>
            <img src={node} alt='node'title='Node'></img>
            <img src={bootstrap} alt='bootstrap'title='Bootstrap'></img>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Hero