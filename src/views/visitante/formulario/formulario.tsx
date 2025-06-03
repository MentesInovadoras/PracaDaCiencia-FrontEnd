import { useLocation } from 'react-router-dom';

export default function Formulario() {
  const location = useLocation();
  const tipo = location.state?.tipo || 'individual';
  console.log("Tipo recebido:", tipo);

  return (
    <div>
      <h1>Formulário - Tipo: {tipo}</h1>
      {/* Formulário real vem aqui */}
    </div>
  );
}
