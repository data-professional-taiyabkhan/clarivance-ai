import logoIcon from "@/assets/clarivance_icon.svg";

type LogoProps = { variant?: "light" | "dark"; className?: string };

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="CLARIVANCE AI — Financial Intelligence">
      <img src={logoIcon} alt="" className="h-11 w-11 shrink-0" loading="eager" fetchPriority="high" />
      <div className="min-w-0 leading-none">
        <div
          className="font-serif text-[1.35rem] font-bold tracking-normal"
          style={{ color: isLight ? "white" : "var(--navy)" }}
        >
          CLARIVANCE <span style={{ color: "var(--teal)" }}>AI</span>
        </div>
        <div
          className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em]"
          style={{ color: isLight ? "rgba(255,255,255,0.7)" : "var(--slate-mid)" }}
        >
          Financial Intelligence
        </div>
      </div>
    </div>
  );
}
