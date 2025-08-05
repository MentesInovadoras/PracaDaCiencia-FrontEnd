import type { ReactElement } from "react";
import FormularioIndividual from "./formulario_individual";
import FormularioColetivo from "./formulario_coletivo";
import Formularioinstituicao from "./formulario_instituicao";
import { Box } from "@mui/material";


export type FormularioEnum = "visita_individual" | "visita_coletiva" | "visita_institucional";


interface Props
{
    tipoFormulario: FormularioEnum;
}


const Formulario: React.FC<Props> = ({tipoFormulario}) =>
{
    const selecionarFormulario = (): ReactElement =>
    {
        switch(tipoFormulario)
        {
            case "visita_individual":
                return <FormularioIndividual />;
            case "visita_coletiva":
                return <FormularioColetivo />;
            case "visita_institucional":
                return <Formularioinstituicao />;
        }
    }

    return (
        <Box display={"flex"} justifyContent={"center"}>
            <Box maxWidth={800} width={"100%"}>
                { selecionarFormulario() }
            </Box>
        </Box>
    )
}


export default Formulario;

