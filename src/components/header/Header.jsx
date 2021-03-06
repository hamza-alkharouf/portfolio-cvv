import React from 'react'
import './header.css'
import CTA from './CTA'
//mport ME from '../../assets/me-2.png'
import ME from '../../assets/me-3.jpg'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hamza ALkharouf</h1>
        <h5 className='text-light'>Fullstack Flutter Developer </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header