import React from 'react'
import '../Assets/about.scss'
import NavBar from '../componentes/navBar'
import aboutVideo from '../media/aboutme.mp4'
function About() {

 function openLink(){
  const cvUrl = "https://drive.google.com/file/d/1wKz1EU3GmawPr6SzKeAZrMSgf_STOyNO/view"
  window.open(cvUrl)
  console.log('a')
 }


  return ( 
  <div  >
    <NavBar/>
    <div className='about-container'>
      <video className='about-video' src={aboutVideo} autoPlay loop muted></video>
      <div className='about-title'>
    <h1>SOBRE MI </h1>
    </div>
    <div className='about-info'>
    <h3 >soy un desarrollador web FullStack con varios proyectos de experiencia y una gran capacidad autodidacta y proactiva para continuar expandiendo mis conocimientos y experiencia a la par de  aportar soluciones significativas  en los proyectos  </h3>

    <h3> actualmente estoy desarrollando proyectos de caracter personal para continuar ampliando mis conocimientos mientras busco mi primer trabajo como desarrollador! </h3>
    </div>
    <div  className='about-btn-container'>
    <button onClick={openLink} className='about-btn' >DESCARGAR CV</button>
    </div>
    
    
    </div>
    
    </div>
  )
}

export default About