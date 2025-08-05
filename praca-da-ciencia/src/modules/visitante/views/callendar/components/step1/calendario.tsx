import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import type { PickerValidDate } from "@mui/x-date-pickers/models";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import diasDisponiveisService from "../../../../service/DiasDisponiveisService";


export interface Props
{
    onSelectDate: (selectedDate?: Date)=>void;
}


const Calendario: React.FC<Props> = ({ onSelectDate }) =>
{
    const [diasIndisponivies, setDiasIndisponiveis] = useState<Date[]>([]);
    const doisMesesDepois = dayjs().add(2, 'month');

    useEffect(
        ()=>
        {
            // Este trecho é executado uma única vez durante a exibição do frontend
            diasDisponiveisService.listIndisponiveis().then(setDiasIndisponiveis)
        },
        []
    );

    const validateDate = (day: PickerValidDate): boolean =>
    {
        return diasIndisponivies.some(date => dayjs(date).isSame(day));
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Card>
                <CardHeader title="Selecione o dia da sua visita"/>
                <CardContent sx={{ minHeight: 450 }}>
                    <DateCalendar
                        disablePast
                        shouldDisableDate={validateDate}
                        onChange={(newValue)=>{ onSelectDate(newValue?.toDate()) }}
                        className="customCalendarHeader"
                        maxDate={doisMesesDepois}
                    />
                </CardContent>
            </Card>
        </Box>
    );
}


export default Calendario;

