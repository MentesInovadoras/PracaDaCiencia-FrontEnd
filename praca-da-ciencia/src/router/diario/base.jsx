import React from 'react';
import {Route} from 'react-router-dom';
import DiarioHomePage from '../../view/diario/diario.jsx';

const DiarioHomePage = () => {
    return(
        <Routes>
            <Route key= "DiarioHomePage" path="/HomePage" element={<DiarioHomePage />} />
        </Routes>

    )
}

export default DiarioHomePage;