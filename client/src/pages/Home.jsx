// Home.js
import React, { useState } from "react";
import BuscarPontoPopUp from "./BuscarPontoPopUp";
import BuscarOngPopUp from "./BuscarOngPopUp";
import BuscarEmpresaPopUp from "./BuscarEmpresaPopUp";
import SugerirPontoPopUp from "./SugerirPontoPopUp";

const Home = () => {
    const [activePopup, setActivePopup] = useState(null);

    const openPopup = (popupType) => {
        setActivePopup(popupType);
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    return (
        <div>
            <header>
                <h1>EcoMap</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/guia">Guia de Reciclagem</a>
                    <a href="/faq">Perguntas Frequentes</a>
                    <a href="/sobre">Sobre nós</a>
                </nav>
            </header>

            <main>
                <h2>Encontre o ponto de descarte mais próximo</h2>
                <button onClick={() => openPopup("descarte")}>QUERO DESCARTAR</button>
                <button onClick={() => openPopup("doacao")}>QUERO DOAR</button>
                <button onClick={() => openPopup("compravenda")}>QUERO COMPRAR OU VENDER</button>
                <p>
                    Conhece algum ponto de entrega ainda não registrado?{" "}
                    <span className="suggest-link" onClick={() => openPopup("sugestao")}>
                        Clique aqui para sugerir um novo endereço de coleta!
                    </span>
                </p>
            </main>

            {activePopup === "descarte" && <BuscarPontoPopUp onClose={closePopup} />}
            {activePopup === "doacao" && <BuscarOngPopUp onClose={closePopup} />}
            {activePopup === "compravenda" && <BuscarEmpresaPopUp onClose={closePopup} />}
            {activePopup === "sugestao" && <SugerirPontoPopUp onClose={closePopup} />}
        </div>
    );
};

export default Home;
