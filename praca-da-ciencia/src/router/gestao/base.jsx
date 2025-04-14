import React from 'react';
import { Route } from 'react-router-dom';
import Gestao from '../../view/gestao/gestao.jsx';

const Gestsao = () =>
{
    return(
        <Routes>
            <Route key= "Gestao" path="/HomePage" element={<Gestao />} />
        </Routes>

    );
    
  
}

export default Gestao;
