import { Box, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { useState, type ReactElement } from "react";
import diasDisponiveisService from "../../service/DiasDisponiveisService";

import './style.css'

import Calendario from "./components/step1/calendario";
import HorariosDisponiveis from "./components/step1/horarios";
import TipoVisita from "./components/step2/tipovisita";
import type { FormularioEnum } from "./components/step3/formulario";
import Formulario from "./components/step3/formulario";


interface StepData
{
    canBeActivated: boolean;
    label: string;
}


const Horarios: React.FC = () =>
{
    const [horarios, setHorarios] = useState<string[]>([]);
    const [activeStep, setActiveStep] = useState(0);

    const [stepsList, _] = useState<StepData[]>([
        {canBeActivated: true, label: 'Selecione o Horário'},
        {canBeActivated: false, label: 'Escolha o tipo de visita'},
        {canBeActivated: false, label: 'Forneça Informações Pessoais'},
        {canBeActivated: false, label: 'Aguarde o Dia Chegar'}
    ]);

    const [tipoFormulario, setTipoFormulario] = useState<FormularioEnum>("visita_individual");

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

    const steps: ReactElement[] = [
            (
                <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid><Calendario onSelectDate={getHorarios}/></Grid>
                    <Grid><HorariosDisponiveis onSelectHorario={handleNext} horarios={horarios}/></Grid>
                </Grid>
            ),
            <TipoVisita
                selectedVisitaIndividual={()=>{setTipoFormulario("visita_individual"); handleNext();}}
                selectedVisitaColetiva={()=>{setTipoFormulario("visita_coletiva"); handleNext();}}
                selectedVisitaInstituicao={()=>{setTipoFormulario("visita_institucional"); handleNext();}}
            />,
            (
                <Formulario tipoFormulario={tipoFormulario} />
            ),
            (
                <>
                    <h1>Parte 4</h1>
                </>
            )
        ];


    return (
        <>
            <Box sx={{ width: '100%', margin: '10px' }}>
                {/* Stepper de navegação */}
                <Stepper activeStep={activeStep} alternativeLabel>
                    {stepsList.map((step, index) => (
                    <Step key={index}>
                        <StepLabel onClick={()=>setStep(index)}>{step.label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
            
                { steps[activeStep] }
        </>
    );
}


export default Horarios;

