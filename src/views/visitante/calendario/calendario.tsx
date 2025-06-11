import './calendario.css';
import { useNavigate, useLocation } from 'react-router-dom';
// import Formulario from './formulario';
import DiasMesAno from '../../../components/dias_mes_ano/DiasMesAno';
import HorariosDisponiveis from '../../../components/dias_mes_ano/HorariosDisponiveis';

export default function Calendario() {
  const navigate = useNavigate();
  const location = useLocation();

  const tipo = location.state?.tipo || 'individual';

  function handleClick() {
    console.log("Redirecionando para /formulario com tipo:", tipo);
    navigate('/formulario', { state: { tipo } });
  }

  return (
  <>  
  <div className="calendario">
      <h1 id="h1_data">Selecionar DATA e HORA</h1>
      <div id="cards">
        <div id="card_calendario">
          <div id="semana">
            <td/>
            <DiasMesAno/>
          </div>
        </div>
        <div id="card_horarios">
          <div id="horarios_disponiveis">
            <HorariosDisponiveis/>
          </div>
        </div>
      </div>
      <button type="button" id="botao_continuar_calendario" onClick={handleClick}>
        AGENDAR
      </button>
    </div>
  </>
  );
}

