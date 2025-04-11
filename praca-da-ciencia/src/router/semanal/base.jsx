import React from 'react';
import {Route} from 'react-router-dom';
import SemanalHomePage from '../../view/semanal/semanal.jsx';

const SemanalHomePage = () =>{
    return(
        <Routes>
            <Route key= "SemanalHomePage" path="/HomePage" element={<SemanalHomePage />} />
        </Routes>

    );

}

export default SemanalHomePage;