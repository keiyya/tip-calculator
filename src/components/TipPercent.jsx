export function TipPercent({
  tips,
  onTipChange,
  isSelected,
  onCustomTipFocus,
}) {
  return (
    <div className="space-y-1">
      <h2 className="text-myGrey500 text-sm">Select Tip %</h2>
      <ul className="grid grid-cols-2 gap-3 items-center justify-center md:grid-cols-3">
        {tips.map((tip, index) => (
          <li
            className={
              isSelected === tip
                ? "bg-myGreen400 text-myGreen900 cursor-pointer hover:bg-myGreen400 hover:text-myGreen900 text-center rounded-md"
                : "bg-myGreen900 text-white cursor-pointer hover:bg-myGreen400 hover:text-myGreen900 text-center rounded-md"
            }
            value={tip}
            key={index}
            id={crypto.randomUUID()}
            onClick={() => onTipChange(tip)}
          >
            {tip}%
          </li>
        ))}
        <input
          type="number"
          placeholder="Custom"
          className="text-right bg-myGrey50 rounded-md outline-myGreen400 cursor-pointer pr-2 text-myGreen900 hover:outline-3"
          onChange={(e) => onTipChange(Number(e.target.value))}
          onFocus={onCustomTipFocus}
        />
      </ul>
    </div>
  );
}
