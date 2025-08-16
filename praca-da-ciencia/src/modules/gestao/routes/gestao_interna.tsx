import { Routes, Route } from "react-router-dom";
import ListarRoteiros from "../views/gestao_interna/roteiros/list/Index";


const GestaoInternaRoutes = () =>
{
  return (
    <Routes>
      <Route path="/roteiros/listar" element={<ListarRoteiros />} />
    </Routes>
  );
};


export default GestaoInternaRoutes;

