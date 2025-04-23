import React from "react";
import './erro.css';
import logo from '../../assets/logo/main.png';

const Erro = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div id="errorPage">
            <div className="errorLogo">
                <img src={logo} alt="Imagem da praça" />
                <h1>ERRO 404</h1>
            </div>
            <div className="errorText">
                <h2>OOPS! A página não foi encontrada ou <br/> não existe mais</h2>
                <div>
                    <a href="/"><button >INICIO</button></a>
                    <a><button onClick={goBack}>VOLTAR</button></a>
                </div>
            </div>
        </div>
    );
}
export default Erro;