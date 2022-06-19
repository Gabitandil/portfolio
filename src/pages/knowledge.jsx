import React, {useState} from 'react'
import NavBar from '../componentes/navBar'
import '../Assets/knowledge.scss'
import reactIcon from '../media/icons/react.png'
import cssIcon from '../media/icons/css(3).png'
import htmlIcon from '../media/icons/html.png'
import jsIcon from '../media/icons/js.png'
import nodeIcon from '../media/icons/nodejs.png'
import gitHubIcon from '../media/icons/github(2).png'
import mongoIcon from '../media/icons/mongodb.png'
import reduxIcon from '../media/icons/redux.jpg'



import Background from '../media/background.jpg'
import { motion } from 'framer-motion'
import {AiFillGithub} from 'react-icons/ai'


export default function Knowledge() {
    
    
  
  return (
      <motion.div className='knowledge-container'
      initial={{ opacity: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0.2 }}
      >
        <img className='knowledge-background' src={Background} alt="" />
        <NavBar/>
        <h1 >TECNOLOGIAS</h1>
        
      <div className='tech-container'>
        <div className='icon-text'>
        <img className='github-icon' src={gitHubIcon} alt="" />
        <p>Github</p>
        </div>
        <div className='icon-text'>
        <img className='github-icon' src={nodeIcon} alt="" />
        <p>nodeJs</p>
        </div>
        <div className='icon-text'>
        <img className='github-icon' src={reactIcon} alt="" />
        <p>React</p>
        </div>
        <div className='icon-text'>
        <img className='github-icon' src={mongoIcon} alt="" />
        <p>mongoDB</p>
        </div>
        <div className='icon-text'>
        <img className='github-icon' src={reduxIcon} alt="" />
        <p>Redux</p>
        </div>
        <div className='icon-text'>
        <img className='github-icon' src={jsIcon} alt="" />
        <p>Javascript</p>
        </div>
        <div className='icon-text'>
        <img className='github-icon' src={cssIcon} alt="" />
        <p>CSS</p>
        </div>
        <div className='icon-text'>
        <img className='github-icon' src={htmlIcon} alt="" />
        <p>HTML</p>
        </div>



         </div>
     
        
      </motion.div>



    
  )
}
