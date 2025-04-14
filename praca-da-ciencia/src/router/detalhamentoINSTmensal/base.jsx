import React from "react";
import {Route} from "react-router-dom";
import INSTmensal from '../../view/detalhamentoINSTmensal/detalhamentoinstmensal.jsx';

const INSTmensal = () => {
    return(
        <Routes>
            <Route key= "INSTmensal" path="/HomePage" element={<INSTmensal />} />
        </Routes>

    );
    
}
export default INSTmensal;