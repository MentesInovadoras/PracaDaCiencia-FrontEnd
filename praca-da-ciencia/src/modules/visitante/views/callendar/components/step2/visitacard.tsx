import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

import "@/shared/styles/CardActionAreaCentrilizer.css"


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
        <Card sx={{ border: '10px', cursor: "pointer", maxWidth:maxWidith, minWidth: 250 }} onClick={onSelect}>
            <CardHeader title={title} />
            <CardMedia component={"img"} sx={{maxWidth:'auto'}} image={src}/>
            <CardContent>
                <Typography>
                    { descricao }
                </Typography>
            </CardContent>
            <CardActionArea className="card-action-center">
                <Typography variant="button" color="primary">
                    Selecioar
                </Typography>
            </CardActionArea>
        </Card>
    )
}


export default VisitaCard;

