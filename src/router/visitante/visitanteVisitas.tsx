import { Route, Routes } from "react-router-dom"
import GestaoHome from "../../views/gestao/gestao"
import DetalhamentoAgendamento from "../../components/detalhamento_agendamento_visitas/detalhamento_agendamento";
import Diario from "../../views/gestao/gestaoVisitas/diario/diario";
import Mensal from "../../views/gestao/gestaoVisitas/mensal/mensal";
import Semanal from "../../views/gestao/gestaoVisitas/semanal/semanal";
import Formulario from "../../views/visitante/formulario/formulario";

const GestaoVisitaRoutes: React.FC = () =>
{
    return (
        <Routes>
            <Route path="/" element={ <GestaoHome /> }></Route>
            <Route path="/detalhamento" id="GestaoVisitaDetalhamento" element={ <DetalhamentoAgendamento /> }></Route>
            <Route path="/diario" element={ <Diario /> }></Route>
            <Route path="/mensal" element={ <Mensal /> }></Route>
            <Route path="/semanal" element={ <Semanal /> }></Route>
            <Route path="/formulario" element={ <Formulario /> }></Route>
        </Routes>
    )
}


export default GestaoVisitaRoutes;