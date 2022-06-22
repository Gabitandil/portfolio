import React from 'react'
import NavBar from '../componentes/navBar'
import '../Assets/contact.scss'
import linkedinIcon from '../media/icons/linkedin(1).png'
import githubIcon from '../media/icons/github(3).png'
import whatsappIcon from '../media/icons/whatsapp.png'
import ContactVideo from '../media/contactvideo.mp4'
import Background from '../media/background.jpg'
import { motion } from 'framer-motion'
export default function Contact() {

    function myLinkedin(){
     const  linkedinUrl = "https://www.linkedin.com/in/gabriel-moyano/"
        window.open(linkedinUrl)
        
    }
    function myGitHub(){
        const  gitHubUrl = "https://github.com/Gabitandil"
           window.open(gitHubUrl)
           
       }
       
       function myWhatsApp(){
        const  whatsAppUrl = "https://api.whatsapp.com/send/?phone=5492494512900"
           window.open(whatsAppUrl)
           
       }

  return (
   ///comentarioekeke
    <motion.div className='contact-container'
    initial={{ opacity: 0.5 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    exit={{ opacity: 0.2 }}
    >
        
        <NavBar/>
        <div className='contact-container'>
       <img className='contact-background' src={Background} alt="" />
            <div className='contact-info'>
        <h1>Contactame!</h1>
        <div onClick={myWhatsApp} className='info-container'>
            <img  src={whatsappIcon} alt="" srcset="" />
            <p>Whatsapp</p>
        </div>
        <div onClick={myGitHub} className='info-container'>
            <img className='github-icon' src={githubIcon} alt="" srcset="" />
            <p>Github</p>
        </div>
        <div onClick={myLinkedin} className='info-container'>
            <img  src={linkedinIcon} alt="" srcset="" />
            <p>Linkedin</p>
        </div>
        </div>
     </div>
    </motion.div>
  )
}
