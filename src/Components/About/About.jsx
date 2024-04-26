import React from 'react'
import './About.css'
import about from '../../Assets/about.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-container">
        <div className="about-left">
            <img src={about} alt='developer'></img>
        </div>
        <div className="about-right">
            <h2>About me</h2>
            <h3>A dedicated Front-End-Developer</h3>
            <p>
              Passionate Front-End Developer Ready to Transform Ideas into Engaging Experiences.
              <br></br>
              Welcome to my corner of the digital world! I'm Muthu Raman, a budding front-end developer fueled
              by creativity, curiosity, and a relentless drive to craft immersive web experiences.
              With a solid foundation in HTML5, CSS3, and JavaScript,Node JS,Bootstrap and library like React
              and design tool like Figma. I'm eager to dive headfirstinto the dynamic realm of web development.
              <br></br> 
              I excel in designing and maintaining responsive websites that offer a smooth user experience.
              My expertise lies in crafting dynamic,engaging interfaces through writing clean and optimized code.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
