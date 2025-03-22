import Amount from "./Amount";
import Reset from "./Reset";

export default function Display({ total, onReset, tip }) {
  return (
    <div className="bg-veryDarkCyan text-white flex flex-col p-6 rounded-md w-full md:w-1/2">
      <div>
        <Amount title="Tip Amount" bill={tip} />
        <Amount title="Total" bill={total} />
      </div>
      <Reset onReset={onReset} />
    </div>
  );
}
