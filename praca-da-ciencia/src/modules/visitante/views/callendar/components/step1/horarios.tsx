import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";


export interface Props
{
    onSelectHorario: ()=>void;
    horarios: string[];
}


const HorariosDisponiveis: React.FC<Props> = ({ onSelectHorario, horarios }) =>
{
    return (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Card>
                <CardHeader title="Horários Disponíveis" />
                <CardContent sx={{ minHeight: 450 }}>
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

