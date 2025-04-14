import React from "react";
import { Route } from "react-router-dom";
import Erro from '../../view/erro/erro.jsx';

const Erro = () => {
    return(
        <Routes>
            <Route key= "Erro" path="*" element={<Erro />} />
        </Routes>
    )
}

export default Erro;

