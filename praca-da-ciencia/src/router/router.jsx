import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitanteHomePage from '../view/visitantes/visitanetes.jsx';
import GestaoHomePage from '../view/gestao/gestao.jsx';
import LoginHomePage from '../view/loguin/loguin.jsx';
import DiarioHomePage from '../view/diario/diario.jsx';
import SemanalHomePage from '../view/semanal/semanal.jsx';
import MensalHomePage from '../view/mensal/mensal.jsx';
import INDdiariosHomePage from '../view/detalhamentoINDdiarios/detalhamentoinddiarios.jsx';
import GRPdiariosHomePage from '../view/detalhamentoGRPdiarios/detalhamentogrpdiarios.jsx';





export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="visitantes" element={<VisitanteHomePage />} />
        <Route path="gestao" element={< GestaoHomePage/>} />
        <Route path="login" element={< LoginHomePage/>} />
        <Route path="diario" element={< DiarioHomePage/>} />
        <Route path="semanal" element={< SemanalHomePage/>} />
        <Route path="mensal" element={< MensalHomePage/>} />
        <Route path="individualdiario" element={< INDdiariosHomePage/>} />
        <Route path="gruposdiario" element={< GRPdiariosHomePage/>} />
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}
