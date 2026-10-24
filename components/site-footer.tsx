export default function SiteFooter() {
  return (
    <footer
      className="min-h-[122px] bg-[#1d1a19] px-[6vw] py-7 text-[#f7f2ec] md:px-[3.2vw] md:pb-[22px] md:pt-[25px]"
      id="contact"
    >
      <a
        className="inline-flex flex-col font-serif text-[17px] leading-[0.95] tracking-[-0.8px]"
        href="#top"
      >
        Godfrey Osaki
        <span className="mt-1 text-center font-sans text-[5px] tracking-[3px]">
          STUDIOS
        </span>
      </a>
      <p className="my-[14px] text-[6px] uppercase tracking-[1.2px]">
        Made in Lagos, Nigeria · Available globally
      </p>
      <div className="flex items-center gap-3.5" aria-label="Social media">
        <a
          className="grid h-[13px] w-[13px] place-items-center"
          href="https://www.instagram.com/"
          aria-label="Instagram"
        >
          <svg
            className="h-3 w-3 fill-none stroke-current stroke-[1.6]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle className="fill-current stroke-none" cx="17.7" cy="6.8" r="1" />
          </svg>
        </a>
        <a
          className="grid h-[13px] w-[13px] place-items-center text-xs font-bold"
          href="https://www.pinterest.com/"
          aria-label="Pinterest"
        >
          P
        </a>
      </div>
    </footer>
  );
}
