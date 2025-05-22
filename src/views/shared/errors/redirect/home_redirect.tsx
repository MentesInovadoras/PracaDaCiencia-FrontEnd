import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeRedirect: React.FC = () =>
{
    const navigate = useNavigate();

    useEffect ( () => {
            // Redireciona o usuário para a página "/home" assim que o componente for montado
            navigate('/home');
        },
        [navigate]
    );
  
    return (
      <div>
        <h1>Te redirecionando para página principal...</h1>
      </div>
    );
}


export default HomeRedirect;