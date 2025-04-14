import React from "react";
import {Route} from 'react-router-dom';
import GRPdiarios from  '../../view/detalhamentoGRPdiarios/detalhamentogrpdiarios.jsx';

const GRPdiarios = () => {
    return(
        <Routes>
            <Route key= "GRPdiarios" path="/HomePage" element={<GRPdiarios />} />
        </Routes>

    );

}
export default GRPdiarios;