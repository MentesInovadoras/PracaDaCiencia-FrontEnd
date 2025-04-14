import React from "react";
import {Route} from 'react-router-dom';
import Barra from '../../view/barra/barra.jsx';

const Barra = () => {
    return(
        <Routes>
            <Route key= "Barra" path="/HomePage" element={<Barra />} />
        </Routes>

    );

}

export default Barra;

