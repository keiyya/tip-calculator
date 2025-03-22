export default function Amount({ title, bill }) {
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
