import { Routes, Route } from "react-router-dom";
import Daily from "../views/Daily"


const GestaoRoutes = () =>
{
  return (
    <Routes>
      <Route path="/*" element={<Daily />} />
    </Routes>
  );
}


export default GestaoRoutes;

