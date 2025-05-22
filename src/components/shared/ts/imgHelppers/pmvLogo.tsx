import { Grid } from "@mui/material";

import full from "./../../../../assets/logo/Logo_PMV_nova.png"


interface PMVLogoProps
{
    sizeInPixels?: number;
}

const PMVLogo: React.FC<PMVLogoProps> = ({ sizeInPixels = 300}) =>
{
    return (
        <>
        <Grid
        container
        justifyContent="center"
        alignItems="center"
        >
            <a href="https://www.vitoria.es.gov.br/" target="_blank">
                <img
                src={full}
                width={`${sizeInPixels}px`}
                alt="LogoPMV"
                
                />
            </a>
        </Grid>        
        </>
    )
}


export default PMVLogo;

