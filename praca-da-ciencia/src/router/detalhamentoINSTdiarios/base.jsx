import React from "react";
import { Route } from "react-router-dom";
import INSTdiarios from '../../view/detalhamentoINSTdiarios/detalhamentoinstdiarios.jsx';

const INSTdiarios = () => {
    return (
        <Routes>
            <Route key= "INSTdiarios" path="/HomePage" element={<INSTdiarios />} />
        </Routes>

    )
}

export default INSTdiarios;

