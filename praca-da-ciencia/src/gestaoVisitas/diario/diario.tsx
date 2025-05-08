import React from "react";
import './diario.css';
import Navbar from "../../components/navbar/navbar.tsx";
import Footer from "../../components/footer/footer.tsx";
import TabelaDiario from "../../components/tabelas_pagina_diario/tabela_diario.tsx";

const Diario = () => {
    return (
        <>
        <Navbar />
        <div id="diario_content">
            <TabelaDiario /> 
        
        

        </div>
        <Footer/>
        </>
    );

}

export default Diario;