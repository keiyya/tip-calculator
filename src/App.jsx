import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState(1);

  return (
    <main>
      <h1 className="uppercase text-darkGrayishCyan font-bold">
        Spli <br /> tter
      </h1>
      <div className="bg-white p-7 rounded-md flex flex-col items-center justify-center gap-7 md:flex-row">
        <Calculator onSetBill={setBill} bill={bill} />
        <Display bill={bill} />
      </div>
    </main>
  );
}

export default App;

function Calculator({ onSetBill, bill }) {
  return (
    <div className="flex flex-col md:w-1/2">
      <CustomerInput
        title="Bill"
        imgSrc="images/icon-dollar.svg"
        onSetBill={onSetBill}
        bill={bill}
      />
      <Tips />
      <CustomerInput title="Number of People" imgSrc="images/icon-person.svg" />
    </div>
  );
}

function CustomerInput({ title, imgSrc, onSetBill, bill }) {
  return (
    <div className="flex flex-col space-y-1 relative my-5">
      <label className="text-sm text-grayishCyan">{title}</label>
      <input
        type="text"
        className="bg-lightCyan text-right text-veryDarkCyan "
        value={bill}
        placeholder="0"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
      <img src={imgSrc} className="w-3 absolute top-7 left-2" />
    </div>
  );
}

function Tips() {
  return (
    <div>
      <h2 className="text-sm text-darkGrayishCyan my-2">Select Tip%</h2>
      <div className="grid grid-cols-2 gap-2">
        <Button value={5} />
        <Button value={10} />
        <Button value={15} />
        <Button value={20} />
        <Button value={25} />
        <input
          value=""
          className="text-right text-veryDarkCyan outline-none"
          placeholder="Custom"
        />
      </div>
    </div>
  );
}

function Button({ value }) {
  return (
    <button className=" bg-veryDarkCyan text-white px-5 py-1 rounded-md hover:bg-strongCyan hover:text-veryDarkCyan">
      {value}%
    </button>
  );
}

function Display({ bill }) {
  return (
    <div className="bg-veryDarkCyan text-white flex flex-col p-6 rounded-md md:w-1/2">
      <div>
        <Amount title="Tip Amount" />
        <Amount title="Total" bill={bill} />
      </div>
      <Reset />
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
      <p className="text-3xl text-strongCyan">${bill}</p>
    </div>
  );
}

function Reset() {
  return (
    <div className="uppercase bg-strongCyan text-veryDarkCyan rounded-md text-center justify-end md:mt-[144px]">
      Reset
    </div>
  );
}
