import React from "react";
import {Route} from 'react-router-dom';
import GRPdiariosHomePage from  '../../view/detalhamentoGRPdiarios/detalhamentogrpdiarios.jsx';

const GRPdiariosHomePage = () => {
    return(
        <Routes>
            <Route key= "GRPdiariosHomePage" path="/HomePage" element={<GRPdiariosHomePage />} />
        </Routes>

    );

}
export default GRPdiariosHomePage;