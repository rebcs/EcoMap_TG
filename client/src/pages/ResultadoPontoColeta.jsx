// ResultadoPontoColeta.js
import React from "react";
import { useLocation } from "react-router-dom";

const ResultadoPontoColeta = () => {
    const location = useLocation();
    const { resultados } = location.state || { resultados: [] };

    return (
        <div>
            <h2>Pontos de Coleta Próximos</h2>
            {resultados.length === 0 ? (
                <p>Nenhum ponto de coleta encontrado.</p>
            ) : (
                resultados.map((point) => (
                    <div key={point.id_pontoColeta} className="card">
                        <p>{point.endereco}</p>
                        <p>Distância: {point.distance.toFixed(2)} km</p>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${point.latitude},${point.longitude}`}
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

export default ResultadoPontoColeta;
