import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI/UX SEC */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Make An UI/UX design using Figma and Gravit Designer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Slicing UI into HTML (Booststrap)</p>
            </li>
          </ul>
        </article>
        {/* WEB DEV SEC */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Make a website (frontend) with HTML, CSS, JavaScript, Bootstrap and with a JS library such React, Vue, Nux and Angular</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using PHP as backend also PHP Framework like CodeIgniter and little Laravel sometimes i used Node JS too</p>
            </li>
          </ul>
        </article>
        {/* CREATION SEC */}
        <article className="service">
          <div className="service__head">
            <h3>Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Crawl and Scraping website using python with the library and framework</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I like to solve a problem solving with competitive programming platform like TLX and Codeforce using C++ and Java</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service