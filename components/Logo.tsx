// Molecule mark from the Caspi Polymer brand, drawn in currentColor so it
// works on both light and dark backgrounds.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="44"
        height="36"
        viewBox="0 0 44 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M8 12 16 7.5l8 4.5v9l-8 4.5-8-4.5z" />
        <path d="M10.5 13.5 16 10.4" />
        <path d="M24 21l8 4.5M24 12l8-4.5" />
        <path d="M22.5 22.8 29 26.5" />
        <path d="M16 7.5V1M32 7.5V1M16 25.5V35M32 25.5V35M8 12 2 9M8 21l-6 3" strokeDasharray="2.5 2.5" />
        <g fill="#f2a33a" stroke="none">
          <circle cx="16" cy="7.5" r="2.2" />
          <circle cx="8" cy="12" r="2.2" />
          <circle cx="8" cy="21" r="2.2" />
          <circle cx="16" cy="25.5" r="2.2" />
          <circle cx="24" cy="21" r="2.2" />
          <circle cx="24" cy="12" r="2.2" />
          <circle cx="32" cy="7.5" r="2.2" />
          <circle cx="32" cy="25.5" r="2.2" />
        </g>
      </svg>
      <span className="font-display text-[13px] font-semibold tracking-[0.18em] sm:text-[17px]">
        CASPI POLYMER
      </span>
    </span>
  );
}
