import { Grid } from "@mui/material";
import type React from "react";
import VisitaCard from "./visitacard";


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
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmeusitejuridico.editorajuspodivm.com.br%2Fs.meusitejuridico%2F2020%2F01%2F620502c2-shutterstock-132.jpg&f=1&nofb=1&ipt=e8b492c93fa52b0e38cc1c2e0055bfd82f3b0b8df7f22db5300807de19ceb3cc"
                descricao="Sou uma pessoa física e irei visitar a Praça da Ciência sozinho."
                title="Visita Individual"
                maxWidith="25%"
                onSelect={selectedVisitaIndividual}
            />
            <VisitaCard
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fextra.globo.com%2Fincoming%2F24313231-b2c-0a8%2Fw448%2Fmeme-3.png&f=1&nofb=1&ipt=d0d225fd30ceb8264cb6ca3c646f22204e8618ef82410a049577fc31ac01d604"
                title="Visita Coletiva"
                descricao="Sou uma pessoa física e irei visitar a Praça da Ciência com a família e amigos (no máximo 10 pessoas)."
                maxWidith="25%"
                onSelect={selectedVisitaColetiva}
            />
            <VisitaCard
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.memedroid.com%2Fimages%2FUPLOADED27%2F576bf882c7598.jpeg&f=1&nofb=1&ipt=c5a0cf37bf7a6dc771ccff911868f6327662b422f88889536ca0c35c560d90fd"
                descricao="Sou uma pessoa física represetando uma instituição de ensino e levarei meu grupo de pessoas (ex: professor e seus alunos)."
                title="Visita com Instituição"
                maxWidith="25%"
                onSelect={selectedVisitaInstituicao}
            />
        </Grid>
    )
}


export default TipoVisita;

