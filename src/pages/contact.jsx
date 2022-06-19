import React from 'react'
import NavBar from '../componentes/navBar'
import '../Assets/contact.scss'
import linkedinIcon from '../media/icons/linkedin.png'
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
        <div className='contact-info'>
       <img className='contact-background' src={Background} alt="" />
        <h1>MIS REDES</h1>
        <h2>OTROS MEDIOS DE CONTACTO</h2>
        <p>email : gabitandil4@outlook</p>
        {/* <p>correo: gabitandil4@outlook.com</p> */}
        <div className='contact-icons-container'>
        <img  className='github-icon' onClick={myLinkedin} src={linkedinIcon} alt="" />
        <img onClick={myGitHub} className='github-icon' src={githubIcon} alt="" />
        <img onClick={myWhatsApp} className='github-icon' src={whatsappIcon} alt="" />
        
        </div>
        </div>
    </motion.div>
  )
}
