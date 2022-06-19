import React from 'react'
import '../Assets/navBar.scss'
import { Link } from 'react-router-dom'
function navBar() {


    return (
        <nav className='navbar'>
            <div >
               
            <Link  to ='/' style={{ textDecoration: 'none' }} > <p className='opt-container'>INICIO</p> </Link>
            <Link to ='/about' style={{ textDecoration: 'none' }} > <p className='opt-container'>SOBRE MI </p>  </Link>
            <Link to ='/knowledge' ><p className='opt-container' >TECNOLOGIAS</p></Link>
            <Link to ='/projects' ><p className='opt-container' >PROYECTOS</p></Link>
            <Link to ='/contact' ><p className='opt-container' >CONTACTO</p></Link>
          
            
        </div>
        </nav>
    )
}

export default navBar

// className={`navbar ${isScrolling >20? 'scrolling': null}