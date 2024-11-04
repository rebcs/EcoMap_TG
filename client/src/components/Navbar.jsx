import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex flex-row items-center justify-between mr-10 p-3">
            <a href="index.html">
                <img className="ml-[70px]" src="/img/LOGO.png" alt="Logo" />
            </a>
            <div className="menu_itens">
                <a className="no-underline font-[bold] mx-1.5 my-0" href="index.html">Home </a>
                <a className="menu_item" href="guia.html">
                    Guia de Reciclagem
                </a>
                <a className="menu_item" href="faq.html">
                    Perguntas Frequentes
                </a>
                <a className="menu_item" href="sobre.html">
                    Sobre nós
                </a>
                <a href="cadastrar.html" className='text-sm w-[129px] h-[32.53px] text-white bg-[#356037] font-[medium] cursor-pointer no-underline uppercase inline-block text-center leading-[32.53px] rounded-lg border-none hover:bg-[#2a4f2d]'>
                    Cadastrar
                </a>
                <a href="login.html" className='text-sm w-[129px] h-[32.53px] text-white bg-[#356037] font-[medium] cursor-pointer no-underline uppercase inline-block text-center leading-[32.53px] rounded-lg border-none hover:bg-[#2a4f2d]'>
                    Entrar
                </a>
            </div>
        </nav>

    )
}

export default Navbar