import { DarkMode, Sunny } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

interface SwapThemesProps
{
    onClick: () => boolean;
    lightTheme: boolean;
}


const SwapThemes: React.FC<SwapThemesProps> = ({ onClick, lightTheme }) =>
{
    const [theme, setTheme] = useState(lightTheme);
    const handlleTheme = () => { setTheme(!theme); }
    const onButtonClick = () => {
        if(onClick())
            { handlleTheme(); }
    }

    return (
        <>
            <IconButton onClick={onButtonClick} aria-label="sunny">
                { theme ?  <Sunny sx={{color: "whitesmoke"}} />:<DarkMode sx={{color: "whitesmoke"}} />}
            </IconButton>
        </>
    )
}


export default SwapThemes;

