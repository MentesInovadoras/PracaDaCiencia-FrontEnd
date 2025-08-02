import { Box, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import diasDisponiveisService from "../../service/DiasDisponiveisService";

import './style.css'

import Calendario from "./components/calendario";
import HorariosDisponiveis from "./components/horarios";


interface StepData
{
    canBeActivated: boolean;
    label: string;
}


const Horarios: React.FC = () =>
{
    const [horarios, setHorarios] = useState<string[]>([]);
    const [stepsList, _] = useState<StepData[]>([
        {canBeActivated: true, label: 'Selecione o Horário'},
        {canBeActivated: false, label: 'Forneça Informações Pessoais'},
        {canBeActivated: false, label: 'Aguarde o Dia Chegar'}
    ]);
    const [activeStep, setActiveStep] = useState(0);

    const setStep = (index: number) =>
    {
        if(stepsList.at(index)?.canBeActivated)
            { setActiveStep(index); }
    } 

    const getHorarios = async (day?: Date) =>
    {
        if(day == undefined)
            { return; }

        diasDisponiveisService.
        getHorariosDisponiveis(day).
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
            
            <Calendario onSelectDate={getHorarios} />

            <HorariosDisponiveis onSelectHorario={handleNext} horarios={horarios} />
        </Grid>
    );
}


export default Horarios;

