import React from 'react'
import Navbar from '../componentes/navBar'
import Background from '../media/background.jpg'
import '../Assets/projects.scss'
import nftMarket from '../media/icons/nftmarket.png'
import dogsApi from '../media/icons/dogsapi.png'
import { motion } from 'framer-motion'
export default function Projects() {

  function nftMarketVideo(){
    const nftMarketUrl = "https://www.linkedin.com/feed/update/urn:li:activity:6938915334397530112/"
    window.open(nftMarketUrl)
  }
  function dogsApiVideo(){
    const dogsVideo = "https://www.linkedin.com/feed/update/urn:li:activity:6929180569830318080/"
    window.open(dogsVideo)
  }

  return (
    <motion.div className='project-container'
    initial={{ opacity: 0.5 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    exit={{ opacity: 0.2 }}
    >
        <Navbar/>
        <h1>PROYECTOS</h1>
        <img className='project-background' src={Background} alt="" />
        <div className='projects-container'>
          <div className='project-text'>
        <img className='fotonftmarket' onClick={nftMarketVideo} src={nftMarket} alt="" />
        <h3>nft market</h3>
        <p>Exchange de NFT con tradeos, perfil de usuario, transferencias, chat, plataforma de pago Mercado Pago, historial de compras/ventas, notificaciones por correo electronico, búsquedas por parámetros, sistema de popularidad en activos y en usuarios, filtrados por categorías, ordenamientos y creación de nuevos activos.
          desarrollada con : React, Redux, SCSS y Back-End desarrollado en Node.js con Express. Base de datos en mongoDB y Sequelize.
        </p>
        </div>
        <div className='project-text'>
        <img onClick={dogsApiVideo} src={dogsApi} alt="" />
        <h3>api dogs</h3>
        <p>App de razas de perro que incluye: búsquedas por parámetros, filtrados por raza y temperamento,  ordenamientos y creación de nuevas razas.
        app desarrollada usando para el Front-End React, Redux, CSS puro y Back-End desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize.
        </p>
        </div>
        </div>
    </motion.div>
  )
}
