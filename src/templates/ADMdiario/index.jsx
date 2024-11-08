import './ADMdiario.css'




export default function diario(){
    return(
<>
<main className='content'>
    <div className='data'>
        <button id="prevDay">&lt;</button>
        <h1 className='ADM_selected_day'>Dia atual</h1>
        <button id="nextDay">&gt;</button>
    </div>
    <div className='cardConteiner'>
        <div className="cardDiario">
            <h1 className="dataAgendamento">DD/MM/AAAA</h1>
            <h1 className="horaAgendamento">HH:MM</h1>
            <h1 className="responsavelAgendamentoTitle">Responsável: </h1>
            <h1 className="responsavelAgendamento">"Nome Sobrenome"</h1>
            <h1 className="visitanteAgendamentoTitle">Visitante/Instituição: </h1>
            <h1 className="visitanteAgendamento">"Nome Sobrenome"</h1>
        </div>
        <div className="card">
        <h1 className="dataAgendamento">DD/MM/AAAA</h1>
            <h1 className="horaAgendamento">HH:MM</h1>
            <h1 className="responsavelAgendamentoTitle">Responsável: </h1>
            <h1 className="responsavelAgendamento">"Nome Sobrenome"</h1>
            <h1 className="visitanteAgendamentoTitle">Visitante/Instituição: </h1>
            <h1 className="visitanteAgendamento">"Nome Sobrenome"</h1>
        </div>
        <div className="card">
        <h1 className="dataAgendamento">DD/MM/AAAA</h1>
            <h1 className="horaAgendamento">HH:MM</h1>
            <h1 className="responsavelAgendamentoTitle">Responsável: </h1>
            <h1 className="responsavelAgendamento">"Nome Sobrenome"</h1>
            <h1 className="visitanteAgendamentoTitle">Visitante/Instituição: </h1>
            <h1 className="visitanteAgendamento">"Nome Sobrenome"</h1>
        </div>
        <div className="card">
        <h1 className="dataAgendamento">DD/MM/AAAA</h1>
            <h1 className="horaAgendamento">HH:MM</h1>
            <h1 className="responsavelAgendamentoTitle">Responsável: </h1>
            <h1 className="responsavelAgendamento">"Nome Sobrenome"</h1>
            <h1 className="visitanteAgendamentoTitle">Visitante/Instituição: </h1>
            <h1 className="visitanteAgendamento">"Nome Sobrenome"</h1>
        </div>
        

    </div>
</main>
</>
);
}