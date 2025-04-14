import React from 'react';
import {Route} from 'react-router-dom';
import Semanal from '../../view/semanal/semanal.jsx';

const Semanal = () =>{
    return(
        <Routes>
            <Route key= "Semanal" path="/HomePage" element={<Semanal />} />
        </Routes>

    );

}

export default Semanal;