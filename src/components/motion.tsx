import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";

/**
 * Motion for the product illustrations.
 *
 * Rule of thumb: words stay still, numbers move. Only the dashboard panels
 * animate, as if the product were working through real data, and each one
 * plays once when it scrolls into view. Headings and copy never animate.
 *
 * Phases (written to data-demo on the panel):
 *  - "pending": the server-rendered state. When JS is on (html.reveal-on, set
 *    before first paint) CSS shows the panel's start frame; with JS off the
 *    finished panel shows, so no-JS visitors and search engines see everything.
 *  - "armed":   as pending, and counters reset to zero. Only used when the
 *    numbers haven't been seen yet (off screen, hidden by a Reveal, or after a
 *    client-side page change), so a number on screen never jumps back to zero.
 *  - "play":    runs the sequence once the panel is in view.
 *  - "done":    finished, no animation (reduced motion, very old browsers).
 * The CSS for each phase lives in styles.css ("Product demos").
 */

export type DemoPhase = "pending" | "armed" | "play" | "done";

let hydrated = false;

/** Call once from the root component; marks the end of the first (hydration) render. */
export function useMarkHydrated() {
  useEffect(() => {
    hydrated = true;
    // Tells the safety net in the root <head> script that the app started.
    (window as Window & { __clvHydrated?: boolean }).__clvHydrated = true;
  }, []);
}

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function prefersReducedMotion() {
  return typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

function inViewport(el: Element) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
}

function hiddenByPendingReveal(el: Element) {
  return document.documentElement.classList.contains("reveal-on") && !!el.closest(".reveal:not(.is-visible)");
}

/**
 * Returns a ref for the panel and its phase. Put `data-demo={phase}` on the
 * same element; children opt in with data-demo-wipe / -pop / -rise / -bar / -pulse.
 */
export function useDemo<T extends HTMLElement>({ threshold = 0.4, delay = 120 } = {}) {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<DemoPhase>("pending");

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setPhase("done");
      return;
    }
    const numbersOnScreen = !hydrated && inViewport(el) && !hiddenByPendingReveal(el);
    if (!numbersOnScreen) setPhase("armed");

    let timer = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          timer = window.setTimeout(() => setPhase("play"), delay);
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return [ref, phase] as const;
}

/** Inline style helper for a step's start time within a panel's sequence. */
export function at(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties;
}

/**
 * A number that counts up from zero when its panel plays, if it was reset while
 * out of sight ("armed"). Otherwise it simply shows the final value.
 */
export function CountUp({
  to,
  phase,
  prefix = "",
  delay = 0,
  duration = 1100,
}: {
  to: number;
  phase: DemoPhase;
  prefix?: string;
  delay?: number;
  duration?: number;
}) {
  const [shown, setShown] = useState(to);
  const wasReset = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (phase === "armed") {
      wasReset.current = true;
      setShown(0);
    }
    if (phase !== "play" || !wasReset.current) return;
    let raf = 0;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - start) / duration));
      setShown(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase, to, delay, duration]);

  return <span className="demo-count">{prefix + Math.round(shown).toLocaleString("en-GB")}</span>;
}
