import { Routes, Route } from "react-router-dom";
import Daily from "../views/Daily";
import Weekly from "../views/Weekly";
import PageNotFound from "@/shared/views/page_not_found";
import Forms from "../views/forms";

const GestaoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Daily />} />{" "}
      {/* TODO: Trocar rota posteriormente */}
      <Route path="/daily" element={<Daily />} />
      <Route path="/weekly" element={<Weekly />} />
      <Route path="/forms/*" element={<Forms />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default GestaoRoutes;
