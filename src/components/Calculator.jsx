import CustomerInput from "./CustomerInput";

import Tips from "./Tips";

export default function Calculator({
  formData,
  handleChange,
  handleTipClick,
  selectedId,
}) {
  return (
    <div className="flex flex-col md:w-1/2">
      <CustomerInput
        title="Bill"
        imgSrc="images/icon-dollar.svg"
        onChange={handleChange("bill")}
        value={formData.bill}
      />
      <Tips handleTipClick={handleTipClick} selectedId={selectedId} />
      <CustomerInput
        title="Number of People"
        imgSrc="images/icon-person.svg"
        onChange={handleChange("people")}
        value={formData.people}
      />
    </div>
  );
}
