import { Route, Routes } from "react-router-dom"
import GestaoHome from "../../views/gestao/gestao"

const Submodulo: React.FC = () =>
{
    return (
        <Routes>
            <Route path="/" element={ <GestaoHome /> }></Route>
        </Routes>
    )
}


export default Submodulo;