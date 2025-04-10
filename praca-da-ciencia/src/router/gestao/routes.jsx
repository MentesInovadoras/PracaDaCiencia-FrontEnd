import BaseRoutes from "./base";
import { Route } from 'react-router-dom';

const GestaoRoutes = () =>
{
    return (
        <Route index element={<h1>Gestão</h1>}></Route>
    );
};

export default GestaoRoutes;