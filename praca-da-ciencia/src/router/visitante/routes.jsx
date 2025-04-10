import BaseRoutes from "./base";
import { Route } from 'react-router-dom';

const VisitanteRoutes = () =>
{
    return (
        <>
            <Route path="/visitante">
                <Route element={<BaseRoutes />} />
            </Route>
        </>
    );
};

export default VisitanteRoutes;