import React from 'react'
import '../Assets/about.scss'
import NavBar from '../componentes/navBar'
import aboutVideo from '../media/aboutme.mp4'
import Background from '../media/background.jpg'
import { motion } from 'framer-motion'
function About() {

  function openLink() {
    const cvUrl = "https://drive.google.com/file/d/1dqGhkhLBt-7sKkZzq_hv4-e-STj3Ae5X/view"
    window.open(cvUrl)
    console.log('a')
  }


  return (
    <motion.div className='about-container'
    initial={{ opacity: 0.5 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    exit={{ opacity: 0.2 }}
    >
      <NavBar />
      <div >
        <img className='about-video' src={Background} alt="" />
        <div className='about-title'>
          <h1>SOBRE MI </h1>


          <h3 >soy un desarrollador web FullStack con varios proyectos de experiencia y una gran capacidad autodidacta y proactiva para continuar expandiendo mis conocimientos y experiencia a la par de  aportar soluciones significativas  en los proyectos
            actualmente estoy desarrollando proyectos de caracter personal para continuar ampliando mis conocimientos mientras busco mi primer trabajo como desarrollador  </h3>
        </div>
        <div className='about-btn-container'>
          <button onClick={openLink} className='about-btn' >DESCARGAR CV</button>
        </div>


      </div>

    </motion.div>
  )
}

export default About