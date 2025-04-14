import React from 'react';
import {Route} from 'react-router-dom';
import Mensal from '../../view/mensal/mensal.jsx';

const Mensal = () => {
    return(
        <Routes>
            <Route key= "Mensal" path="/HomePage" element={<Mensal />} />
        </Routes>

    );
    

}
export default Mensal;