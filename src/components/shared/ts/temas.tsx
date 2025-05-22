import { createTheme } from "@mui/material";


export const temaClaro = createTheme(
    {
        palette:
        {
            mode: "light",
            primary: { main: "#EE7625" },
            secondary: { main: "#FFD020" },
            background: { default: "#F0F0F0" },
        }
    }
)

export const temaEscuro = createTheme(
    {
        palette:
        {
            mode: "dark",
            primary: { main: "#EE7625" },
            secondary: { main: "#FFD020" },
            background: { default: "#202020" },
        }
    }
)