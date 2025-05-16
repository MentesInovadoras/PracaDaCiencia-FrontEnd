import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const DuvidasFrequentes: React.FC = () =>
{
    const duvidas: {titulo: string, conteudo: string}[] = [
        {titulo: "As Visitas são Gratuiras?", conteudo: "Sim! A Praça da Ciência entende que o conhecimento liberta e que este deve ser acessado de forma gratuita e com qualidade."},
        {titulo: "Quanto Tempo Dura uma Visita?", conteudo: "O tempo das visitas pedente do roteiro escolhido por você. Mas, no geral, elas duram cerca de 1 hora."}
    ]
    return (
        <>
            <Typography variant="h4" align="center" color="primary" gutterBottom>
                Dúvidas Frequentes
            </Typography>

            {
                duvidas.map(duvida => (
                    <Card sx={{ margin: "20px" }}>
                        <CardHeader
                            title={duvida.titulo}
                        />

                        <CardContent>
                            <Typography variant="body1">
                                { duvida.conteudo }
                            </Typography>

                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}


export default DuvidasFrequentes;

