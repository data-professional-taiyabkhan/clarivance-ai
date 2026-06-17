import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/product", label: "Product" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "MTD Guide" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Skip-to-content link for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg"
        style={{ color: "var(--navy)" }}
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all ${
          scrolled ? "bg-white/90 border-b border-border" : "bg-white/70"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <Link to="/" aria-label="CLARIVANCE AI home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-ink transition-colors hover:text-teal"
                activeProps={{ style: { color: "var(--teal)" } }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition-all hover:brightness-105 hover:shadow-md"
              style={{ color: "var(--navy)" }}
            >
              Join Waitlist
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-white md:hidden">
            <div className="flex flex-col px-5 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="py-3 text-base font-medium text-ink"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-gold px-4 py-3 text-sm font-semibold"
                style={{ color: "var(--navy)" }}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
