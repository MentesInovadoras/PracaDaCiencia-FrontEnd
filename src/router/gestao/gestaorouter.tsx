import { Route, Routes } from "react-router-dom"
import GestaoVisitaRoutes from "./gestaoVisitas";
import LoginRoutes from "./login";

const GestaoRoutes: React.FC = () =>
{
    return (
        <Routes>
            <Route path="/home/*" element={ <LoginRoutes /> }></Route>
            <Route path="/gestaoVisita/*" element={ <GestaoVisitaRoutes /> }></Route>
        </Routes>
    )
}


export default GestaoRoutes;