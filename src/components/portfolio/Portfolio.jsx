import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/assettree.png'
import IMG2 from '../../assets/eabsensi.jpg'
import IMG3 from '../../assets/oee.png'
import IMG4 from '../../assets/home.png'
import IMG5 from '../../assets/match-maker.png'
import IMG6 from '../../assets/pearl.png'

const data = [
 { 
  id: 1,
  image: IMG1,
  tittle: 'Asset Tree for manage our property, build by Bootstrap, CI 3 and IoT (api)',
  github: 'https://github.com/Sunnychandr',
  demo: ''
},
{ 
  id: 2,
  image: IMG2,
  tittle: 'Elektronik-absensi some app to attendance by tracking location for company and school build by XML and Java',
  github: 'https://github.com/Sunnychandr',
  demo: ''
},
{ 
  id: 3,
  image: IMG3,
  tittle: 'OEE Home monitoring for monitor machine performance build by Bootstrap, Jquery, CI 3',
  github: 'https://github.com/Sunnychandr',
  demo: ''
},
{ 
  id: 4,
  image: IMG4,
  tittle: 'Home energy monitoring to monitoring daily electric cost, power usage now and prediction cost next day',
  github: 'https://github.com/Sunnychandr',
  demo: ''
},
{ 
  id: 5,
  image: IMG5,
  tittle: 'Match Maker is an app to connect interns and companies',
  github: 'https://github.com/Sunnychandr',
  demo: ''
},
{ 
  id: 6,
  image: IMG6,
  tittle: 'Web Informations cosmetics selling',
  github: 'https://github.com/Sunnychandr',
  demo: ''
}



]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recents Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
          data.map(({id, image, tittle, github, demo}) => {
            return (
            <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={tittle} />
            </div>
            <h4 className='title-portfolio'>{tittle}</h4>
            <div className="portfolio__item-cta">
              {/* <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio