import React from 'react';
import {Route} from 'react-router-dom';
import INDdiariosHomePage from '../../view/detalhamentoINDdiarios/detalhamentoinddiarios.jsx';

const INDdiariosHomePage = () => {
    return(
        <Routes>
            <Route key= "INDdiariosHomePage" path="/HomePage" element={<INDdiariosHomePage/>} />
        </Routes>

    );

}

export default INDdiariosHomePage;