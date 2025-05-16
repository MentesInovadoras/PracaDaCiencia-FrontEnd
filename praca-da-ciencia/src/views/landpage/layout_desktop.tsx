import { Container, Grid, Typography, Button, Box } from '@mui/material';
import Logo from '../../components/shared/ts/logo';
import BotaoAgendamento, { BotaoAgendamentoProps } from './botao_agendamento';

import imgIndividual from "../../assets/visitas/visita_individual.jpg"
import imgGuiado from "../../assets/visitas/visita_guiada.jpg"
import imgInstitucional from "../../assets/visitas/visita_institucional.jpg"


const LayoutDesktop: React.FC = () => 
{
    const AgendamentoIndividualProps: BotaoAgendamentoProps = {imgSrc: imgIndividual,  imgWdt: 200, buttonText: "Sozinho", routerPush: ""}
    const AgendamentoGuiadoProps: BotaoAgendamentoProps = {imgSrc: imgGuiado,  imgWdt: 200, buttonText: "Em Grupo com um Guia", routerPush: ""}
    const AgendamentoInstitucionalProps: BotaoAgendamentoProps = {imgSrc: imgInstitucional,  imgWdt: 200, buttonText: "Vou Levar Minha Instituição", routerPush: ""}

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
                <Typography variant="h4" align="center" sx={{ marginTop: '20px' }}>
                    Como você vai visitar a gente?
                </Typography>
                <Grid container direction={"row"} spacing={2} justifyContent="center">
                    <Grid size={4}>
                        <BotaoAgendamento {...AgendamentoIndividualProps} />
                    </Grid>
                    <Grid size={4}>
                        <BotaoAgendamento {...AgendamentoGuiadoProps} />
                    </Grid>
                    <Grid size={4}>
                        <BotaoAgendamento {...AgendamentoInstitucionalProps} />
                    </Grid>
                </Grid>

                </Grid>
            </Grid>
            </Container>
            </Box>

            {/* Sobre o Projeto */}
            <Container sx={{ padding: '50px 0' }}>
            <Typography variant="h4" align="center" gutterBottom>
            Sobre o Projeto
            </Typography>
            <Typography variant="h6" paragraph>
            A Praça da Ciência é um ponto turístico de prestígio na região metropolitana de Vitória, Espírito Santo. Crianças e adultos podem aprender sobre física, astronomia, biologia, história e muito mais. Nosso objetivo é criar uma forma simples e eficiente para que as pessoas possam agendar suas visitas e aproveitar ao máximo essa experiência de aprendizado.
            </Typography>
            <Typography variant="body1" paragraph>
            Este projeto foi desenvolvido por estudantes do Instituto Federal de Educação, Ciências e Tecnologia do Espírito Santo (Ifes), com o intuito de proporcionar uma melhor organização para o agendamento de visitas. A plataforma permitirá que os visitantes agendem seus horários, otimizando o fluxo de pessoas e tornando a experiência ainda mais enriquecedora.
            </Typography>
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

            {/* Footer */}
            <Box sx={{padding: '20px 0', marginTop: '50px' }}>
            <Container>
                <Typography variant="body2" align="center">
                    © 2025 Praça da Ciência - Todos os direitos reservados.
                </Typography>
            </Container>
            </Box>
            </Box>
        </>
    )
}


export default LayoutDesktop;