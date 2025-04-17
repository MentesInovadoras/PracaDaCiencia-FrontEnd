import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Imports de Geral
import HomePage       from '../geral/homePage/homePage.jsx';
import Erro           from '../geral/erro/erro.jsx';
import Login          from '../geral/login/login.jsx';
// Imports de Visitantes
import Calendario     from '../visitante/calendario/calendario.jsx';
import SeletorVisita  from '../visitante/seletorVisita/seletorVisita.jsx';
import Formulario     from '../visitante/formulario/formulario.jsx';
import InfoRelevantes from '../visitante/infoRelevantes/infoRelevantes.jsx';
// Imports de Gestão de Visitas
import Diario         from '../gestaoVisitas/diario/diario.jsx';
import Semanal        from '../gestaoVisitas/semanal/semanal.jsx';
import Mensal         from '../gestaoVisitas/mensal/mensal.jsx';
import Detalhamento   from '../gestaoVisitas/detalhamento/detalhamento.jsx';


export default function AppRouter() {
  return (
    <Router>
      <Routes>

        {/* GERAIS */}
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={< Erro />} />

        {/* GESTÃO VISITAS*/}
        <Route path="diario" element={<Diario />} />
        <Route path="semanal" element={<Semanal />} />
        <Route path="mensal" element={<Mensal />} />
        <Route path="detalhamento" element={<Detalhamento />} />

        {/* VISITANTES */}
        <Route path="calendario" element={<Calendario />} />
        <Route path="seletorVisita" element={<SeletorVisita />} />
        <Route path="formulario" element={<Formulario />} />
        <Route path="informacoes" element={<InfoRelevantes />} />

      </Routes>
    </Router>
  );
}
