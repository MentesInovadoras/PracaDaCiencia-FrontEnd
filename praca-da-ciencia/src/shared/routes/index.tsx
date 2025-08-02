// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandPage from '../views/visitante/landpage';
import type React from 'react';
import GestaoRoutes from '../../modules/gestao/routes';
import VisitanteRoutes from '../../modules/visitante/routes';

import PageNotFound from '../views/page_not_found';

const AppRoutes: React.FC = () =>
{
  return (
    <BrowserRouter>
     <Routes> 
        <Route path="/" element={<LandPage />} />
        <Route path="visitante/*" element={ <VisitanteRoutes /> } />
        <Route path='gestao/*' element={ <GestaoRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


export default AppRoutes;

