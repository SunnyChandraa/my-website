import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import RDO from '../../assets/rdo.png'
import NDO from '../../assets/ndo.png'
import digires from '../../assets/dr2.png'

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>My Last activity</h5>
      <h2>Working Carrier</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar-digires">
            <img src={digires} alt="Avatar Four" />
          </div>
            <h3 className='client__name'>PT. INOVASI DIGITAL RISE INDONESIA</h3>
              <small className="client__review">
                Internship at PT. Inovasi Digital Rise Indonesia (June 2021 - November 2021) as a junior software developer working with HTML, CSS, PHP also using framework and API with Codeigniter 3 and learn Javascript library like Vue and React
              </small>
        </article>

        {/* <article className="testimonial">
            <h3 className='client__name'>COMING !</h3>
        </article> */}
{/* 
        <article className="testimonial">
          <div className="client__avatar-ndo">
            <img src={NDO} alt="Avatar Four" />
          </div>
            <h3 className='client__name-ndo'>NATIONAL GERMAN OLYMLICS 2022</h3>
              <small className="client__review">
                Finalist Natinonale Deutscholympiade (NDO) 2022 By Goethe-Institut
              </small>
        </article>

        
        <article className="testimonial">
          <div className="client__avatar-ndo">
            <img src={RDO} alt="Avatar Four" />
          </div>
            <h3 className='client__name-ndo'>REGIONALE/PROVINCE GERMAN OLYMLICS 2022</h3>
              <small className="client__review">
                I take a part at Regionale Deutscholympiade (RDO) 2021 By Goethe-Institut
              </small>
        </article> */}
      </div>
    </section>
  )
}

export default Testimonial