import { Container, Grid, Typography, Button, Box } from '@mui/material';
import Logo from '../../../components/shared/ts/imgHelppers/logo';
import CardAgendamento, { CardAgendamentoProps } from '../shared/card_agendamento';

import imgIndividual from "./../../../assets/visitas/visita_individual.jpg"
import imgGuiado from "./../../../assets/visitas/visita_guiada.jpg"
import imgInstitucional from "../../../assets/visitas/visita_institucional.jpg"
import SobreAPraca from '../shared/sobre_praca';
import CustomFooter from '../../../components/shared/ts/custom_footer';
import Galeria from '../shared/galeria';
import DuvidasFrequentes from '../shared/duvidas_frequentes';


const LayoutDesktop: React.FC = () => 
{
    const AgendamentoIndividualProps: CardAgendamentoProps = {imgSrc: imgIndividual,  imgWdt: 200, buttonText: "Sozinho", routerPush: ""}
    const AgendamentoGuiadoProps: CardAgendamentoProps = {imgSrc: imgGuiado,  imgWdt: 200, buttonText: "Em Grupo com um Guia", routerPush: ""}
    const AgendamentoInstitucionalProps: CardAgendamentoProps = {imgSrc: imgInstitucional,  imgWdt: 200, buttonText: "Vou Levar Minha Instituição", routerPush: ""}

    return (
        <>
            <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
            {/* Banner Section */}
            <Box sx={{ 
            backgroundImage: 'url("/images/praca-da-ciencia.jpg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            padding: '60px 0', 
            }}>
            <Container>
            <Grid container justifyContent="center" spacing={2}>
                <Grid>
                    <Logo sizeInPixels={100} />
                <Typography variant="h3" align="center">
                    Conheça a Praça da Ciência
                </Typography>
                <Typography variant="h6" align="center" sx={{ marginTop: '20px' }}>
                    Um lugar onde você pode aprender e explorar a ciência de maneira divertida e educativa.
                </Typography>
                
                <hr />
                <Typography color="primary" variant="h4" align="center" sx={{ marginTop: '20px' }}>
                    Como você vai visitar a gente?
                </Typography>
                <Grid container direction={"row"} spacing={2} justifyContent="center">
                    <Grid size={4}>
                        <CardAgendamento {...AgendamentoIndividualProps} />
                    </Grid>
                    <Grid size={4}>
                        <CardAgendamento {...AgendamentoGuiadoProps} />
                    </Grid>
                    <Grid size={4}>
                        <CardAgendamento {...AgendamentoInstitucionalProps} />
                    </Grid>
                </Grid>

                </Grid>
            </Grid>
            </Container>
            </Box>

            <Container sx={{ padding: '50px 0' }}>
                <SobreAPraca />
            </Container>

            <Container sx={{ padding: '50px 0' }}>
                <Galeria />
            </Container>     

            <Container sx={{ padding: '50px 0' }}>
                <DuvidasFrequentes />          
            </Container>

            <Box sx={{padding: '20px 0', marginTop: '50px' }}>
                <CustomFooter />
            </Box>
            </Box>
        </>
    )
}


export default LayoutDesktop;