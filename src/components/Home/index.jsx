import React from 'react'
import './index.scss'
import AvatarImage from '../../assets/avatar.svg'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons'

const Home = () => {
  return (
    <header id='home' className='home'>
      <div className='imageContainer'>
        <img src={AvatarImage} alt='imagen del avatar' />
      </div>
      <div className='headerText'>
        <p className='greeting'>¡HOLA! 👋 MI NOMBRE ES:</p>
        <h1><span>FABIAN </span>NEGRELLOS</h1>
        <p className='smallbio'>Soy un <span>Front-End Developer 👩🏻‍💻</span> apasionado por crear aplicaciones y experiencias interactivas en la web.</p>
        <div className='socialsResume'>
          <a href='#' className='cvLink'>Descargar CV</a>
          <ul className='socialList'>
            <li>
              <a href='https://www.linkedin.com/in/fabian-negrellos/' target='_blank' rel="noreferrer"><IconBrandLinkedin width={32} height={32} strokeWidth={2} color='#0069c0' /></a>
            </li>
            <li>
              <a href='https://github.com/OsvaldoNegrellos14' target='_blank' rel="noreferrer"><IconBrandGithub width={32} height={32} strokeWidth={2} color='#0069c0' /></a>
            </li>
            <li>
              <a href='https://twitter.com/FabianNegrellos' target='_blank' rel="noreferrer"><IconBrandTwitter width={32} height={32} strokeWidth={2} color='#0069c0' /></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Home
