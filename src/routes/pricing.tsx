import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge } from "@/components/ui-bits";
import { Check, Sparkles, ArrowRight, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — planned plans from £14/month | CLARIVANCE AI" },
      { name: "description", content: "Planned pricing from launch in September 2027: Essentials £14/month, Plus £29/month, Practice £8 per active client. Paid pilot from May 2027 at £9/month." },
      { property: "og:title", content: "CLARIVANCE AI Pricing — Essentials, Plus & Practice" },
      { property: "og:description", content: "Planned pricing from launch in September 2027, with a paid pilot from May 2027." },
      { property: "og:url", content: SITE_URL + "/pricing" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/pricing" }],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Essentials",
    price: "£14",
    unit: "/month",
    annual: "or £140 a year",
    audience: "For sole traders with one main source of self-employed income",
    features: [
      "One bank connection",
      "Cash forecast, 13 to 52 weeks",
      "Tax reserve and safe-to-spend figure",
      "Weekly actions",
    ],
    cta: "Join the waitlist",
    note: "Planned price from launch · 14-day free trial",
    featured: false,
  },
  {
    name: "Plus",
    price: "£29",
    unit: "/month",
    annual: "or £290 a year",
    audience: "For landlords, mixed incomes and higher earners near a threshold",
    features: [
      "Everything in Essentials",
      "Up to five bank connections",
      "Property income and PAYE income alongside",
      "High Income Child Benefit Charge and student loan",
      "What-if scenarios",
      "Read-only sharing with your accountant",
      "Accounting software link (planned for 2028)",
      "MTD filing once HMRC recognises Clarivance (planned for 2028)",
    ],
    cta: "Join the waitlist",
    note: "Planned price from launch · 14-day free trial",
    featured: true,
  },
  {
    name: "Practice",
    price: "£8",
    unit: "/client/month",
    annual: "per active client, minimum ten clients",
    audience: "For accountancy and bookkeeping practices",
    features: [
      "Client dashboard",
      "Reserve reports under your practice's name",
      "Alerts for clients heading for a shortfall",
      "Each client gets the Plus feature set",
    ],
    cta: "Register your practice's interest",
    note: "Planned price from launch",
    featured: false,
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="bg-mist py-20 lg:py-28" style={{ background: "var(--mist)" }}>
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <EyebrowBadge>Pricing</EyebrowBadge>
          <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-balance lg:text-6xl" style={{ color: "var(--navy)" }}>
            Planned pricing
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg" style={{ color: "var(--slate-mid)" }}>
            Prices from launch in September 2027. Before then, a small paid pilot runs from May to August 2027.
            Planned prices may change after the pilot.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-5 lg:px-8">
          <div className="rounded-2xl border-2 border-dashed border-gold bg-gold/10 p-7 text-center">
            <div className="inline-flex items-center gap-2 font-serif text-xl font-semibold" style={{ color: "var(--navy)" }}>
              <FlaskConical className="h-5 w-5 text-gold" />
              Paid pilot: £9 a month, May to August 2027
            </div>
            <p className="mt-2 text-sm" style={{ color: "var(--ink)" }}>
              For 10 to 15 businesses, using the product as built at the time. Pilot businesses agree to give
              feedback. Join the waitlist to hear when applications open.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </section>

      <FAQ />
    </SiteLayout>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <div className={`relative flex flex-col rounded-2xl p-8 transition-all ${
      plan.featured
        ? "gradient-navy text-white ring-2 ring-gold ring-gold-glow"
        : "border border-border bg-white card-elevated"
    }`}>
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap" style={{ color: "var(--navy)" }}>
          <Sparkles className="mr-1 inline h-3 w-3" /> Most complete
        </span>
      )}
      <h3 className={`font-serif text-2xl font-semibold ${plan.featured ? "text-white" : ""}`} style={!plan.featured ? { color: "var(--navy)" } : undefined}>
        {plan.name}
      </h3>
      <p className={`mt-1 text-sm ${plan.featured ? "text-white/70" : ""}`} style={!plan.featured ? { color: "var(--slate-mid)" } : undefined}>
        {plan.audience}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className={`font-serif text-5xl font-semibold ${plan.featured ? "text-gold" : ""}`} style={!plan.featured ? { color: "var(--navy)" } : undefined}>
          {plan.price}
        </span>
        <span className={`text-sm ${plan.featured ? "text-white/60" : ""}`} style={!plan.featured ? { color: "var(--slate-mid)" } : undefined}>
          {plan.unit}
        </span>
      </div>
      <p className={`mt-1 text-xs ${plan.featured ? "text-white/60" : ""}`} style={!plan.featured ? { color: "var(--slate-mid)" } : undefined}>
        {plan.annual}
      </p>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.featured ? "text-gold" : "text-teal"}`} />
            <span className={plan.featured ? "text-white/85" : ""} style={!plan.featured ? { color: "var(--ink)" } : undefined}>
              {f}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          to="/contact"
          className="inline-flex w-full items-center justify-center rounded-xl bg-gold px-6 py-3.5 text-base font-semibold shadow-md transition-all hover:brightness-105 hover:shadow-lg"
          style={{ color: "var(--navy)" }}
        >
          {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <p
          className="mt-2.5 text-center text-xs"
          style={{ color: plan.featured ? "rgba(255,255,255,0.65)" : "var(--slate-mid)" }}
        >
          {plan.note}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do I need to switch from Xero or QuickBooks?", a: "No. Clarivance is being built to sit alongside your bank and accounting software. It will read your bank account (read-only) through Open Banking. Links to Xero, QuickBooks and FreeAgent are planned for 2028." },
    { q: "What is Making Tax Digital?", a: "MTD for Income Tax requires sole traders and landlords to keep digital records and send HMRC quarterly updates through recognised software. It applies above £50,000 from April 2026, above £30,000 from April 2027 and above £20,000 from April 2028. Clarivance won't file for you at launch: filing is planned for 2028, once HMRC recognises Clarivance. Until then, keep using your current filing software." },
    { q: "Is my financial data safe?", a: "Clarivance will be read-only: it can see transactions but can never move money. Bank connections will go through an FCA-authorised Open Banking provider, and customer data will be held in the UK." },
    { q: "Is there a free trial?", a: "Yes, a 14-day free trial from launch in September 2027. The pilot (May to August 2027) is paid, at £9 a month." },
    { q: "Can my accountant see my figures?", a: "On the Plus plan you'll be able to share a read-only view with your accountant. Practices can use the Practice plan to see their clients' reserve positions on one screen." },
  ];
  return (
    <Section variant="mist">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <EyebrowBadge>FAQ</EyebrowBadge>
          <h2 className="mt-5 font-serif text-4xl font-semibold lg:text-5xl" style={{ color: "var(--navy)" }}>
            Common questions
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-white p-6 card-elevated">
              <summary className="flex cursor-pointer items-center justify-between font-serif text-lg font-semibold" style={{ color: "var(--navy)" }}>
                {f.q}
                <span className="ml-4 text-2xl text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--slate-mid)" }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
