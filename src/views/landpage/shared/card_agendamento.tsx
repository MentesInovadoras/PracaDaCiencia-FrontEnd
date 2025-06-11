import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export interface CardAgendamentoProps
{
    imgSrc: string;
    imgWdt: number;
    buttonText: string;
    routerPush: string;
}


const CardAgendamento: React.FC<CardAgendamentoProps> = ({imgSrc, imgWdt, buttonText, routerPush}) =>{
    const navigate = useNavigate();

    return (
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
                            onClick={() => navigate('/calendarioVisitante')}
                            fullWidth
                            sx={{
                                backgroundColor: 'secondary.main', 
                                color: 'black',                  
                                textTransform: 'none',           
                                '&:hover': { backgroundColor: 'secondary.dark' }  
                            }}
                        >
                            { buttonText }
                        </Button>
                </CardActions>
            </Card>
    );
};
export default CardAgendamento;