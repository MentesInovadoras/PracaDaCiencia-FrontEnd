import { Route, Routes } from "react-router-dom"
import GestaoRoutes from "./gestao/gestaorouter"
import PageNotFound from "./../views/shared/errors/page_not_found/page_not_found";
import Carregamento from "./../views/carregamento/carregamento";
import Landpage from "./../views/landpage/landpage";
import Calendario from "./../views/visitante/calendario/calendario";
import Formulario from "./../views/visitante/formulario/formulario";


interface AppRoutesParamters
{
    isMobile?: boolean;
}

const AppRoutes: React.FC<AppRoutesParamters> = ({isMobile=true}) =>
{
    return (
        <Routes>
            <Route path="/" element={ <Carregamento /> }></Route>
            <Route path="/home" element={ <Landpage isMobile={isMobile} /> }></Route>
            <Route path="/gestao/*" element={ <GestaoRoutes /> }></Route>
            <Route path="*" element={ <PageNotFound /> }></Route>
            <Route path="/calendarioVisitante" element={ <Calendario /> }></Route>
            <Route path="/formulario" element={ <Formulario /> }></Route>
        </Routes>
    )
}


export default AppRoutes;