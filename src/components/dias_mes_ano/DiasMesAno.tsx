import React, { useState } from 'react';
import BotaoProximo from '../botoes/BotaoProximo';
import BotaoVoltar from '../botoes/BotaoVoltar';
import CabecalhoMes from './CabecalhoMes';

interface DayObject {
  date: Date;
  dayOfWeek: string;
  dayOfMonth: number;
  isPast: boolean;
  isMonday: boolean;
}

interface DiasMesAnoProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function DiasMesAno({ selectedDate, onSelectDate }: DiasMesAnoProps) {
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const currentDate = new Date();

  const [startDate, setStartDate] = useState<Date>(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1));

  function getDayOfWeek(date: Date): string {
    if (!(date instanceof Date)) {
      throw new Error('O argumento deve ser um objeto Date.');
    }
    const day = date.getDay();
    return daysOfWeek[day];
  }

  const year = startDate.getFullYear();
  const month = startDate.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days: DayObject[] = Array.from({ length: totalDays }, (_, i) => {
    const nextDate = new Date(year, month, i + 1);
    return {
      date: nextDate,
      dayOfWeek: getDayOfWeek(nextDate),
      dayOfMonth: nextDate.getDate(),
      isPast: nextDate < new Date(currentDate.setHours(0, 0, 0, 0)),
      isMonday: nextDate.getDay() === 1
    };
  });

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const paddedDays: (DayObject | null)[] = [...Array(firstDayOfMonth).fill(null), ...days];

  const weeks: (DayObject | null)[][] = [];
  for (let i = 0; i < paddedDays.length; i += 7) {
    weeks.push(paddedDays.slice(i, i + 7));
  }

  const handleDayClick = (dayObj: DayObject | null) => {
    if (!dayObj || dayObj.isPast || dayObj.isMonday) return;
    onSelectDate(dayObj.date);
  };

  const handleNextClick = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setMonth(startDate.getMonth() + 1);
    setStartDate(newStartDate);
  };

  const handlePrevClick = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setMonth(startDate.getMonth() - 1);
    setStartDate(newStartDate);
  };

  return (
    <div>
      <div className="header_mes_ano">
        <CabecalhoMes date={startDate} />
      </div>
      <div className="header_botoes">
        <BotaoVoltar onClick={handlePrevClick} disabled={false} />
        <BotaoProximo onClick={handleNextClick} disabled={false} />
      </div>
      <table style={{ margin: '30px auto' }}>
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index} className="weekday">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((dayObj, index) => (
                <td
                  key={index}
                  id="td_days"
                  className={`${dayObj?.isPast || dayObj?.isMonday ? 'dia_indisponivel' : ''} ${
                    selectedDate && dayObj && selectedDate.getTime() === dayObj.date.getTime() ? 'selected_day' : ''
                  }`}
                  onClick={() => handleDayClick(dayObj)}
                  style={{ cursor: dayObj?.isPast || dayObj?.isMonday ? 'not-allowed' : 'pointer' }}
                >
                  {dayObj ? dayObj.dayOfMonth : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
