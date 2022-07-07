import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sunny-chandra-b89021207/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Sunnychandr" target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/sunchand.js/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials