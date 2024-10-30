// ResultadoONG.js
import React from "react";
import { useLocation } from "react-router-dom";

const ResultadoONG = () => {
    const location = useLocation();
    const { resultados } = location.state || { resultados: [] };

    return (
        <div>
            <h2>ONGs Próximas de Você</h2>
            {resultados.length === 0 ? (
                <p>Nenhuma ONG encontrada.</p>
            ) : (
                resultados.map((ong) => (
                    <div key={ong.id_ong} className="card">
                        <p>{ong.nome}</p>
                        <p>Endereço: {ong.endereco}</p>
                        <p>Distância: {ong.distance.toFixed(2)} km</p>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${ong.latitude},${ong.longitude}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver no mapa
                        </a>
                    </div>
                ))
            )}
        </div>
    );
};

export default ResultadoONG;
