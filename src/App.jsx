import { useState } from "react";
import Calculator from "./components/Calculator";
import Display from "./components/Display";

function App() {
  const [formData, setFormData] = useState({
    bill: "",
    people: 1,
    tipPercent: 0,
  });
  const [selectedId, setSelectedId] = useState(null);

  const handleChange = (key) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleTipClick = (tip) => {
    setFormData((prevData) => ({
      ...prevData,
      tipPercent: tip,
    }));
    setSelectedId(tip !== selectedId ? tip : null);
  };

  const { bill, people, tipPercent } = formData;

  const tip = (Number(bill) * tipPercent) / 100;
  const total = ((Number(bill) || 0) + tip) / people;
  const tipAmount = tip / people;

  const handleReset = () => {
    setFormData({
      bill: "",
      people: 1,
      tipPercent: 0,
    });
  };

  return (
    <main>
      <h1 className="uppercase text-darkGrayishCyan font-bold text-center mb-10">
        Spli <br /> tter
      </h1>
      <div className="bg-white p-7 rounded-md flex flex-col items-center justify-center gap-7 mx-6 md:flex-row max-w-[900px]">
        <Calculator
          formData={formData}
          handleChange={handleChange}
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
