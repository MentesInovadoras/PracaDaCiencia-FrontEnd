import React, {useState }from "react";
import './detalhamento_agendamento.css';


function formatCpf(value){
    // Remove tudo que não é dígito
    value = value.replace(/\D/g, '');
    // Limita a 11 dígitos
    value = value.substring(0, 11);

    if (value.length === 11){
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    return value;   
}
function CPFInput({value, onChange, disabled = false}){
    const handleChange = (e) => {
        const formattedValue = formatCpf(e.target.value);
        onChange(formattedValue);
    };

    return(
        <input
            type="text"
            id="CPF"
            maxLength={14}
            placeholder="000.000.000-00"
            value={value}
            onChange={handleChange}
            disabled={disabled}


        />
    )

}

function formatTelefone(value){
    value = value.replace(/\D/g, '');

    value = value.substring(0, 11);

    if(value.length === 11){
        return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    return value;
}
function TelefoneInput({value, onChange, disabled = false}){
    const handleChange = (e) => {
        const formattedValue = formatTelefone(e.target.value);
        onChange(formattedValue);

    }
    return(
        <input
            type="text"
            id="telefone"
            maxLength={15}
            placeholder="(00) 00000-0000"
            value={value}
            onChange={handleChange}
            disabled={disabled}
        />

    )
}




export default function DetalhamentoAgendamento (){
    const [cpf, setcpf] = useState("");
    const [telefone, settelefone] = useState("");
    const [editMode, setEditMode] = useState(false);

    const handleCheckboxChange = (e) => {
    setEditMode(e.target.checked); // Atualiza o estado com true/false
  };


    return(
        <>
        <div id="detalhamento_agendamento">
            <div id=" data_hora_detalhamento_visitas">

                <label id="data_visitante_detalhamento">Data:</label>
                <input type="date" name="" id="" disabled = {!editMode}/>
            
                <label id="hora_visitante_detalhamento" >Hora:</label>
                <input type="time" name="" id="" disabled = {!editMode}/>

            </div>

            <div id="nome_responsavel_detalhamento">
                <label>Nome Completo do Visitante Responsável:</label>
                <input type="text" name="" id="" disabled = {!editMode}  />
            </div>
            
            <div id="cpf_visitante_detalhamento">
                <label>CPF do Visitante Responsável:</label>
                <CPFInput value = {cpf} onChange={setcpf}  disabled = {!editMode}/>
                <p></p>

            </div>

            <div id="email_visitante_detalhamento">
                <label >E-mail:</label>
                <input type="email" name="" id=""  disabled = {!editMode}/>
            </div>

            <div id="telefone_visitante_detalhamento" >
                <label >Telefone:</label>
                <TelefoneInput value = {telefone} onChange={settelefone}  disabled = {!editMode}/>

            </div>  

                
            <div id="dados_instituicao_detalhamento">
                <label >Município:</label>
                <input type="text" disabled = {!editMode}/>
            </div>

            <div id="observacoes">
                <label>Observações:</label>
                <input type="text" disabled = {!editMode}/>
            </div>

            <div id="botao_editar_detalhamento">
                <label htmlFor="editarCheck">modo editor</label>
                
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