import React from 'react'
import { motion } from 'framer-motion';
import { useProjectInView, VariantsLeft, VariantsRight } from '../animationVariants';
import './About.css'
import about from '../../Assets/about.png'
const About = () => {
  // Use the custom hook for each project
  const aboutLeft = useProjectInView();
  const aboutRight = useProjectInView();
  return (
    <motion.div className='about'>
      <div className="about-container">
        {/* About Left div */}
        <motion.div 
          className="about-left"
          variants={VariantsLeft}
          ref={aboutLeft.ref} // Track visibility
          initial="hidden"
          animate={aboutLeft.controls} // Animate based on visibility
        >
          <img src={about} alt='developer'></img>
        </motion.div>
        {/* About Right div  */}
        <motion.div
          className="about-right"
          variants={VariantsRight}
          ref={aboutRight.ref} // Track visibility
          initial="hidden"
          animate={aboutRight.controls} // Animate based on visibility
        >
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
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
