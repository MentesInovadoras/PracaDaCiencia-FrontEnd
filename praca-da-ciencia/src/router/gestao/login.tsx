import { Route, Routes } from "react-router-dom"
import Login from "./../../views/gestao/login/login";


const LoginRoutes: React.FC = () =>
{
    return (
        <Routes>
            <Route path="/" id="GestaoLogin" element={ <Login /> }></Route>
        </Routes>
    )
}


export default LoginRoutes;