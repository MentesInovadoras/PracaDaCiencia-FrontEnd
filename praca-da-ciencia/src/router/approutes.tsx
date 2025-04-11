import { Route, Routes } from "react-router-dom"
import GestaoRoutes from "./gestao/gestaoroutes"
import PageNotFound from "../views/errors/page_not_found/page_not_found";
import Landpage from "../views/landpage/landpage";
import HomeRedirect from "../views/errors/redirect/home_redirect";

const AppRoutes: React.FC = () =>
{
    return (
        <Routes>
            <Route path="/" element={ <HomeRedirect /> }></Route>
            <Route path="/home" element={ <Landpage /> }></Route>
            <Route path="/gestao/*" element={ <GestaoRoutes /> }></Route>
            <Route path="*" element={ <PageNotFound /> }></Route>
        </Routes>
    )
}


export default AppRoutes;