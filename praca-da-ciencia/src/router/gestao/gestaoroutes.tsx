import { Route, Routes } from "react-router-dom"
import Submodulo from "./submodulo";

const GestaoRoutes: React.FC = () =>
{
    return (
        <Routes>
            <Route path="/*" element={ <Submodulo /> }></Route>
        </Routes>
    )
}


export default GestaoRoutes;