import React from "react";
import{Route} from 'react-router-dom';
import GRPmensal from '../../view/detalhamentoGRPmensal/detalhamentogrpmensal.jsx';


const GRPmensal = () => {
    return(
        <Routes>
            <Route key= "GRPmensal" path="/HomePage" element={<GRPmensal />} />
        </Routes>

    );
}

export default GRPmensal;

