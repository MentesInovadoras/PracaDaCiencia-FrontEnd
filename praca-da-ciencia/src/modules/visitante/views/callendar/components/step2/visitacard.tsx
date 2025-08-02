import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";


interface Props
{
    title: string;
    descricao: string;
    src: string;
    maxWidith: string;
    onSelect: () => void;
}


const VisitaCard: React.FC<Props> = ({title, descricao, src, maxWidith, onSelect}) =>
{
    return (
        <Card sx={{ border: '10px', cursor: "pointer", maxWidth:maxWidith }} onClick={onSelect}>
            <CardHeader title={title} color="primary" />
            <CardMedia component={"img"} sx={{maxWidth:'auto'}} image={src}/>
            <CardContent>
                <Typography>
                    { descricao }
                </Typography>
            </CardContent>
            <CardActionArea>
                <Button>
                    Selecioar
                </Button>
            </CardActionArea>
        </Card>
    )
}


export default VisitaCard;

