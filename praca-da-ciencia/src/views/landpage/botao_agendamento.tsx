import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export interface BotaoAgendamentoProps
{
    imgSrc: string;
    imgWdt: number;
    buttonText: string;
    routerPush: string;
}


const BotaoAgendamento: React.FC<BotaoAgendamentoProps> = ({imgSrc, imgWdt, buttonText, routerPush}) =>
{
    return (
        <>
            <Card sx={{ boxShadow: 3, borderRadius: 3, transition: '0.3s', '&:hover': { boxShadow: 6 }, backgroundColor: "secondary.main"}}>
                <CardMedia
                    component="img"
                    width={imgWdt}
                    image={imgSrc}
                    alt="imagem"
                />

                <CardActions>
                        {/* Aqui está o botão */}
                        <Button
                            size="large"
                            color="secondary"
                            onClick={() => alert("Botão clicado!")}
                            fullWidth

                            sx={{
                              backgroundColor: 'secondary.main', // Cor de fundo do botão
                              color: 'black',                  // Cor do texto
                              textTransform: 'none',           // Evitar que o texto fique em maiúsculas
                              '&:hover': { backgroundColor: 'secondary.dark' }  // Cor de fundo ao passar o mouse
                            }}
                            >
                            { buttonText }
                        </Button>
                </CardActions>
            </Card>
        </>
    )
}


export default BotaoAgendamento;