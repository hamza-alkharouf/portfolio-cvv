import React from 'react'
import './about.css'
//import ME from '../../assets/me-about.jpg'
//import ME from '../../assets/me.png'
import ME from '../../assets/me-2.png'

import { FaAward, FaUsers } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get  To Know</h5>
      <h2>About</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Training with Work</small>
            </article>

            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+ Local</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>40+ completed</small>
            </article>
          </div>

          <p>An innovative technical mind with 3 years of
            experience working as a computer
            programmer, Extensive experience in the
            computer field. work with a variety of
            programmers, Ability to solve programming
            problems with high skill, A spirit of challenge
            and determination. A leader gifted with
            unique ideas with ability to withstand pressure
            and my programming abilities increase under
            pressure! I deliver the tasks on time. I have a
            saying that I always say "I don't say I don't
            know this thing and it's over! On the contrary,
            I say I will learn it, because there is no person
            who has sealed knowledge and lack of
            knowledge is not a shame as much as your
            unwillingness to learn." I believe that pressure
            is what shows the real capabilities of the
            programmer, especially if he enjoys
            programming! Programming is the future.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About