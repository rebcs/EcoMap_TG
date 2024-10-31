import React from 'react'

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
      <img src="/img/icon_facebook.png" alt="" />
      <img src="/img/icon_linkedin.png" alt="" />
      <img src="/img/icon_twitter.png" alt="" />
      <img src="/img/icon_youtube.png" alt="" />
      <img src="/img/icon_instagram.png" alt="" />
    </div>
  </div>
</div>

  )
}

export default Footer