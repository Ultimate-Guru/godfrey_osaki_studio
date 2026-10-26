const specialties =
  "Weddings · Portraits · Maternity · Graduation · Marriage · Unscripted family stories · Lagos & beyond";

export default function SpecialtyTicker() {
  return (
    <div
      aria-label={specialties}
      className="flex h-10 items-center overflow-hidden border-b border-[#e8e1da] bg-paper text-xs uppercase tracking-[0.15em] text-clay"
    >
      <div className="ticker-track flex w-max whitespace-nowrap" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span className="pr-10" key={index}>
            {specialties}
          </span>
        ))}
      </div>
    </div>
  );
}