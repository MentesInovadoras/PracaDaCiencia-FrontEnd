import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './carregamento.css';
import Logo from "../../assets/logo/full.png";


export default function Carregamento() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home"); // Redireciona para a Home após 1 segundo
        }, 1000);

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }, [navigate]);

    return (
    <div className="container">
        <div className="logoLoading">
        <img src={Logo} alt="Ícone" className="animatedLogo" />
        </div>
    </div>
    );

}