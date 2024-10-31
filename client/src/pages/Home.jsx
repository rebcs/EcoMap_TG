// Home.js
import React, { useState } from "react";
import BuscarPontoPopUp from "./BuscarPontoPopUp";
import BuscarOngPopUp from "./BuscarOngPopUp";
import BuscarEmpresaPopUp from "./BuscarEmpresaPopUp";
import SugerirPontoPopUp from "./SugerirPontoPopUp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";


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
            <Navbar/>

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
            
            <Cards/>

            <Footer/>
        </div>

    );
};

export default Home;
