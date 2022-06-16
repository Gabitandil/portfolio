import React from 'react'
import '../Assets/home.scss'
import VideoCover from '../media/coverVideo.mp4'
import NavBar from '../componentes/navBar'

export default function Home() {
  return (
     <div className='container'>
      <NavBar/>
     
    <div  >
      <div className='text-container'>
      <video className='video' src = {VideoCover} autoPlay loop muted />
      <h1>Gabriel Moyano</h1>
      <h2>FullStack Web Developer</h2>
      </div>
    </div>
    </div>
  )
}
{/* <p>soy un estudiante graduado del bootcamp SoyHenry con varios proyectos de experiencia, con conocimientos en   React | Redux | HTML | CSS | Javascript | Node | Github | Express | MongoDB | SCSS | MySql |</p> */}
        