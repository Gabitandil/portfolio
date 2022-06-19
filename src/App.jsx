import {
  BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./animatedRoutes";
import React, {useState, useEffect} from "react";
import NavBar from './componentes/navBar'
import './Assets/App.scss'
import Home from './pages/home'
import About from './pages/about'
import Knowledge from './pages/knowledge'
import Contact from './pages/contact'
function App() {




  return (
    <div>
      
      <Router>
      
        
        <AnimatedRoutes/>
        
        </Router>
      
      
    </div>
  )
}

export default App


// return (
//   <Router>
//    <Routes>
//     <Route exact path ='/' element = {<Home/>} />
//    </Routes>
//   </Router>
//  )