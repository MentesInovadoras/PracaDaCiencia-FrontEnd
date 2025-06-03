interface BotaoProximoProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function BotaoProximo({ onClick, disabled } : BotaoProximoProps) {
  return (
      <button id="botao_proximo" className="botao_proximo" onClick={onClick} disabled={disabled}>
          &gt;
      </button>
  );
}
