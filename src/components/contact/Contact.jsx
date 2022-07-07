import React from 'react'
import './contact.css'
import GITHUB from '../../assets/Githubi.png'
import LINKEDIN from '../../assets/LinkedIni.png'
import EMAIL from '../../assets/Emaili.png'
import INSTA from '../../assets/Instagrami.png'

const Contact = () => {
  return (
    <section id="contact">
      <h1 classsName='title__name'> <b> Get In Touch </b> </h1>
      <p className='title__desc'>Although I’m not currently looking for any new opportunities, my inbox is always open. <br></br>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      
      
        <div className="my__icon-carrier">
          <a href="https://github.com/Sunnychandrz" target="_blank" data-aos="fade-up" ><img src={GITHUB} /></a>
          <a href="https://www.linkedin.com/in/sunny-chandra-b89021207/" target="_blank" data-aos="fade-up" ><img src={LINKEDIN} /></a>
          <a href="mailto:sunny.chandra310505@gmail.com" target="_blank" data-aos="fade-up" > <img src={EMAIL} /></a>
          <a href="https://instagram.com/sunchand.js" target="_blank" data-aos="fade-up" ><img src={INSTA} /></a>
        </div> 
         <a target="_blank" href="https://api.whatsapp.com/send?phone=6285710387718&text=Halo"><button className="btn-primary-outline">Contact Me</button></a>
    
    </section>
  )
}

export default Contact