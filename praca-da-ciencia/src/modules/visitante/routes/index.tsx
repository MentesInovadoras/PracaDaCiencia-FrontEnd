import { Route, Routes } from "react-router-dom";
import Horarios from "../views/callendar";


const VisitanteRoutes: React.FC = () =>
{
    return (
        <Routes>
            <Route path="horarios" element={<Horarios />} />
        </Routes>
    )
}


export default VisitanteRoutes;

