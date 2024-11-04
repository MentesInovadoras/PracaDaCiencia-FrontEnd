export default function PrevButton({ onClick, disabled }) {
  return (
      <button id="prev_button" className="prev_button" onClick={onClick} disabled={disabled}>
          &lt;
      </button>
  );
}
