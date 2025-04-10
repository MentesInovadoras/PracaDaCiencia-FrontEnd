import React from 'react';
import { Route } from 'react-router-dom';

import VisitanteHomePage from '../../view/visitantes/visitantes';

const BaseRoutes = [
  <Route index key="HomePageVisitantes" path="/HomePage" element={<VisitanteHomePage />} />,
];

export default BaseRoutes;
