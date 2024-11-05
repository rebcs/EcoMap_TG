import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="menu_navegacao">
  <a href="index.html">
    <img className="logoHeader" src={Logo} alt="Logo" />
  </a>
  <div className="menu_itens">
    
  <a className="menu_item" ><Link to="/">Home</Link></a>
  <a className="menu_item" ><Link to="/guia">Guia de Reciclagem</Link></a>
  <a className="menu_item" ><Link to="/faq">Perguntas Frequentes</Link></a>
  <a className="menu_item" ><Link to="/sobre-nos">Sobre Nós</Link></a>
    
    <a id="btnContact">
    <Link to="/Cadastrar">Cadastrar</Link>
    </a>
    <a id="btnContact">
    <Link to="/Login">Entrar</Link>
    </a>
  </div>
</nav>


    )
}

export default Navbar