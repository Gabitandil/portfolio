import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
 
} from "react-router-dom";

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
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route path ='/about' element={<About/>} />
        <Route path ='/knowledge' element={<Knowledge/>} />
        <Route path ='/contact' element ={<Contact/>} />
        </Routes>
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