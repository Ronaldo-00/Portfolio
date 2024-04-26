import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Header></Header> 
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </div>
  )
}

export default App
