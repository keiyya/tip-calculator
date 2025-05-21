export function PerPerson({ title, amount }) {
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
