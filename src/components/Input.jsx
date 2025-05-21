export function Input({ title, imageSrc, value, onHandleChange, placeholder }) {
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
