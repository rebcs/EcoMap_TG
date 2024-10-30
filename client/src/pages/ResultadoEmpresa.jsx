// ResultadoEmpresa.js
import React from "react";
import { useLocation } from "react-router-dom";

const ResultadoEmpresa = () => {
    const location = useLocation();
    const { resultados } = location.state || { resultados: [] };

    return (
        <div>
            <h2>Empresas Próximas de Você</h2>
            {resultados.length === 0 ? (
                <p>Nenhuma empresa encontrada.</p>
            ) : (
                resultados.map((empresa) => (
                    <div key={empresa.id_empresa} className="card">
                        <p>{empresa.nome}</p>
                        <p>Endereço: {empresa.endereco}</p>
                        <p>Distância: {empresa.distance.toFixed(2)} km</p>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${empresa.latitude},${empresa.longitude}`}
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

export default ResultadoEmpresa;
