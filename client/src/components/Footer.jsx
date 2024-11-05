import React from 'react'
import Facebook from '../assets/icon_facebook.png'
import Linkedin from '../assets/icon_linkedin.png'
import Twitter from '../assets/icon_twitter.png'
import Youtube from '../assets/icon_youtube.png'
import Instagram from '../assets/icon_instagram.png'

const Footer = () => {
  return (
    <div className="footer-content">
      <p>© 2024 Ecomap</p>
      <hr className="linhaFooter" />
      <div className="footer-links">
        <ul className="linksUteis">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre nós</a>
          </li>
          <li>
            <a href="">Entre em contato</a>
          </li>
          <li>
            <a href="adm.html">*Administrador*</a>
          </li>
        </ul>
        <div className="redes_sociais">
          <img src={Facebook} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Twitter} alt="" />
          <img src={Youtube} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
    </div>

  )
}

export default Footer