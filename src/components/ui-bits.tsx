import { Link } from "@tanstack/react-router";
import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Reveal — fades and rises its children into view on scroll.
 *
 * SSR-safe: the initial hidden state only applies when the document has the
 * `reveal-on` class (added by a tiny inline script in the root head, before
 * paint). With JS disabled the class is never added, so content stays visible.
 * Honours prefers-reduced-motion via the CSS in styles.css.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reveal immediately if already in view on mount (or if IO is unavailable).
    // This guarantees above-the-fold content is never left hidden.
    const inView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    if (typeof IntersectionObserver === "undefined" || inView()) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    // Safety net: if IO never reports (rare/edge environments), reveal anyway
    // so content can never remain permanently invisible.
    const fallback = window.setTimeout(() => setVisible(true), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  variant = "white",
  className = "",
  id,
}: {
  children: ReactNode;
  variant?: "white" | "mist" | "navy";
  className?: string;
  id?: string;
}) {
  const bg =
    variant === "navy"
      ? "gradient-navy text-white"
      : variant === "mist"
        ? "bg-mist"
        : "bg-background";
  return (
    <section id={id} className={`${bg} py-20 lg:py-28 ${className}`} style={variant === "mist" ? { background: "var(--mist)" } : undefined}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

export function EyebrowBadge({ children, tone = "teal" }: { children: ReactNode; tone?: "teal" | "gold" | "white" }) {
  const styles =
    tone === "gold"
      ? "bg-gold/15 text-gold border-gold/30"
      : tone === "white"
        ? "bg-white/10 text-white border-white/20"
        : "bg-teal/10 text-teal border-teal/25";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase ${styles}`}>
      {children}
    </span>
  );
}

export function PrimaryCTA({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3.5 text-base font-semibold shadow-md transition-all hover:brightness-105 hover:shadow-lg"
      style={{ color: "var(--navy)" }}
    >
      {children}
    </Link>
  );
}

export function OutlineCTA({
  to,
  children,
  variant = "dark",
}: {
  to: string;
  children: ReactNode;
  variant?: "dark" | "light";
}) {
  const styles =
    variant === "light"
      ? "border-white/40 text-white hover:bg-white/10"
      : "border-navy/20 text-navy hover:bg-navy/5";
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-xl border-2 px-6 py-3.5 text-base font-semibold transition-all ${styles}`}
      style={variant === "dark" ? { color: "var(--navy)", borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)" } : undefined}
    >
      {children}
    </Link>
  );
}
