import React from 'react';
import { Route } from 'react-router-dom';
import GestaoHomePage from '../../view/gestao/gestao.jsx';

const GestsaoHomePage = () =>
{
    return(
        <Routes>
            <Route key= "GestaoHomePage" path="/HomePage" element={<GestaoHomePage />} />
        </Routes>

    );
    
  
}

export default GestaoHomePage;
