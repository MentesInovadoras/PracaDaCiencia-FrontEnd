import { Box, Card, CardContent, Typography } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import type { PickerValidDate } from "@mui/x-date-pickers/models";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import diasDisponiveisService from "../../../service/DiasDisponiveisService";


interface Props
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
            <Card className="Cartao">
                <CardContent sx={{ minHeight: 450 }}>
                    <Typography
                        gutterBottom
                        variant="h4"
                        className="Titulo"
                        align="center"
                    >
                        Selecione o dia da sua visita
                    </Typography>

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

