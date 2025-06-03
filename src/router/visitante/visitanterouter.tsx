import { Route, Routes } from "react-router-dom"
import Formulario from "../../views/visitante/formulario/formulario";
import Calendario from "../../views/visitante/calendario/calendario";

const VisitanteRoutes: React.FC = () =>
{
    return (
        <Routes>
            <Route path="/calendario" element={ <Calendario /> }></Route>
            <Route path="/formulario" element={ <Formulario /> }></Route>
        </Routes>
    )
}

export default VisitanteRoutes;