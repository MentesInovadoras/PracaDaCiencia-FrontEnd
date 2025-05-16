import { Route, Routes } from "react-router-dom"
import GestaoRoutes from "./gestao/gestaoroutes"
import PageNotFound from "./../views/shared/errors/page_not_found/page_not_found";
import HomeRedirect from "./../views/shared/errors/redirect/home_redirect";
import Landpage from "./../views/landpage/landpage";


interface AppRoutesParamters
{
    isMobile?: boolean;
}

const AppRoutes: React.FC<AppRoutesParamters> = ({isMobile=true}) =>
{
    return (
        <Routes>
            <Route path="/" element={ <HomeRedirect /> }></Route>
            <Route path="/home" element={ <Landpage isMobile={isMobile} /> }></Route>
            <Route path="/gestao/*" element={ <GestaoRoutes /> }></Route>
            <Route path="*" element={ <PageNotFound /> }></Route>
        </Routes>
    )
}


export default AppRoutes;