import React from 'react';
import { Route } from 'react-router-dom';

import VisitanteHomePage from '../../view/visitantes/visitanetes.jsx';

const VisitanteHomePage = () => {
  return (
    <Routes>
      <Route key="VisitanteHomePage" path="/HomePage" element={<VisitanteHomePage />} />
    </Routes>
  );
}
  

export default VisitanteHomePage;
