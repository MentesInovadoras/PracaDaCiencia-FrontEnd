import { Grid } from "@mui/material";
import type React from "react";
import VisitaCard from "./visitacard";

import VisitaIndividual from "@/shared/assets/images/visita_individual.jpg"
import VisitaGuiada from "@/shared/assets/images/visita_guiada.jpg"
import VisitaInstitucional from "@/shared/assets/images/visita_institucional.jpg"

interface Props
{
    selectedVisitaIndividual: () => void;
    selectedVisitaColetiva: () => void;
    selectedVisitaInstituicao: () => void;
}


const TipoVisita: React.FC<Props> = ({ selectedVisitaIndividual, selectedVisitaColetiva, selectedVisitaInstituicao }) =>
{
    return (
        <Grid
        container
        spacing={5}
        justifyContent="center"
        alignItems="center"                
        >
            <VisitaCard
                src={VisitaIndividual}
                descricao="Sou uma pessoa física e irei visitar a Praça da Ciência sozinho."
                title="Visita Individual"
                maxWidith="25%"
                onSelect={selectedVisitaIndividual}
            />
            <VisitaCard
                src={VisitaGuiada}
                title="Visita Coletiva"
                descricao="Sou uma pessoa física e irei visitar a Praça da Ciência com a família e amigos (no máximo 10 pessoas)."
                maxWidith="25%"
                onSelect={selectedVisitaColetiva}
            />
            <VisitaCard
                src={VisitaInstitucional}
                descricao="Sou uma pessoa física represetando uma instituição de ensino e levarei meu grupo de pessoas (ex: professor e seus alunos)."
                title="Visita com Instituição"
                maxWidith="25%"
                onSelect={selectedVisitaInstituicao}
            />
        </Grid>
    )
}


export default TipoVisita;

