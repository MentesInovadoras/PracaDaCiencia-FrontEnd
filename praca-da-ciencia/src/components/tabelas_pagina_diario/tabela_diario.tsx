import React from "react";
import './tabela_diario.css';

export default function TabelaDiario() {
    return(
        <>
        <div id="tabela_diario">
            <div id=" data_hora_visita_diario">

                <input type="date" name="" id="" />
                <input type="time" name="" id="" />
                
                
                
            </div>

            <div id="responsavel_diario">
                <label>Responsavel :</label>
                <input type="text" id="full-width" value= "exemplo" disabled />

            </div>

            <div id="intituicao_diario">
                <label id="instituicao_diario">Instituição de ensino :</label>
                <input type="text" id="full-width" value= "exemplo" disabled />

            </div>

            <div id="roteiro_quantidade_visitas_diaria">

                <input type="text" id="full-width" value= "Roteiro" disabled />
                <input type="text" id="full-width" value= "00-00 visitantes" disabled />
        
            </div>
            


        </div>
        
        </>
       

    )
}