import React from 'react'
import {
    Routes,
    Route,
   useLocation
  } from "react-router-dom";
 
import './Assets/App.scss'
import Home from './pages/home'
import About from './pages/about'
import Knowledge from './pages/knowledge'
import Contact from './pages/contact'
import Projects from './pages/projects'
import {AnimatePresence} from 'framer-motion'
function AnimatedRutes() {
    const location = useLocation()
    return (
        <div>
            <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/knowledge' element={<Knowledge />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            </Routes>
            </AnimatePresence>

        </div>
    )
}

export default AnimatedRutes
