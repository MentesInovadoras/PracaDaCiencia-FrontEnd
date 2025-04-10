import Navbar from "../../components/navbar/Navabar";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LandPage = () =>
{
    return (
        <>
            <Navbar></Navbar>
            <Fab color="primary" variant="extended" aria-label="add" onClick={() => console.log("Add")}>
            </Fab>
            <Fab color="secondary" aria-label="edit">
            <EditIcon />
            </Fab>
            <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
            </Fab>
            <Fab disabled aria-label="like">
            <FavoriteIcon />
            </Fab>
            
            <div>
                <h1>LandPage</h1>
                <p>Isto é a landpage!</p>
            </div>
        </>
    );
};


export default LandPage;

