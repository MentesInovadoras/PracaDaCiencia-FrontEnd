import React from "react";
import './homePage.css';

const homePage = () => {
    return (
        <div id="homePage">
            <h1> Bem vindo a área <br /> do Administrador  </h1>
            <div id="botao_entrar">
                <a href="login"><button type="submit">Entrar</button></a>
            </div>
        </div>
        
        
    );
}
export default homePage;