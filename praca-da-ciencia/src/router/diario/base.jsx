import React from 'react';
import {Route} from 'react-router-dom';
import Diario from '../../view/diario/diario.jsx';

const Diario = () => {
    return(
        <Routes>
            <Route key= "Diario" path="/HomePage" element={<Diario />} />
        </Routes>

    )
}

export default Diario;