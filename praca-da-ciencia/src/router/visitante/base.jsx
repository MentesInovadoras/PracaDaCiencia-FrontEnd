import React from 'react';
import { Route } from 'react-router-dom';

import Visitante from '../../view/visitantes/visitanetes.jsx';

const Visitante = () => {
  return (
    <Routes>
      <Route key="Visitante" path="/HomePage" element={<Visitante />} />
    </Routes>
  );
}
  

export default Visitante;
