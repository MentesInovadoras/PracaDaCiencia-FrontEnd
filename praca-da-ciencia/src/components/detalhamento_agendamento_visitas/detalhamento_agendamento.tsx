import React, {useState }from "react";
import './detalhamento_agendamento.css';

function CpfInput(){
    
}




export default function DetalhamentoAgendamento (){
    return(
        <>
        <div id="detalhamento_agendamento">
            <div id=" data_hora_detalhamento_visitas">

                <label >Data</label>
                <input type="date" name="" id="" />
                <label >Hora</label>
                <input type="time" name="" id="" />

            </div>

            <div id="dados_responsavel_detalhamento">
                <label>Nome Completo do Visitante Responsável:</label>
                <input type="text"  id="full-width" value="exemplo"  disabled/>
                <label>CPF do Visitante Responsável:</label>
                <input type="text"  id="CPF"  maxLength ={14} placeholder="000.000.000-00"  disabled/>



            </div>

        </div>

       
        </>

    )
}