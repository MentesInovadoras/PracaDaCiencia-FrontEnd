import { Container, Grid, Typography, Button, Box } from '@mui/material';
import Logo from '../../../components/shared/ts/imgHelppers/logo';
import CardAgendamento, { CardAgendamentoProps } from '../shared/card_agendamento';

import imgIndividual from "./../../../assets/visitas/visita_individual.jpg"
import imgGuiado from "./../../../assets/visitas/visita_guiada.jpg"
import imgInstitucional from "../../../assets/visitas/visita_institucional.jpg"
import SobreAPraca from '../shared/sobre_praca';
import CustomFooter from '../../../components/shared/ts/custom_footer';


const LayoutMobile: React.FC = () => 
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
                    Explore a Praça da Ciência
                </Typography>
                <Typography variant="h6" align="center" sx={{ marginTop: '20px' }}>
                    Um lugar onde você pode aprender e explorar a ciência de maneira divertida e educativa.
                </Typography>
                
                <hr />
                <Typography variant="h3" align="center" sx={{ marginTop: '20px' }}>
                    Como você vai visitar a gente?
                </Typography>
                <Grid container direction={"column"} spacing={2} justifyContent="center">
                    <Grid size={12}>
                        <CardAgendamento {...AgendamentoIndividualProps} />
                    </Grid>
                    <Grid size={12}>
                        <CardAgendamento {...AgendamentoGuiadoProps} />
                    </Grid>
                    <Grid size={12}>
                        <CardAgendamento {...AgendamentoInstitucionalProps} />
                    </Grid>
                </Grid>

                </Grid>
            </Grid>
            </Container>
            </Box>

            {/* Sobre o Projeto */}
            <Container sx={{ padding: '50px 0' }}>
                <SobreAPraca />
            </Container>

            {/* Como Funciona */}
            <Box sx={{ backgroundColor: 'primary.main', padding: '40px 0' }}>
            <Container>
            <Grid container spacing={4} justifyContent="center">
                <Grid sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: 'white', marginTop: '10px' }}>
                    Agendamento Fácil
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                    Marque sua visita diretamente pelo nosso sistema. Escolha o dia e horário mais conveniente para você.
                </Typography>
                </Grid>
                <Grid sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: 'white', marginTop: '10px' }}>
                    Localização
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                    A Praça da Ciência está localizada no coração de Vitória, com fácil acesso e infraestrutura para todos.
                </Typography>
                </Grid>
            </Grid>
            </Container>
            </Box>
            </Box>

            <Box sx={{padding: '20px 0', marginTop: '50px' }}>
                <CustomFooter />
            </Box>
        </>
    )
}


export default LayoutMobile;