export default function Button({ value, onClick, selectedId }) {
  return (
    <button
      className={
        value === selectedId
          ? `bg-strongCyan text-veryDarkCyan px-5 py-1 rounded-md`
          : `bg-veryDarkCyan text-white px-5 py-1 rounded-md hover:bg-strongCyan hover:text-veryDarkCyan`
      }
      onClick={onClick}
    >
      {value}%
    </button>
  );
}
