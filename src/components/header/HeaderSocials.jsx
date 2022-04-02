import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'

const HeaderSocials = () => {
  return ( 
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hamza-alkharouf-b7b858169/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/hamza-alkharouf" target="_blank"><FaGithub/></a>
        <a href="mailto:hamzaalkharouf5@gmail.com"><SiGmail/></a>
        <a href="https://api.whatsapp.com/send?phone=+972595033698"><ImWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials