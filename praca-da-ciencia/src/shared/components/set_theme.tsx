import { Grid, IconButton } from "@mui/material"
import SunnyIcon from '@mui/icons-material/Sunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
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
                title={isDarkMode ? "Tema Escuro" : "Tema Claro" }
            >

            {isDarkMode ? <ModeNightIcon/> : <SunnyIcon />}
                
            </IconButton>

        </Grid>
    )
}


export default SwitchThemeButton;