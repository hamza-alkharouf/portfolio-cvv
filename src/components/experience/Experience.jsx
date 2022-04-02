import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import {softSkills,technicalSkills} from './constant'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__softskills">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            {
              softSkills.map(({ id, skills }) => {
                return (
                  <article className='experience__details' key={id}>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{skills}</h4>
                    </div>

                  </article>
                )
              })
            }
          </div>
        </div>


        <div className="experience__technicalskills">
          <h3>Technical Skills</h3>
          <div className="experience__content">

            {
              technicalSkills.map(({ id, skills, knowledge }) => {
                return (
                  <article className='experience__details ' key={id}>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{skills}</h4>
                      <small className='text-light'>{knowledge}</small>

                    </div>

                  </article>
                )
              })
            }

          </div>
        </div>
      </div>
    </section>

  )
}

export default Experience