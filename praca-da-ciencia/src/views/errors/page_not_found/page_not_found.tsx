import { NavLink } from "react-router-dom";
import { Grid, Typography, } from "@mui/material";
import Logo from "../../../components/shared/logo";


const PageNotFound = () => 
{
    return (
        <>
            <Grid
            container
            direction="column"        
            justifyContent="center"   
            alignItems="center"   
            >
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
                    <NavLink to="/home">
                    <Typography variant="h4" align="center" color="primary">
                        Volte para a página inicial
                    </Typography>
                    </NavLink>
                </Grid>
            </Grid>
        </>
    )
}


export default PageNotFound;