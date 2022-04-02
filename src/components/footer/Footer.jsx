import React from 'react'
import './footer.css'
import {SiGmail} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>HAMZA ALKHAROUF</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>



   
    </footer>
  )
}

export default Footer