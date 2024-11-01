export default function NextButton({ onClick, disabled }) {
  return (
      <button id="next_button" className="next_button" onClick={onClick} disabled={disabled}>
          &gt;
      </button>
  );
}
