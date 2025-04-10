import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [selectedTip, setSelectedTip] = useState(null);

  function handleBill(e) {
    setBill(e.target.value);
  }

  function handlePeople(e) {
    setPeople(e.target.value);
  }

  function handleTip(tipValue) {
    const numTip = parseFloat(tipValue);

    if (!isNaN(numTip)) {
      setTip(numTip);
      setSelectedTip(numTip);
    } else {
      setTip("");
      setSelectedTip(null);
    }
  }

  function handleReset() {
    setBill("");
    setPeople("");
    setTip("");
    setSelectedTip(null);
  }

  const total = bill * (1 + tip / 100);
  const tipAmount = total - bill;

  const tipPerPerson = people <= 0 ? "0" : (tipAmount / people).toFixed(2);
  const totalPerPerson = people <= 0 ? "0" : (total / people).toFixed(2);

  return (
    <>
      <h1 className="uppercase tracking-[0.4rem] text-center">
        Spli
        <br />
        tter
      </h1>

      <div className="bg-white p-5 rounded-md flex flex-col md:flex-row gap-5 w-[400px] md:w-[700px]">
        <Calculator
          onHandleBill={handleBill}
          onHandlePeople={handlePeople}
          onHandleTip={handleTip}
          selectedTip={selectedTip}
          bill={bill}
          people={people}
        />
        <TotalDisplay
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          onHandleReset={handleReset}
        />
      </div>
    </>
  );
}

function Calculator({
  onHandleBill,
  onHandlePeople,
  onHandleTip,
  selectedTip,
  bill,
  people,
}) {
  return (
    <div className="md:w-1/2">
      <CustomInput
        title="Bill"
        placeholder="0"
        onHandleChange={onHandleBill}
        value={bill}
      />
      <TipsPercentage onHandleTip={onHandleTip} selectedTip={selectedTip} />
      <CustomInput
        title="Number of people"
        placeholder="1"
        onHandleChange={onHandlePeople}
        value={people}
      />
    </div>
  );
}

function CustomInput({ title, placeholder, onHandleChange, value }) {
  return (
    <div className="flex flex-col space-y-2 my-4">
      <label className="text-xs">{title}</label>

      <input
        type="text"
        className="bg-green-50 outline-none p-2 rounded-md text-md text-right"
        placeholder={placeholder}
        onChange={onHandleChange}
        value={value}
      />
    </div>
  );
}

function TipsPercentage({ onHandleTip, selectedTip }) {
  const tips = [5, 10, 15, 25, 50];

  function handleCustomTip(e) {
    onHandleTip(e.target.value);
  }

  return (
    <div>
      <p className="text-xs mb-2">Select Tip %</p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {tips.map((tip, index) => (
          <Button
            title={tip}
            key={index}
            tipValue={tip}
            onHandleTip={onHandleTip}
            selectedTip={selectedTip}
          />
        ))}
        <input
          type="text"
          placeholder="Custom"
          className="text-right bg-green-50 rounded-md w-full p-2 outline-green"
          onChange={handleCustomTip}
          value={selectedTip === null ? "" : selectedTip}
        />
      </div>
    </div>
  );
}

function Button({ title, tipValue, onHandleTip, selectedTip }) {
  return (
    <button
      className={
        selectedTip === tipValue
          ? "bg-green text-green-900 p-2 w-full  rounded-md text-center cursor-pointer hover:bg-green-500"
          : "bg-green-900 text-white p-2 w-full  rounded-md text-center cursor-pointer hover:bg-green-500"
      }
      value={tipValue}
      onClick={() => onHandleTip(tipValue)}
    >
      {title}%
    </button>
  );
}

function TotalDisplay({ tipPerPerson, totalPerPerson, onHandleReset }) {
  return (
    <div className="bg-green-900 text-green flex flex-col justify-between p-5 rounded-md space-y-6 md:w-1/2">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-sm text-white">Tip Amount</h3>
            <p className="text-xs text-green-400">/ person</p>
          </div>
          <p>${tipPerPerson}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-sm text-white">Total</h3>
            <p className="text-xs text-green-400">/ person</p>
          </div>
          <p>${totalPerPerson}</p>
        </div>
      </div>

      <button
        className={
          totalPerPerson <= 0
            ? "bg-green-400 cursor-not-allowed text-green-900 p-2 w-full  rounded-md text-center mt-12 hover:bg-green-500 justify-self-end md:mt-0"
            : "bg-green cursor-pointer text-green-900 p-2 w-full  rounded-md text-center mt-12 hover:bg-green-500 justify-self-end md:mt-0"
        }
        onClick={totalPerPerson <= 0 ? "" : onHandleReset}
      >
        Reset
      </button>
    </div>
  );
}
