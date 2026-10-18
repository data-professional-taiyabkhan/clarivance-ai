import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white" style={{ background: "var(--navy)" }}>
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              What's safe to spend, after tax — for UK sole traders and landlords.
              In development; launching September 2027.
            </p>
          </div>

          <FooterCol title="Product" links={[
            { to: "/product", label: "Features" },
            { to: "/pricing", label: "Pricing" },
            { to: "/resources", label: "MTD Guide" },
            { to: "/contact", label: "Join Waitlist" },
          ]} />
          <FooterCol title="Company" links={[
            { to: "/about", label: "About" },
            { to: "/about", hash: "founder", label: "Founders" },
            { to: "/faq", label: "FAQ" },
            { to: "/contact", label: "Contact" },
          ]} />
          <FooterCol title="Legal" links={[
            { to: "/privacy", label: "Privacy Policy" },
            { to: "/terms", label: "Terms of Service" },
            { to: "/cookies", label: "Cookie Policy" },
          ]} />
        </div>

        <div className="mt-14 space-y-3 border-t border-white/10 pt-8 text-sm text-white/60">
          <p>© {new Date().getFullYear()} CLARIVANCE AI Ltd. All rights reserved.</p>
          <p className="text-xs leading-relaxed text-white/50">
            CLARIVANCE AI Ltd is registered in England and Wales, company number 15505955.
            Registered office: Office Number 8891, 182–184 High Street North, London E6 2JA.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; hash?: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              to={l.to}
              hash={l.hash}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
