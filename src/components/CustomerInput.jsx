export default function CustomerInput({ title, imgSrc, onChange, value }) {
  return (
    <div className="flex flex-col space-y-1 relative my-5">
      <label className="text-sm text-grayishCyan">{title}</label>
      <input
        type="number"
        className="bg-lightCyan text-right text-veryDarkCyan"
        placeholder="0"
        onChange={(e) => onChange(e.target.value || 0)}
        value={value}
        step="any"
      />
      <img src={imgSrc} className="w-3 absolute top-7 left-2" />
    </div>
  );
}
