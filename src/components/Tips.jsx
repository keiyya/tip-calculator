import { useState } from "react";
import Button from "./Button";

export default function Tips({ handleTipClick, selectedId }) {
  const [customTip, setCustomTip] = useState("");

  const handleCustomTipChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setCustomTip(value);
      handleTipClick(Number(value));
    }
  };

  return (
    <div>
      <h2 className="text-sm text-darkGrayishCyan my-2">Select Tip%</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {[5, 10, 15, 20, 25].map((tip) => (
          <Button
            key={tip}
            value={tip}
            onClick={() => handleTipClick(tip)}
            selectedId={selectedId}
          />
        ))}
        <input
          value={customTip}
          onChange={handleCustomTipChange}
          className="text-right text-veryDarkCyan outline-none"
          placeholder="Custom"
        />
      </div>
    </div>
  );
}
