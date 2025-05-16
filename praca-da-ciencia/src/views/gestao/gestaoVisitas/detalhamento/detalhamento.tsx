import React from "react";
import './detalhamento.css';
import Navbar from "../../../../components/navbar/navbar";
import Footer from "../../../../components/footer/footer";
import DetalhamentoAgendamento from "../../../../components/detalhamento_agendamento_visitas/detalhamento_agendamento";

const detalhamento = () => {
    return (
        <>
        <Navbar />
        <div id="detalhamento_content">
            <DetalhamentoAgendamento />
            
            


        </div>
        <Footer />  
  
  
        </>
        
       
    );
}
export default detalhamento;

