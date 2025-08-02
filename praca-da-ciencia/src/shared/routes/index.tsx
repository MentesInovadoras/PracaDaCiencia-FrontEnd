// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandPage from '../layouts/landpage';
import type React from 'react';
import GestaoRoutes from '../../modules/gestao/routes';
import VisitanteRoutes from '../../modules/visitante/routes';


const AppRoutes: React.FC = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="gestao/*" element={ <GestaoRoutes /> } />
        <Route path="visitante/*" element={ <VisitanteRoutes /> } />
      </Routes>
    </BrowserRouter>
  );
}


export default AppRoutes;

