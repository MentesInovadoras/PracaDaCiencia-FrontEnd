import { AppBar, Button, Grid, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import SwapThemes from "./swap_themes";

import "./../css/inactivate_link.css"


interface CabecalhoProps
{
    swapCollorButton: () => boolean;
    startTheme: boolean;
}


const Cabecalho: React.FC<CabecalhoProps> = ({swapCollorButton, startTheme}) =>
{
    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchor(event.currentTarget); };
    const handleClose = () => { setAnchor(null); }
    
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
                    <Button color="inherit" onClick={handleMenu}>Visitar
                    </Button>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="visitar-menu"
                    anchorEl={anchor}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={anchor != null}
                    onClose={handleClose}
                    >
                        <Grid container direction={"column"} size={12} alignItems={"center"}>
                            <NavLink to="/home" className={"inactivate-link "}>
                                <MenuItem>Sozinho</MenuItem>
                            </NavLink>

                            <NavLink to="/home" className={"inactivate-link "}>
                                <MenuItem>Em Grupo</MenuItem>
                            </NavLink>

                            <NavLink to="/home" className={"inactivate-link "}>
                                <MenuItem>Com Instituição</MenuItem>
                            </NavLink>
                        </Grid>
                    </Menu>
                    <Button color="inherit">Contato</Button>

                    <SwapThemes onClick={swapCollorButton} lightTheme={startTheme}/>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Cabecalho;