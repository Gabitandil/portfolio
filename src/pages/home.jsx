import React from 'react'
import '../Assets/home.scss'
import VideoCover from '../media/coverVideo.mp4'
import NavBar from '../componentes/navBar'
import {motion} from 'framer-motion'
export default function Home() {
  return (
     <motion.div className='container' 
     initial={{ opacity: 0.5 }}
     animate={{ y: 0, opacity: 1, scale: 1 }}
     exit={{ opacity: 0.2}}
      >
      <NavBar/>
     
    <div  >
      <div className='text-container'>
      <video className='video' src = {VideoCover} autoPlay loop muted />
      <h1>Gabriel Moyano</h1>
      <h2>FullStack Web Developer</h2>
      </div>
    </div>
    </motion.div>
  )
}
{/* <p>soy un estudiante graduado del bootcamp SoyHenry con varios proyectos de experiencia, con conocimientos en   React | Redux | HTML | CSS | Javascript | Node | Github | Express | MongoDB | SCSS | MySql |</p> */}
        