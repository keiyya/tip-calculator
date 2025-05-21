import { useState } from "react";
import DollarIcon from "../src/assets/images/icon-dollar.svg";
import PersonIcon from "../src/assets/images/icon-person.svg";
import { Button } from "./components/Button";
import { PerPerson } from "./components/PerPerson";
import { TipPercent } from "./components/TipPercent";
import { Input } from "./components/Input";

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
