// src/routes/PrimeiroModuloRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from '../views/Daily';


const GestaoRoutes = () =>
{
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}


export default GestaoRoutes;

