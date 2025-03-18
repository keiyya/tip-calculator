import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState(1);
  const [tipPercent, setTipPercent] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  const handleTipClick = (tip) => {
    setTipPercent(tip);
    setSelectedId(tip !== selectedId ? tip : null);
  };

  const tip = (Number(bill) * tipPercent) / 100;
  const total = ((Number(bill) || 0) + tip) / people;
  const tipAmount = tip / people;

  const handleReset = () => {
    setBill("");
    setPeople(1);
    setTipPercent(0);
  };

  return (
    <main>
      <h1 className="uppercase text-darkGrayishCyan font-bold text-center">
        Spli <br /> tter
      </h1>
      <div className="bg-white p-7 rounded-md flex flex-col items-center justify-center gap-7 md:flex-row">
        <Calculator
          onSetBill={setBill}
          bill={bill}
          onSetPeople={setPeople}
          people={people}
          tipPercent={tipPercent}
          handleTipClick={handleTipClick}
          selectedId={selectedId}
        />
        <Display
          bill={bill}
          total={total.toFixed(2)}
          tip={tipAmount.toFixed(2)}
          onReset={handleReset}
        />
      </div>
    </main>
  );
}

export default App;

function Calculator({
  onSetBill,
  bill,
  onSetPeople,
  people,
  handleTipClick,
  selectedId,
}) {
  return (
    <div className="flex flex-col md:w-1/2">
      <CustomerInput
        title="Bill"
        imgSrc="images/icon-dollar.svg"
        onChange={(e) =>
          onSetBill(e.target.value ? parseFloat(e.target.value) : 0)
        }
        value={bill}
      />
      <Tips handleTipClick={handleTipClick} selectedId={selectedId} />
      <CustomerInput
        title="Number of People"
        imgSrc="images/icon-person.svg"
        onChange={(e) => onSetPeople(e.target.value)}
        value={people}
      />
    </div>
  );
}

function CustomerInput({ title, imgSrc, onChange, value }) {
  return (
    <div className="flex flex-col space-y-1 relative my-5">
      <label className="text-sm text-grayishCyan">{title}</label>
      <input
        type="number"
        className="bg-lightCyan text-right text-veryDarkCyan "
        placeholder="0"
        onChange={onChange}
        value={value}
        step="any"
      />
      <img src={imgSrc} className="w-3 absolute top-7 left-2" />
    </div>
  );
}

function Tips({ handleTipClick, selectedId }) {
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
      <div className="grid grid-cols-2 gap-2">
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

function Button({ value, onClick, selectedId }) {
  return (
    <button
      className={
        value === selectedId
          ? `bg-strongCyan text-veryDarkCyan px-5 py-1 rounded-md hover:bg-veryDarkCyan hover:text-white`
          : `bg-veryDarkCyan text-white px-5 py-1 rounded-md hover:bg-strongCyan hover:text-veryDarkCyan`
      }
      onClick={onClick}
    >
      {value}%
    </button>
  );
}

function Display({ total, onReset, tip }) {
  return (
    <div className="bg-veryDarkCyan text-white flex flex-col p-6 rounded-md md:w-1/2">
      <div>
        <Amount title="Tip Amount" bill={tip} />
        <Amount title="Total" bill={total} />
      </div>
      <Reset onReset={onReset} />
    </div>
  );
}

function Amount({ title, bill }) {
  return (
    <div className="flex items-center justify-between my-4">
      <div className="">
        <h3 className="text-base">{title}</h3>
        <p className="text-sm text-grayishCyan">/ person</p>
      </div>
      <p className="text-3xl text-strongCyan w-2/3 text-right">${bill}</p>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div
      className="uppercase cursor-pointer bg-strongCyan text-veryDarkCyan rounded-md text-center justify-end md:mt-[144px]"
      onClick={onReset}
    >
      Reset
    </div>
  );
}
