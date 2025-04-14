import React from "react";
import { Route, Routes } from "react-router-dom";


const Login = () => {
    return(

        <Routes>
            <Route key= "Login" path="/HomePage" element={<login/>}/>
        </Routes>
    )
}

export default Login;