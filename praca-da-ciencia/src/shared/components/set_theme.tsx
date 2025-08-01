import { Grid, IconButton } from "@mui/material"
import SunnyIcon from '@mui/icons-material/Sunny';
import { useThemeContext } from "../context/ThemeContext"


const SwitchThemeButton: React.FC = () =>
{

    const {toggleTheme, isDarkMode} = useThemeContext();

    return (
        <Grid
        container
        justifyContent="center"
        alignItems="center"
        >
            <IconButton
            onClick={ toggleTheme }
            >
                <SunnyIcon />
                
            </IconButton>

        </Grid>
    )
}


export default SwitchThemeButton;