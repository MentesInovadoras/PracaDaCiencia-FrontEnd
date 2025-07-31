// src/routes/PrimeiroModuloRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from '../test';


const GestaoRoutes = () =>
{
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}


export default GestaoRoutes;

