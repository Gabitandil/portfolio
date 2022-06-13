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
import nftMarket from '../media/icons/nftmarket.png'
import starsVideo from '../media/stars.mp4'
import dogsApi from '../media/icons/dogsapi.png'
export default function Knowledge() {
    const [hover, setHover] = useState(false)
    
    function nftMarketVideo(){
      const nftMarketUrl = "https://www.linkedin.com/feed/update/urn:li:activity:6938915334397530112/"
      window.open(nftMarketUrl)
    }
    function dogsApiVideo(){
      const dogsVideo = "https://www.linkedin.com/feed/update/urn:li:activity:6929180569830318080/"
      window.open(dogsVideo)
    }
  return (
      <div className='knowledge-container'>
        <video className='knowledge-video' src={starsVideo} autoPlay muted loop></video>
        <NavBar/>
        <h1 className='knowledge-title'>TECNOLOGIAS</h1>
      
      <div className='tech-container'>
        
         <img  src={reactIcon} alt="" />
         <img  src={cssIcon} alt="" />
         <img src={htmlIcon} alt="" />
         <img className='js' src={jsIcon} alt="" />
         <img src={nodeIcon} alt="" />
         <img className='github' src={gitHubIcon} alt="" />
         <img className='mongoIcon' src={mongoIcon} alt="" />
         <img className='reduxIcon' src={reduxIcon} alt="" />
         </div>
      <div  className='knowledge-projects'>
        <h1 className='knowledge-projects-title' >PROYECTOS</h1>
        <div className='knowledge-projects-container'>
        <div onClick={nftMarketVideo}>
        <img  className="market-photo"src={nftMarket} alt="" />
        <div className='overlay'>
          <div >
        <h3>NFT MARKET</h3>
        <p>Video Demostracion</p>
        </div>
        </div>
        </div>
        </div>
      </div>
      <div className='dogs-api-container' onClick={dogsApiVideo} >
      <img className='dogs-photo' src={dogsApi} alt="" />
      <div  className='dogs'>

      <h3>DOGS API</h3>
      <p>Video Demostracion</p>
      </div>
      </div>
      </div>



    
  )
}
