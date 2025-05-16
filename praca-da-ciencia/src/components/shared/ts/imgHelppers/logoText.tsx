import { Grid } from "@mui/material"
import full from "./../../../../assets/logo/logo_original.png"

interface LogoTextProps
{
    sizeInPixels?: number;
}


const LogoText: React.FC<LogoTextProps> = ({ sizeInPixels = 300}) =>
{
    return (
        <Grid
        container
        justifyContent="center"
        alignItems="center"
        >
            <img
            src={full}
            width={`${sizeInPixels}px`}
            alt="Logo"
            />
        </Grid>
    )
}


export default LogoText;