import React from "react";
import Navbar from "../../components/navbar/navbar.tsx";
import './homePage.css';
import Footer from "../../components/footer/footer.tsx";

const homePage = () => {
    return (
        <>
            <Navbar />
            <div id="homePage">

                <h1> Bem vindo a área <br /> do Administrador  </h1>
                <div id="botao_entrar">
                    <a href="login"><button type="submit">Entrar</button></a>
                </div>

            </div>
            <Footer />
        </>
        

    );
}
export default homePage;