import React, { useState } from 'react';

export default function AvailableTimes() {
    const [selectedTime, setSelectedTime] = useState(null);

    const times = [
        "08:00",
        "09:30",
        "13:30",
        "15:00",
    ];

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    // Organizar os horários em pares para colunas
    const rows = [];
    for (let i = 0; i < times.length; i += 2) {
        rows.push(times.slice(i, i + 2));
    }

    return (
        <table id="available_times">
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((time, index) => (
                            <td
                                key={index}
                                className={`available_hours ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => handleTimeClick(time)}
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
