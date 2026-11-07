const specialties =
  "Weddings · Portraits · Maternity · Unscripted family stories · Lagos & beyond";

export default function SpecialtyTicker() {
  return (
    <div
      aria-label={specialties}
      className="theme-border flex h-14 items-center overflow-hidden border-b bg-paper text-sm font-bold uppercase tracking-[0.15em] text-clay"
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