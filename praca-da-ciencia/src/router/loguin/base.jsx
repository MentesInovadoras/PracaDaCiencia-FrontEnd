import React from "react";
import { Route, Routes } from "react-router-dom";


const LoginHomePage = () => {
    return(

        <Routes>
            <Route key= "LoginHomePage" path="/HomePage" element={<loginHomePage/>}/>
        </Routes>
    )
}

export default LoginHomePage;