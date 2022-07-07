import React from 'react'
import './about.css'
import ME from '../../assets/down-img.jpg'
import {IoSchoolSharp} from 'react-icons/io5'
import {GiAchievement} from 'react-icons/gi'
import {IoMdCodeWorking} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'

const About = () => {
  return (
    <section id="about">
      <h5>Get In Touch</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
            <div className="about__cards">
              <article className='about__card-resume'>
              <p className='text-light'>
                I'm graduate of Software Engineering at SMKN 6 Tangerang Selatan who is currently studying web/mobile application and big data programming. For more or less 3 years I have explored my coding skills to the end to pursue website development and make some simple mobile apps recently i was learn about data flow and streaming using apache kafka request and crawling website using python and also making an API gateway
              </p> 
              </article>
            </div>
          </div>
        </div>

    

        <div className="about__content">
        {/* mobile apps */}
          <div className="about__cards-mobile">
            <article className='about__card-img'>
              <CgProfile className='about__icon'/>
              <h4 className='test'>About Me</h4>
              <small className='text-light'>
                I'm graduate of Software Engineering at SMKN 6 Tangerang Selatan who is currently studying web/mobile application and big data programming. For more or less 3 years I have explored my coding skills to the end to pursue website development and make some simple mobile apps recently i was learn about data flow and streaming using apache kafka request and crawling website using python and also making an API gateway
              </small> 
            </article>
          </div>

          <div className="about__cards">
            <article className='about__card'>
              <IoSchoolSharp className='about__icon'/>
              <h4 className='test'>Education Background</h4>
              <small className='text-about'>Software engineering student at SMKN 6 Tangerang Selatan (2019-2022)</small>
            </article>
          </div>

          
          <div className="about__cards">
            <article className='about__card-2'>
              <GiAchievement className='about__icon'/>
              <h4 className='test'>Achievements</h4>
              <small className='text-about'>I take a part in a few informatics competitons one of them is 3rd IT Software Solution for business (LKS Tangsel 2021) and  Web Design by ITTS Telkom Sby and i also take a part in Regional/Province German Olymics and National German Olymics 2021 by Goethe-Institute</small>
            </article>
          </div>

          
          <div className="about__cards">
            <article className='about__card-3'>
              <IoMdCodeWorking className='about__icon'/>
              <h4 className='test'>Working Experience</h4>
              <small className='text-about'>Internship at PT. Inovasi Digital Rise Indonesia as a junior software developer working with HTML, CSS, PHP also using framework and API with Codeigniter 3 and learn Javascript library like Vue and React</small>
            </article>
          </div>
          
          {/* <a href="#contact" className='btn btn-primary'>More About Me</a> */}
        </div>
      </div>
    </section>
  )
}

export default About