import React from "react";
import './semanal.css';
import Navbar from "../../components/navbar/navbar.tsx";
import Footer from "../../components/footer/footer.tsx";


const Semanal = () => {
    return (
        <>
        <Navbar />
        <div id="semanal_content">
            <div id="data_semnal">
                <h1>Data</h1>  
            </div>

            <div id="hora_semanal">
                <h1>Hora</h1>
            </div>

            <div id="Responsavel_semanal">
                <h1>Responsável</h1>
            </div>
        

        </div>
        <Footer />
        



        
        </>
            
    );

}
export default Semanal;
