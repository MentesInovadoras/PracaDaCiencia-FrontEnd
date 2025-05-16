import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import SwapThemes from "../swap_themes";

import "./../../css/inactivate_link.css"
import MenuAppbar from "./menuAppbar";


interface CabecalhoProps
{
    swapCollorButton: () => boolean;
    startTheme: boolean;
}


const Cabecalho: React.FC<CabecalhoProps> = ({swapCollorButton, startTheme}) =>
{
    const contatoData = {
            hide: "Contato",
            id: "contato-menu",
            options: [
                {
                    to: "",
                    title: "(27) 992795091"
                }
            ]
        }

    const visitarData = {
            hide: "Visitar",
            id: "visita-menu",
            options: [
                { to: "/home", title: "Sozinho" },
                { to: "/home", title: "Em Grupo" },
                { to: "/home", title: "Com Instituição" }
            ]
        }
    
    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: 'primary.main', padding: '5px 0' }}>
                <Toolbar sx={{color: "white"}}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Praça da Ciência - Vitória, ES
                    </Typography>

                    <NavLink to="/home" className={"inactivate-link "}>
                        <Button color="inherit">Home</Button>                
                    </NavLink>


                    <MenuAppbar props={[visitarData, contatoData]} />

                    <SwapThemes onClick={swapCollorButton} lightTheme={startTheme}/>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Cabecalho;