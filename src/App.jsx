import { useState } from "react";
import DollarIcon from "../src/assets/images/icon-dollar.svg";
import PersonIcon from "../src/assets/images/icon-person.svg";

export default function App() {
  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [tip, setTip] = useState("");
  const [isSelected, setIsSelected] = useState(null);

  const tips = [5, 10, 15, 25, 50];

  function handleBill(e) {
    setBill(e.target.value);
  }

  function handleNumPeople(e) {
    setNumPeople(e.target.value);
  }

  function handleTip(tipValue) {
    setTip(tipValue);
    setIsSelected(tipValue);
  }

  function handleCustomTipFocus() {
    setIsSelected(null);
  }

  function handleReset() {
    setBill("");
    setNumPeople(1);
    setTip("");
    setIsSelected(null);
  }

  let total = (bill * (tip + 100)) / 100;

  let totalPerPerson = numPeople <= 0 ? 0.0 : total.toFixed(2) / numPeople;

  let tipPerPerson = numPeople <= 0 ? 0.0 : (total - bill) / numPeople;

  return (
    <main className="py-20  flex flex-col items-center justify-center bg-myGrey200 md:h-screen md:w-screen md:py-0">
      <h1 className="uppercase text-myGrey500 tracking-[10px] text-3xl mb-10">
        Spli <br /> tter
      </h1>

      {/* Calculator */}
      <div className="bg-white rounded-md p-6 flex flex-col gap-6 md:flex-row max-w-[350px] md:max-w-[700px]">
        {/* Right */}
        <div className="space-y-3 md:w-1/2">
          <Input
            title="Bill"
            imageSrc={DollarIcon}
            value={bill}
            onHandleChange={handleBill}
            placeholder="0"
          />
          <TipPercent
            tips={tips}
            onTipChange={handleTip}
            isSelected={isSelected}
            onCustomTipFocus={handleCustomTipFocus}
          />
          <Input
            title="Number of People"
            imageSrc={PersonIcon}
            onHandleChange={handleNumPeople}
            placeholder="1"
          />
        </div>
        {/* Left */}
        <div className="bg-myGreen900 text-white rounded-md flex flex-col justify-between p-5 h-[300px] md:h-auto md:w-1/2">
          <div className="space-y-3">
            <PerPerson title="Tip Amount" amount={tipPerPerson.toFixed(2)} />
            <PerPerson title="Total" amount={totalPerPerson.toFixed(2)} />
          </div>
          <Button bill={bill} onReset={handleReset} />
        </div>
      </div>
    </main>
  );
}

function Input({ title, imageSrc, value, onHandleChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1 relative">
      <label className="text-myGrey500 text-sm">{title}</label>
      <input
        type="text"
        value={value}
        onChange={onHandleChange}
        placeholder={value ? "" : placeholder}
        className="py-1 px-2 text-myGreen900 text-right bg-myGrey50 rounded-md outline-myGreen400"
      />
      <img src={imageSrc} className="absolute top-9 left-3" />
    </div>
  );
}

function TipPercent({ tips, onTipChange, isSelected, onCustomTipFocus }) {
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
          type="text"
          placeholder="Custom"
          value={0}
          className="text-right bg-myGrey50 rounded-md outline-myGreen400 cursor-pointer pr-2 text-myGreen900 hover:outline-3"
          onChange={(e) => onTipChange(Number(e.target.value))}
          onFocus={onCustomTipFocus}
        />
      </ul>
    </div>
  );
}

function PerPerson({ title, amount }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm">{title}</h4>
        <p className="text-xs text-myGrey400">/ person</p>
      </div>
      <h3 className="text-3xl text-myGreen400">${amount}</h3>
    </div>
  );
}

function Button({ bill, onReset }) {
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
