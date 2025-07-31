// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandPage from '../layouts/landpage';
import type React from 'react';

const AppRoutes: React.FC = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default AppRoutes;

