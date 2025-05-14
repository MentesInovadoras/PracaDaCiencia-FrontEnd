import React, { useState } from "react";
import './tabela_diario.css';





export default function TabelaDiario() {
    const[ editMode, setEditMode] = useState(false);
    const[quantidadeVisitantes, setQuantidadeVisitantes] = useState("");


    const handleCheckboxChange = (e) => {
        setEditMode(e.target.checked);

      
    }

    const handleQuantidadeChange = (e) => {
        let value = e.target.value;

        value = value.replace(/[^0-9]/g, '');

        setQuantidadeVisitantes(value);

    }
    return(
        <>
        <div id="tabela_diario">
            <div id=" data_hora_visita_diario">

                <input type="date" disabled = {!editMode} id="data_detalhamento_diario"/>
                <input type="time" disabled = {!editMode} id="hora_detalhamento_diario"/>
                
                
                
            </div>

            <div id="responsavel_diario">
                <label id="label_responsavel_detalhamento_diario">Responsavel :</label>
                <input type="text"  required placeholder="exemplo" disabled = {!editMode} id="input_responsavel_detalhamento_diario"/>

            </div>

            <div id="intituicao_diario">
                <label id="label_instituicao_detalhamento_diario">Instituição de ensino :</label>
                <input type="text" required placeholder="exemplo" disabled = {!editMode} id="input_instituicao_detalhamento_diario" />

            </div>

            <div id="roteiro_visitas_diaria">

                <textarea  required placeholder="roteiro" disabled = {!editMode}  id="input_roteiro_detalhamento_diario"/>
               
        
            </div>

            <div id="quantidade_visitas_diaria">
                <label htmlFor="" id="label_quantidade_detalhamento_diario">Quantidade de Visitantes:</label>
                <input
                type="text"
                required 
                placeholder="0"
                disabled = {!editMode}
                id="input_quantidade_detalhamento_diario"
                value={quantidadeVisitantes}
                onChange={handleQuantidadeChange}
                />
                

            </div>
            

            <div id="editar_editar_detalhamento_diario">
                <label htmlFor="editarCheck" id="label_editar_detalhamento_diario"> modo editor: </label>
                <input
                type="checkbox"
                id="editarCheck"
                checked={editMode}
                onChange={handleCheckboxChange}
                />

            </div>
            


        </div>
        
        </>
       

    )
}