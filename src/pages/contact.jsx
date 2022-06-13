import React from 'react'
import NavBar from '../componentes/navBar'
import '../Assets/contact.scss'
import linkedinIcon from '../media/icons/linkedin.png'
import githubIcon from '../media/icons/github(3).png'
import whatsappIcon from '../media/icons/whatsapp.png'
import ContactVideo from '../media/contactvideo.mp4'
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
   
    <div className='contact-container'>
        
        <NavBar/>
        <video className='contact-video' src={ContactVideo} autoPlay loop muted></video>
        <h1>MIS REDES</h1>
        <h2>OTROS MEDIOS DE CONTACTO</h2>
        <p>telefono: +54 9 249 4512900 | email : gabitandil4@outlook</p>
        {/* <p>correo: gabitandil4@outlook.com</p> */}
        <div className='contact-icons-container'>
        <img  className='github-icon' onClick={myLinkedin} src={linkedinIcon} alt="" />
        <img onClick={myGitHub} className='github-icon' src={githubIcon} alt="" />
        <img onClick={myWhatsApp} className='github-icon' src={whatsappIcon} alt="" />
        
        </div>
        
    </div>
  )
}
