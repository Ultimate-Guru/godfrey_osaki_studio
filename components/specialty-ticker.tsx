const specialties =
  "Weddings · Portraits · Unscripted family stories · Lagos & beyond";

export default function SpecialtyTicker() {
  return (
    <div
      aria-label={specialties}
      className="flex h-[30px] items-center overflow-hidden border-b border-[#e8e1da] bg-paper text-[6px] uppercase tracking-[1.7px] text-clay md:h-7"
    >
      <div className="flex w-max whitespace-nowrap" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <span className="pr-9" key={index}>
            {specialties}
          </span>
        ))}
      </div>
    </div>
  );
}
