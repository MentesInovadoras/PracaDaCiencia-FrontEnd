import BaseRoutes from "./base";
import { Route, Routes } from 'react-router-dom';

const VisitanteRoutes = () =>
{
    return (
        <Route index element={<h1>Visitantes</h1>}></Route>
    );
}

export default VisitanteRoutes;