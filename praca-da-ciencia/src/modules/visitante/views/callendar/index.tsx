import { Box, Button, Card, CardContent, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import type { PickerValidDate } from "@mui/x-date-pickers/models";
import { useEffect, useState } from "react";
import diasDisponiveisService from "../../service/DiasDisponiveisService";
import dayjs from "dayjs";

import './style.css'


interface StepData
{
    canBeActivated: boolean;
    label: string;
}



const Horarios: React.FC = () =>
{
    const [diasIndisponivies, setDiasIndisponiveis] = useState<Date[]>([]);
    const [horarios, setHorarios] = useState<string[]>([]);
    const [stepsList, _] = useState<StepData[]>([
        {canBeActivated: true, label: 'Selecione o Horário'},
        {canBeActivated: false, label: 'Forneça Informações Pessoais'},
        {canBeActivated: false, label: 'Aguarde o Dia Chegar'}
    ]);
    const [activeStep, setActiveStep] = useState(0);

    const doisMesesDepois = dayjs().add(2, 'month');

    useEffect(
        ()=>
        {
            // Este trecho é executado uma única vez durante a exibição do frontend
            diasDisponiveisService.listIndisponiveis().then(setDiasIndisponiveis)
        },
        []
    );

    const setStep = (index: number) =>
    {
        if(stepsList.at(index)?.canBeActivated)
            { setActiveStep(index); }
    } 

    const validateDate = (day: PickerValidDate): boolean =>
    {
        return diasIndisponivies.some(date => dayjs(date).isSame(day));
    }

    const getHorarios = async (day: PickerValidDate | null) =>
    {
        if(day == null)
            { return; }

        diasDisponiveisService.
        getHorariosDisponiveis(day.toDate()).
        then(setHorarios);
    }

    const handleNext = () =>
    {
        const next = stepsList.at(activeStep+1);
        if(next != undefined)
        {
            next.canBeActivated = true;
            setActiveStep(last => last+1);
        }
    }

    return (
        <Grid container spacing={5} sx={{ margin: '10px' }} justifyContent="center" alignItems="center">
            <Box sx={{ width: '100%' }}>
            {/* Stepper de navegação */}
            <Stepper activeStep={activeStep} alternativeLabel>
                {stepsList.map((step, index) => (
                <Step key={index}>
                    <StepLabel onClick={()=>setStep(index)}>{step.label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            </Box>
            {/* Card para o Calendário */}
            <Box sx={{ width: '100%', maxWidth: 600 }}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                    <CardContent sx={{minHeight: 450}}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }} align="center">
                            Selecione o dia da sua visita
                        </Typography>
                            <DateCalendar
                                disablePast
                                shouldDisableDate={validateDate}
                                onChange={getHorarios}
                                className="customCalendarHeader"
                                maxDate={doisMesesDepois}
                            />
                    </CardContent>
                </Card>
            </Box>

            {/* Card para os Horários */}
            <Box sx={{ width: '100%', maxWidth: 600 }}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                    <CardContent sx={{minHeight: 450}}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }} align="center">
                            Horários Disponíveis
                        </Typography>
                        <Grid container spacing={2} justifyContent="center">
                            {horarios.map((horario, index) => (
                                <Grid key={index}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                                padding: '10px 20px',
                                                borderRadius: 2,
                                                '&:hover':
                                                {
                                                    backgroundColor: 'primary.dark',
                                                    boxShadow: 3,
                                                },
                                                color: 'whitesmoke'
                                            }}
                                        onClick={handleNext}
                                    >
                                        {horario}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    );
}


export default Horarios;

