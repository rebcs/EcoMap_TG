import React from 'react'

const Navbar = () => {
  return (
    <nav className="menu_navegacao">
  <a href="index.html">
    <img className="logoHeader" src="/img/LOGO.png" alt="Logo" />
  </a>
  <div className="menu_itens">
    <a className="menu_item" href="index.html">
      Home
    </a>
    <a className="menu_item" href="guia.html">
      Guia de Reciclagem
    </a>
    <a className="menu_item" href="faq.html">
      Perguntas Frequentes
    </a>
    <a className="menu_item" href="sobre.html">
      Sobre nós
    </a>
    <a href="cadastrar.html" id="btnContact">
      Cadastrar
    </a>
    <a href="login.html" id="btnContact">
      Entrar
    </a>
  </div>
</nav>

  )
}

export default Navbar