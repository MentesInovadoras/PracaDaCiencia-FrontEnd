import React, { useState } from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import HeaderMonth from './HeaderMonth';

export default function NumberTable() {
    const daysOfWeek = ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."];
    const currentDate = new Date();

    // Função para obter o domingo da semana atual
    const getStartOfWeek = (date) => {
        const startOfWeek = new Date(date);
        const day = startOfWeek.getDay();
        const diff = startOfWeek.getDate() - day;
        startOfWeek.setDate(diff);
        return startOfWeek;
    };

    const [startDate, setStartDate] = useState(getStartOfWeek(currentDate));
    const [nextClickCount, setNextClickCount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);

    function getDayOfWeek(date) {
        if (!(date instanceof Date)) {
            throw new Error("O argumento deve ser um objeto Date.");
        }
        const day = date.getDay();
        return daysOfWeek[day];
    }

    const days = Array.from({ length: 7 }, (_, i) => {
        const nextDate = new Date(startDate);
        nextDate.setDate(startDate.getDate() + i);
        return {
            date: nextDate,
            dayOfWeek: getDayOfWeek(nextDate),
            dayOfMonth: nextDate.getDate(),
            isPast: nextDate < currentDate - 1,
            isMonday: nextDate.getDay() === 1 // Verifica se é segunda-feira
        };
    });

    const handleNextClick = () => {
        if (nextClickCount < 7) {
            const newStartDate = new Date(startDate);
            newStartDate.setDate(startDate.getDate() + 7);
            setStartDate(newStartDate);
            setNextClickCount(nextClickCount + 1);
        }
    };

    const handlePrevClick = () => {
        const newStartDate = new Date(startDate);
        newStartDate.setDate(startDate.getDate() - 7);
        setStartDate(newStartDate);
        setNextClickCount(nextClickCount - 1);
    };

    const handleDayClick = (date) => {
        if (!date.isPast && !date.isMonday) {
            setSelectedDate(date.date);
        }
        console.log(date.date)
    };

    const isPrevDisabled = startDate <= getStartOfWeek(currentDate);
    const isNextDisabled = nextClickCount >= 7;

    return (
        <div>
            <HeaderMonth date={startDate} />
            <table>
                <tbody>
                    <tr>
                        {days.map((d, index) => (
                            <th key={index}>{d.dayOfWeek}</th>
                        ))}
                    </tr>
                    <tr>
                        {days.map((d, index) => (
                            <td 
                                key={index} 
                                className={`${d.isPast || d.isMonday ? "disabled_day" : ""} ${selectedDate && selectedDate.getTime() === d.date.getTime() ? "selected_day" : ""}`}
                                onClick={() => handleDayClick(d)}
                                style={{ cursor: d.isPast || d.isMonday ? 'not-allowed' : 'pointer' }}
                            >
                                {d.dayOfMonth}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <PrevButton onClick={handlePrevClick} disabled={isPrevDisabled} />
            <NextButton onClick={handleNextClick} disabled={isNextDisabled} />
        </div>
    );
}
