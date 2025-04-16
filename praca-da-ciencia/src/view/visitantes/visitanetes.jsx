import React from "react";
import './visitantes.css';


const Visitante = () =>
{
    return (
        <div>
            <header>
                <h1>imagem1</h1>

                <nav>
                <a href="diario"><button>diario</button></a>
                <a href="semanal"><button>semanal</button></a>
                <a href="mensal"><button>mensal</button></a>

                </nav>
                
            </header>
            
            <div className="card_individual">
                    <div className="date"> DD/MM/AA</div>
                    <div className="time">HH/MM</div>
                    <div className="title">Responsavel:</div>
                    <div className="intituicao"> Instituição de ensino:</div>
                    <div className="roteiro">
                        <button></button>
                    </div>

                    


                </div>

        
        
        </div>
    );
}

export default Visitante;



