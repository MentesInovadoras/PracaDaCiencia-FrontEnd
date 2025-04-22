import React from "react";
import './semanal.css';
import logoPraca from '../../assets/logo/mainWithText.png';

const Semanal = () => {
    return (
            <header className="menu_vertical">
                <div id="imagemlogo">
                    <img src={logoPraca} alt="Logo" className="logo" />

                </div>
               
                
                <nav>
                    <div id="botao_diario">
                        <a href="diario"><button>diario</button></a>

                    </div>
                    
                    <div id="botao_semanal">
                     <a href="semanal"><button>semanal</button></a>

                    </div>
                    
                    <div id="botao_mensal">
                        <a href="mensal"><button>mensal</button></a>

                    </div>
                    
                    
                </nav>


            </header>
        
    );

}
export default Semanal;
