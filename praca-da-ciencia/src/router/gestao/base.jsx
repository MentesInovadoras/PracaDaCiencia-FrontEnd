import React from 'react';
import { Route } from 'react-router-dom';

import GestaoHomePage from '../../view/gestao/gestao';

const BaseRoutes = () =>
{
    return (
        <Route key="GestaoHomePage" path="/HomePage" element={<GestaoHomePage />} />
    );
};

export default BaseRoutes;
