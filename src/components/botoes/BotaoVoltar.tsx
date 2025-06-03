interface BotaoVoltarProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function BotaoVoltar({ onClick, disabled } : BotaoVoltarProps) {
  return (
      <button id="botao_voltar" className="botao_voltar" onClick={onClick} disabled={disabled}>
          &lt;
      </button>
  );
}
