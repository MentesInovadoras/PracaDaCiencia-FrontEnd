import React from "react";
import './calendario.css';
// import logo_praca from "../../router/image/pracaCIENCIA.png";


const Calendario = () => {
    return (
        <div>
            <header>

                <nav>
                    <a href="diario"><button>diario</button></a>
                    <a href="semanal"><button>semanal</button></a>
                    <a href="mensal"><button>mensal</button></a>
                </nav>
            </header>

            <div id="card_individual">
                <div className="date"> DD/MM/AA</div>
                <div className="time">HH/MM</div>
                <div className="title">Responsavel:</div>
                <div className="intituicao"> Instituição de ensino:</div>
                <div className="roteiro">Roteiro</div>
            </div>

        </div>
    );
}

export default Calendario;



