import React, {useState }from "react";
import './detalhamento_agendamento.css';


function formatCpf(value: any){
    // Remove tudo que não é dígito
    value = value.replace(/\D/g, '');
    // Limita a 11 dígitos
    value = value.substring(0, 11);

    if (value.length === 11){
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    return value;   
};

function CPFInput(attr: {value: any, onChange: any, disabled: boolean}){
    const handleChange = (e: any) => {
        const formattedValue = formatCpf(e.target.value);
        // @ts-ignore
        onchange(formattedValue);
    };

    return(
        <input
            type="text"
            id="CPF"
            maxLength={14}
            placeholder="000.000.000-00"
            // @ts-ignore
            value={value}
            onChange={handleChange}
            // @ts-ignore
            disabled={disabled}


        />
    )

}

function formatTelefone(value: any){
    value = value.replace(/\D/g, '');

    value = value.substring(0, 11);

    if(value.length === 11){
        return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    return value;
}
function TelefoneInput(attr: {value: any, onChange: any, disabled: boolean}){
    const handleChange = (e: any) => {
        const formattedValue = formatTelefone(e.target.value);
        // @ts-ignore
        onchange(formattedValue);

    }
    return(
        <input
            type="text"
            id="telefone"
            maxLength={15}
            placeholder="(00) 00000-0000"
            // @ts-ignore
            value={value}
            onChange={handleChange}
            // @ts-ignore
            disabled={disabled}
        />

    )
}




export default function DetalhamentoAgendamento (){
    const [cpf, setcpf] = useState("");
    const [telefone, settelefone] = useState("");
    const [editMode, setEditMode] = useState(false);

    const handleCheckboxChange = (e: any) => {
    setEditMode(e.target.checked); // Atualiza o estado com true/false
  };


    return(
        <>
        <div id="detalhamento_agendamento">
            <div id=" data_hora_detalhamento_visitas">

                <label id="label_data_visitante_detalhamento">Data:</label>
                <input type="date" id="input_data_visitante_detalhamento" disabled = {!editMode}/>
            
                <label id="label_hora_visitante_detalhamento" >Hora:</label>
                <input type="time" id="input_data_visitante_detalhamento"  disabled = {!editMode}/>

            </div>

            <div id="nome_responsavel_detalhamento">
                <label id="label_nome_responsavel_detalhamento">Nome Completo do Visitante Responsável:</label>
                <input type="text" disabled = {!editMode}  id="input_nome_responsavel_detalhamento"/>
            </div>
            
            <div id="cpf_visitante_detalhamento">
                <label id="label_cpf_visitante_responsavel_detalhamento">CPF do Visitante Responsável:</label>
                <CPFInput  value = {cpf} onChange={setcpf}  disabled = {!editMode} />
               

            </div>

            <div id="email_visitante_detalhamento">
                <label id="label_email_visitante_responsavel_detalhamento" >E-mail:</label>
                <input id="input_email_visitante_responsavel_detalhamento" type="email"   disabled = {!editMode}/>
            </div>

            <div id="telefone_visitante_detalhamento" >
                <label id="label_telefone_visitante_responsavel_detalhamento" >Telefone:</label>
                <TelefoneInput value = {telefone} onChange={settelefone}  disabled = {!editMode}/>

            </div>  

                
            <div id="dados_instituicao_detalhamento">
                <label id="label_dados_instituicao_detalhamento" >Município:</label>
                <input id="input_dados_instituicao_detalhamento" type="text" disabled = {!editMode}/>
            </div>

            <div id="observacoes">
                <label id="label_observacao_instituicao_detalhamento">Observações:</label>
                <textarea name="" id="input_dados_observacao_instituicao_detalhamento" disabled = {!editMode}></textarea>
               
            </div>

            <div id="botao_editar_detalhamento">
                <label htmlFor="editarCheck" id="label_botao_editar_detalhamento">modo editor: </label>
                
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