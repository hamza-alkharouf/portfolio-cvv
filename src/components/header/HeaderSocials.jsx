import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return ( 
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hamza-alkharouf-b7b858169/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/hamza-alkharouf" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials