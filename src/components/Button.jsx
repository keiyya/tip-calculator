export function Button({ bill, onReset }) {
  return (
    <button
      className={
        bill <= 0
          ? "uppercase cursor-not-allowed bg-myGrey500 text-myGreen900 w-[95%] mx-auto rounded-md hover:bg-myGrey200"
          : "uppercase cursor-pointer bg-myGreen400 text-myGreen900 w-[95%] mx-auto rounded-md hover:bg-myGrey200"
      }
      onClick={bill <= 0 ? null : onReset}
    >
      Reset
    </button>
  );
}
