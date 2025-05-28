import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const DuvidasFrequentes: React.FC = () =>
{
    const duvidas: {titulo: string, conteudo: string}[] = [
        {titulo: "As visitas são gratuitas?", conteudo: "Sim! A Praça da Ciência entende que o conhecimento liberta e que este deve ser acessado de forma gratuita e com qualidade."},
        {titulo: "Quanto tempo dura uma visita?", conteudo: "O tempo das visitas pedente do roteiro escolhido por você. Mas, no geral, elas duram cerca de 1 hora."},
        {titulo: "Posso agendar visita guiada para qualquer dia da semana?", conteudo: "Sim, as visitas guiadas podem ser feita de quinta a domingo para qualquer tipo de grupo, contudo às terças e quartas-feiras a prioridade é para escolas."},
        {titulo: "Posso fazer a visita guiada sozinho?", conteudo: "Sim, você pode fazer a visita guiada sozinho e em grupos de 1 a 10 pessoas. No caso de escolas, pode ser feita em grupo de até 45 alunos, com número livre de professores acompanhantes."},
        {titulo: "Posso levar lanche?", conteudo: "Sim, você pode levar lanche para consumo próprio."},
        {titulo: "Tem bicicletário?", conteudo: "Sim, contamos com bicicletário. Pedimos que tragam cadeado para manter sua bicicleta mais segura, pois não há vigia."},
        {titulo: "É permitido entrar com trajes de banho?", conteudo: "Não! É proibido adentrar o espaço sem camisa e/ou com roupa de banho."},
        {titulo: "Posso levar meu animal de estimação?", conteudo: "Não! Não é permitida a entrada de animais."},
        {titulo: "O que mais é probido?", conteudo: "É proibido jogar bola, consumir bebida alcoólica, fumar, realizar festas de aniversário, andar de patins, patinete, skate e similares."}
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

