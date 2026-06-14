// Shared SVG illustration components for dashboards

export function CashFlowChart() {
  return (
    <svg viewBox="0 0 400 180" className="w-full" aria-hidden>
      <defs>
        <linearGradient id="cfFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.08 210)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="oklch(0.55 0.08 210)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="20" x2="380" y1={30 + i * 40} y2={30 + i * 40} stroke="white" strokeOpacity="0.06" />
      ))}
      {/* Tax line (gold dashed) */}
      <path d="M20 110 L80 105 L140 100 L200 95 L260 88 L320 82 L380 78"
        stroke="oklch(0.75 0.12 85)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      {/* Cash forecast (teal) */}
      <path d="M20 80 L60 70 L100 75 L140 55 L180 60 L220 45 L260 50 L300 35 L340 40 L380 25"
        stroke="oklch(0.55 0.08 210)" strokeWidth="2.5" fill="none" />
      <path d="M20 80 L60 70 L100 75 L140 55 L180 60 L220 45 L260 50 L300 35 L340 40 L380 25 L380 170 L20 170 Z"
        fill="url(#cfFill)" />
      {/* end dot */}
      <circle cx="380" cy="25" r="5" fill="oklch(0.75 0.12 85)" />
      <circle cx="380" cy="25" r="9" fill="oklch(0.75 0.12 85)" fillOpacity="0.25" />
    </svg>
  );
}

export function CashWarningChart() {
  return (
    <svg viewBox="0 0 400 180" className="w-full" aria-hidden>
      <defs>
        <linearGradient id="cw" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.08 210)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.55 0.08 210)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="20" x2="380" y1={30 + i * 40} y2={30 + i * 40} stroke="white" strokeOpacity="0.06" />
      ))}
      <path d="M20 60 L60 55 L100 70 L140 80 L180 110 L220 130 L260 115 L300 95 L340 70 L380 50"
        stroke="oklch(0.55 0.08 210)" strokeWidth="2.5" fill="none" />
      <path d="M20 60 L60 55 L100 70 L140 80 L180 110 L220 130 L260 115 L300 95 L340 70 L380 50 L380 170 L20 170 Z"
        fill="url(#cw)" />
      {/* warning marker */}
      <circle cx="220" cy="130" r="6" fill="oklch(0.62 0.20 25)" />
      <circle cx="220" cy="130" r="11" fill="oklch(0.62 0.20 25)" fillOpacity="0.25" />
      <text x="232" y="128" fill="oklch(0.78 0.15 25)" fontSize="10" fontFamily="Inter, sans-serif">
        ⚠ Week 22 dip
      </text>
      <circle cx="380" cy="50" r="5" fill="oklch(0.75 0.12 85)" />
    </svg>
  );
}
