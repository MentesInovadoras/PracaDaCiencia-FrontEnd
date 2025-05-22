import React from "react";
import logoPrefeitura from "../../assets/logo/Logo-Prefeitura-de-Vitória.png";
import logoCiencia from "../../assets/logo/mainWithText.png";


import './footer.css';


export default function Footer() {
    return(
        <footer id="footer">

            <div id="imgPrefeitura">
                <a href="https://www.vitoria.es.gov.br" target="_blank"><img src={logoPrefeitura} alt="Logo da Prefeitura de Vitória" /></a>
            </div>

            <div id="footer_conteudo">
                <div id="footer_intagram_prefeitura">

                </div>
                
                
                
                
            </div>

            <div id="imgLogoPracaCiencia">
                <img src= {logoCiencia} alt="logo da Praça da Ciencia" />
            </div>
            
        </footer>
    )
}