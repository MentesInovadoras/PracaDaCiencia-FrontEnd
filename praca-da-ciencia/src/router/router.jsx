import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Visitante from '../view/visitantes/visitanetes.jsx';
import Gestao from '../view/gestao/gestao.jsx';
import Login from '../view/loguin/loguin.jsx';
import Diario from '../view/diario/diario.jsx';
import Semanal from '../view/semanal/semanal.jsx';
import Mensal from '../view/mensal/mensal.jsx';
import INDdiarios from '../view/detalhamentoINDdiarios/detalhamentoinddiarios.jsx';
import GRPdiarios from '../view/detalhamentoGRPdiarios/detalhamentogrpdiarios.jsx';
import INSTdiarios from '../view/detalhamentoINSTdiarios/detalhamentoinstdiarios.jsx';
import INDMensal from '../view/detalhamentoINDmensal/detalhamentoindmensal.jsx';
import GRPmensal from '../view/detalhamentoGRPmensal/detalhamentogrpmensal.jsx';
import INSTmensal from '../view/detalhamentoINSTmensal/detalhamentoinstmensal.jsx';
import Barra from '../view/barra/barra.jsx';
import Erro from '../view/erro/erro.jsx';




export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Barra/>} />
        <Route path="login" element={< Login/>} />
        <Route path="visitantes" element={<Visitante />} />
        <Route path="gestao" element={< Gestao/>} />
        <Route path="diario" element={< Diario/>} />
        <Route path="semanal" element={< Semanal/>} />
        <Route path="mensal" element={< Mensal/>} />
        <Route path="individualdiario" element={< INDdiarios/>} />
        <Route path="gruposdiario" element={< GRPdiarios/>} />
        <Route path="instituicaodiario" element={< INSTdiarios/>} />
        <Route path="individualmensal" element={< INDMensal/>} />
        <Route path="grupomensal" element={< GRPmensal/>} />
        <Route path="*" element={< Erro/>} />
       
        
      </Routes>
    </Router>
  );
}
