import React from "react";
import Navbar from "../../components/navbar/navbar.tsx";
import './homePage.css';

const homePage = () => {
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <p>Welcome to the Visitante section of the application.</p>
        </div>
    );
}
export default homePage;