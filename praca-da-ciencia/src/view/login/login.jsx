import React from "react";
import './login.css';

export default function Login (){
    return(
        <>
        <div>
            <header>
                <h1>imagem 1</h1>
                <h1>imagem 2</h1>
            </header>
            <div id="content">
                <div className="validation">
                    <h2>Login</h2>
                    <input type="text" required placeholder="insira seu email"/>
                    <h2>Senha</h2>
                    <input type="password" required placeholder="Insira sua senha"/>
                    <br/>
                    <br/>
                    <button type="submit">Entrar</button>
                </div>
            </div>
        </div>
        </>
    )

}