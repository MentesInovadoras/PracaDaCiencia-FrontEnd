import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";


interface Props
{
    onSelectHorario: ()=>void;
    horarios: string[];
}


const HorariosDisponiveis: React.FC<Props> = ({ onSelectHorario, horarios }) =>
{
    return (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Card className="Cartao">
                <CardContent sx={{ minHeight: 450 }}>
                    <Typography
                        gutterBottom
                        className="Titulo"
                        variant="h4"
                        align="center"
                    >
                        Horários Disponíveis
                    </Typography>

                    <Grid container spacing={2} justifyContent="center">
                        {
                            horarios.map(
                                (horario, index) =>
                                (
                                    <Grid size={12} key={index} textAlign={"center"}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="Botao"
                                            sx={{ color: 'whitesmoke' }}
                                            onClick={onSelectHorario}
                                            size={'large'}
                                        >
                                            {horario}
                                        </Button>
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}


export default HorariosDisponiveis;

