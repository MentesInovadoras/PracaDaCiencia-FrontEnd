import './calendario.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Calendario() {
  const navigate = useNavigate();
  const location = useLocation();

  const tipo = location.state?.tipo || 'individual';

  function handleClick() {
    navigate(`/agendamento/${tipo}`);
  }
  return (
  <>  
  <div className="weekcalendar">
      <h1 id="h1_data">Selecionar DATA e HORA</h1>
      <div id="cards">
        <div id="card_calendario">
        </div>
        <div id="card_horarios">
        </div>
      </div>
      <button type="button" id="botao_continuar_calendario" onClick={handleClick}>
        AGENDAR
      </button>
    </div>
  </>
  );
}
