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
              AI-powered financial intelligence for UK sole traders and micro-businesses.
              Cash flow, tax, and action — in one platform.
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
            { to: "/about", label: "Founder" },
            { to: "/faq", label: "FAQ" },
            { to: "/contact", label: "Contact" },
          ]} />
          <FooterCol title="Legal" links={[
            { to: "/", label: "Privacy" },
            { to: "/", label: "Terms" },
            { to: "/", label: "Cookies" },
          ]} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CLARIVANCE AI Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>🇬🇧 UK data — AWS London</span>
            <span>🔒 UK GDPR Compliant</span>
            <span>✅ HMRC MTD Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-sm text-white/75 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
