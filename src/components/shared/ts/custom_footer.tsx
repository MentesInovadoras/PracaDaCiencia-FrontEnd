import { Container, Grid, Typography } from "@mui/material";

import PMVLogo from "./imgHelppers/pmvLogo";
import LogoText from "./imgHelppers/logoText";


const CustomFooter: React.FC = () => {
    return(
        <>
            <Grid
            container
            direction="row"
            spacing={10}
            alignItems="center"
            justifyContent="center"
            >
                <PMVLogo sizeInPixels={150}/>
                <Typography variant="body2" align="center">
                    PREFEITURA MUNICIPAL DE VITÓRIA <br />
                    Avenida Marechal Mascarenhas de Moraes, 1.927 <br />
                    Bento Ferreira, Vitória, ES - CEP: 29.050-945 <br />
                    Telefone: (27) 3382-6000 - Protocolo Geral <br />
                    (Atendimento ao público de 08 às 17 horas)
                </Typography>
                <LogoText sizeInPixels={150}/>

                <Typography variant="body2" align="center">
                    PRAÇA DA CIÊNCIA <br />
                    Avenida Américo Buaiz, S/N <br />
                    Enseada do Suá, Vitória, ES - CEP: 29.050-420 <br />
                    Telefone: (27) 3345-0882 <br />
                    ATENDIMENTO AO PÚBLICO <br />
                    Terça a sexta-feira: 8h às 12h e 13h às 17h <br />
                    Sábado, domingo e feriados: 8h às 12h <br />
                    Segunda-feira: fechado para limpeza e manutenção, <br /> mesmo que seja feriado.
                </Typography>
            </Grid>

            <Grid margin={5}>
                <Typography variant="body2" align="center">
                    © 2025 Praça da Ciência - Todos os direitos reservados.
                </Typography>
            </Grid>
        </>
    )
}


export default CustomFooter;

