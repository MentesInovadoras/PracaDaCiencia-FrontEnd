import React from "react";
import './diario.css';
import Navbar from "../../../../components/navbar/navbar";
import Footer from "../../../../components/footer/footer";
import TabelaDiario from "../../../../components/tabelas_pagina_diario/tabela_diario";

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