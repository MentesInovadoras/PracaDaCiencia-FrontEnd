import React from 'react';
import {Route} from 'react-router-dom';
import INDdiarios from '../../view/detalhamentoINDdiarios/detalhamentoinddiarios.jsx';

const INDdiarios = () => {
    return(
        <Routes>
            <Route key= "INDdiarios" path="/HomePage" element={<INDdiarios/>} />
        </Routes>

    );

}

export default INDdiarios;