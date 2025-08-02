import React from "react"
import { NavLink } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import Logo from "../../components/logo"
import Navbar from "../../components/navbar"


const PageNotFound: React.FC = () => 
{
    return (
        <>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                height:'100vh'
            }}>
                <Navbar/>
                <Box sx={{
                    height:'100%',
                    alignContent:'center'
                }}>
                    <Logo/>

                    <Grid>
                        <Typography color="error" variant="h2" align="center">
                        Erro 404
                        </Typography>
                    </Grid>

                    <Grid>
                        <Typography variant="h4" align="center">
                            Nós não encontramos a sua página :(
                        </Typography>
                    </Grid>

                    <Grid>
                        <NavLink to="/">
                        <Typography variant="h4" align="center" color="primary">
                            Volte para a página inicial
                        </Typography>
                        </NavLink>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}


export default PageNotFound;