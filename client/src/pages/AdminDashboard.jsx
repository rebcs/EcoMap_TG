// AdminDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleSuggestedPointsClick = () => {
        // Redireciona para a página de gestão dos pontos sugeridos
        navigate("/pontos-sugeridos");
    };

    return (
        <div className="dashboard-container">
            <h2>Painel de Gerenciamento do Administrador</h2>
            <button onClick={handleSuggestedPointsClick}>PONTOS SUGERIDOS</button>
            {/* Outros botões de gerenciamento podem ser adicionados aqui, como gerenciamento de empresas e ONGs */}
        </div>
    );
};

export default AdminDashboard;
