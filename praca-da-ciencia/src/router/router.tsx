import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Imports de Geral
import HomePage from '../geral/homePage/homePage.tsx';
import Erro from '../geral/erro/erro.tsx';
import Login from '../geral/login/login.tsx';
// Imports de Visitantes
import Calendario from '../visitante/calendario/calendario.tsx';
import SeletorVisita from '../visitante/seletorVisita/seletorVisita.tsx';
import Formulario from '../visitante/formulario/formulario.tsx';
import InfoRelevantes from '../visitante/infoRelevantes/infoRelevantes.tsx';
// Imports de Gestão de Visitas
import Diario from '../gestaoVisitas/diario/diario.tsx';
import Semanal from '../gestaoVisitas/semanal/semanal.tsx';
import Mensal from '../gestaoVisitas/mensal/mensal.tsx';
import Detalhamento from '../gestaoVisitas/detalhamento/detalhamento.tsx';


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
