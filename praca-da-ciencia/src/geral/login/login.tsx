import React from "react";
import './login.css';
// import logo_praca from "../../router/image/pracaCIENCIA.png";
// import logo_prefeitura from '../../router/image/logo_prefeitura_vitoria.png'

export default function Login() {
    return (
        <>
            <div>
                <header>
                    <div id="pracaCiencia">
                        {/* <img src={logo_praca} alt="logo" />   */}
                    </div>

                    <div id="prefeituradeVitoria">
                        {/* <img src={logo_prefeitura} alt="" /> */}

                    </div>


                </header>
                <div id="content">
                    <div className="validation">
                        <h2>Login</h2>
                        <div id="inputLogin">
                            <input type="text" required placeholder="insira seu email" />
                        </div>
                        <h2>Senha</h2>
                        <div id="inputSenha">
                            <input type="password" required placeholder="Insira sua senha" />
                        </div>

                        <br />
                        <br />
                        <div id="botaoAcessar">
                            <button type="submit">acessar</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}