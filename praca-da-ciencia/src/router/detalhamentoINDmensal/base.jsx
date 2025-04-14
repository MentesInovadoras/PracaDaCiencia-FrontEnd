import React from "react";
import { Route } from "react-router-dom";
import DetalhamentoINDMensal from '../../view/detalhamentoINDmensal/detalhamentoindmensal.jsx';

const INDMensal = () => {
    return (
        <Routes>
            <Route key= "INDMensal" path="/HomePage" element={<INDMensal />} />
        </Routes>

    )
}

export default INDMensal;

