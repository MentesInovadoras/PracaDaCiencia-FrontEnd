import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DiasMesAno from '../../../components/dias_mes_ano/DiasMesAno';
import HorariosDisponiveis from '../../../components/dias_mes_ano/HorariosDisponiveis';
import './calendario.css';

export default function Calendario() {
  const navigate = useNavigate();
  const location = useLocation();
  const tipo = location.state?.tipo || 'individual';

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  function handleClick() {
    if (!selectedDate || !selectedTime) {
      alert('Por favor, selecione data e horário para continuar.');
      return;
    }
    navigate('/formulario', { state: { tipo, selectedDate, selectedTime } });
  }
  console.log('DiasMesAno:', DiasMesAno);
  console.log('HorariosDisponiveis:', HorariosDisponiveis);
  return (
    <div className="calendario">
      <h1 id="h1_data">Selecionar DATA e HORA</h1>
      <div id="cards">
        <div id="card_calendario">
          <div id="semana">
            <table>
              <tbody>
                <DiasMesAno selectedDate={selectedDate} onSelectDate={setSelectedDate} />
              </tbody>
            </table>
          </div>
        </div>
        <div id="card_horarios">
          <div id="horarios_disponiveis">
            <HorariosDisponiveis
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
              selectedDate={selectedDate}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        id="botao_continuar_calendario"
        onClick={handleClick}
      >
        AGENDAR
      </button>
    </div>
  );
}
