import { Grid } from "@mui/material"
import full from "../../../assets/logo/full.png"

interface LogoProps
{
    sizeInPixels?: number;
}


const Logo: React.FC<LogoProps> = ({ sizeInPixels = 300}) =>
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


export default Logo;