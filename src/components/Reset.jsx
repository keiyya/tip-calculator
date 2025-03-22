export default function Reset({ onReset }) {
  return (
    <div
      className="uppercase cursor-pointer bg-strongCyan text-veryDarkCyan rounded-md text-center justify-end md:mt-[144px]"
      onClick={onReset}
    >
      Reset
    </div>
  );
}
