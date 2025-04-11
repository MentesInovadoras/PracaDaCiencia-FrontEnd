import React from 'react';
import {Route} from 'react-router-dom';
import MensalHomePage from '../../view/mensal/mensal.jsx';

const MensalHomePage = () => {
    return(
        <Routes>
            <Route key= "MensalHomePage" path="/HomePage" element={<MensalHomePage />} />
        </Routes>

    );
    

}
export default MensalHomePage;