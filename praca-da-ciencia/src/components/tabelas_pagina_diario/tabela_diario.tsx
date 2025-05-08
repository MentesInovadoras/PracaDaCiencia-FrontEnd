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

            <label >Responsavel :</label>
            <input type="text" id="full-width" value= "exemplo" disabled />

            <label >Instituição de ensino :</label>
            <input type="text" id="full-width" value= "exemplo" disabled />

            <div className="roteiro_quantidade_visitas_diaria">
                <input type="text" id="full-width" value= "Roteiro" disabled />
                <input type="text" id="full-width" value= "00-00 visitantes" disabled />
                
                
                

            </div>
            


        </div>
        
        </>
       

    )
}