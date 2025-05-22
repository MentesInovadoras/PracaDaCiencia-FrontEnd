import React from "react";
import './semanal.css';
import Navbar from "../../../../components/navbar/navbar";
import Footer from "../../../../components/footer/footer";


const Semanal = () => {
    return (
        <>
        <Navbar />
        <div id="semanal_content">
            <div id="data_semanal">
                <h1>Data</h1> 
                <h1>Hora</h1>  
                <h1>Responsável</h1> 
                <h1>Instituição</h1>  
                <h1>Roteiro</h1> 
                <h1>Status</h1>             
            </div>


           
        </div>
        <Footer />
        



        
        </>
            
    );

}
export default Semanal;
