import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GestaoHomePage from '../view/gestao/gestao';
import LandPage from '../view/landpage/LandPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandPage />} />
        <Route path="gestao/HomePage" element={<GestaoHomePage />} />
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}
