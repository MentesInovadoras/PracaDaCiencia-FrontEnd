import React, { useState } from 'react';

export default function HorariosDisponiveis() {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const times: string[] = [
        "08:00",
        "09:30",
        "13:30",
        "15:00",
    ];

    const handleTimeClick = (time: string) => {
        setSelectedTime(time);
    };

    // Organizar os horários em pares para colunas
    const rows: string[][] = [];
    for (let i = 0; i < times.length; i += 2) {
        rows.push(times.slice(i, i + 2));
    }

    return (
        <table id="horarios_disponiveis">
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((time, index) => (
                            <td
                                id='td_times'
                                key={index}
                                className={`horas_disponiveis ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => handleTimeClick(time)}
                                style={{ cursor: "pointer" }}
                            >
                                {time}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
