import { IconArrowNarrowDown, IconBriefcase, IconCode, IconHome, IconMail, IconSettings, IconUser } from '@tabler/icons'
import React from 'react'
import './index.scss'

const SideNav = () => {
  return (
    <aside className='nav__header'>
      <div>
        <h1 className='logo'>Fn</h1>
      </div>
      <nav className='list-options'>
        <ul className='navbar'>
          <li>
            <a href='#home' className='navItem'>
              <IconHome />
              <span className='navItemName'>INICIO</span>
            </a>
          </li>
          <li>
            <a href='#about' className='navItem'>
              <IconUser />
              <span className='navItemName'>SOBRE MÍ</span>
            </a>
          </li>
          <li>
            <a href='#skills' className='navItem'>
              <IconSettings />
              <span className='navItemName'>SKILLS</span>
            </a>
          </li>
          <li>
            <a href='#projects' className='navItem'>
              <IconCode />
              <span className='navItemName'>PROYECTOS</span>
            </a>
          </li>
          <li>
            <a href='#experience' className='navItem'>
              <IconBriefcase />
              <span className='navItemName'>EXPERIENCIA</span>
            </a>
          </li>
          <li>
            <a href='#contact' className='navItem'>
              <IconMail />
              <span className='navItemName'>CONTACTO</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className='scrollDown'>
        <IconArrowNarrowDown size={30} color={'#fff'} />
        <span className='navItemName'>DESLIZAR HACIA BAJO</span>
      </div>
    </aside>
  )
}

export default SideNav
