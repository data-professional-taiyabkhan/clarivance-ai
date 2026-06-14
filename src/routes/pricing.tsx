import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge } from "@/components/ui-bits";
import { Check, X, Gift, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Free 90-day trial | CLARIVANCE AI" },
      { name: "description", content: "Simple plans from £66/mo. Every plan starts with a free 90-day trial. Cancel anytime." },
      { property: "og:title", content: "CLARIVANCE AI Pricing — Starter, Growth & Pro" },
      { property: "og:description", content: "Transparent pricing for UK sole traders and micro-businesses. Free 90-day trial." },
      { property: "og:url", content: SITE_URL + "/pricing" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/pricing" }],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter",
    stripeLink: "https://buy.stripe.com/5kQ5kCax10ls8XE3QnabK01",
    monthly: 66,
    audience: "For sole traders and freelancers",
    features: [
      "CashRadar™ 13-week forecast",
      "TaxShield™ MTD ITSA filing",
      "ActionFlow™ basic actions",
      "Xero & QuickBooks integration",
      "1 user",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    stripeLink: "https://buy.stripe.com/14AdR8ax19W2a1I3QnabK02",
    monthly: 124,
    audience: "For micro-businesses",
    features: [
      "Everything in Starter",
      "52-week extended forecast",
      "All integrations (Sage, FreeAgent, Open Banking)",
      "3 users",
      "Priority support",
      "Scenario modelling",
      "Accountant access",
    ],
    featured: true,
  },
  {
    name: "Pro",
    stripeLink: "https://buy.stripe.com/9B6bJ09sX2tA2zg0EbabK03",
    monthly: 249,
    audience: "For growth businesses & accountancy firms",
    features: [
      "Everything in Growth",
      "Unlimited users",
      "White-label API",
      "Multi-entity support",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
    ],
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
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg" style={{ color: "var(--slate-mid)" }}>
            Every plan starts with a free 90-day trial. Cancel anytime before it ends and you won't be charged.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-5 lg:px-8">
          <div className="rounded-2xl border-2 border-dashed border-gold bg-gold/10 p-7 text-center">
            <div className="inline-flex items-center gap-2 font-serif text-xl font-semibold" style={{ color: "var(--navy)" }}>
              <Gift className="h-5 w-5 text-gold" />
              Free 90-Day Trial on Every Plan
            </div>
            <p className="mt-2 text-sm" style={{ color: "var(--ink)" }}>
              Choose a plan to start your free trial — full access to every feature for 90 days.
              You won't be charged until your trial ends, and you can cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <ComparisonTable />
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
          <Sparkles className="mr-1 inline h-3 w-3" /> Most Popular
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
          £{plan.monthly}
        </span>
        <span className={`text-sm ${plan.featured ? "text-white/60" : ""}`} style={!plan.featured ? { color: "var(--slate-mid)" } : undefined}>
          /mo
        </span>
      </div>
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
        <a
          href={plan.stripeLink}
          className="inline-flex w-full items-center justify-center rounded-xl bg-gold px-6 py-3.5 text-base font-semibold shadow-md transition-all hover:brightness-105 hover:shadow-lg"
          style={{ color: "var(--navy)" }}
        >
          Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        <p
          className="mt-2.5 text-center text-xs"
          style={{ color: plan.featured ? "rgba(255,255,255,0.65)" : "var(--slate-mid)" }}
        >
          Free for 90 days, then £{plan.monthly}/mo · cancel anytime
        </p>
      </div>
    </div>
  );
}

function ComparisonTable() {
  const rows: { feature: string; values: (boolean | string)[] }[] = [
    { feature: "AI cash flow forecasting", values: [true, false, true, false] },
    { feature: "MTD ITSA filing", values: [true, "Add-on", false, "Limited"] },
    { feature: "Real-time tax ring-fencing", values: [true, false, false, false] },
    { feature: "Behavioural Financial DNA Engine", values: [true, false, false, false] },
    { feature: "Weekly prescriptive actions", values: [true, false, false, false] },
    { feature: "Open Banking integration", values: [true, true, true, true] },
    { feature: "Built specifically for UK sole traders", values: [true, false, false, true] },
    { feature: "Free 90-day trial", values: [true, "30 days", "14 days", "30 days"] },
  ];
  const cols = ["CLARIVANCE AI", "Xero / QuickBooks", "Float / Futrli", "Coconut / Plata"];
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <EyebrowBadge>Comparison</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold lg:text-5xl" style={{ color: "var(--navy)" }}>
          How we compare
        </h2>
      </div>
      <div className="mt-12 overflow-x-auto rounded-2xl border border-border card-elevated">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-mist">
            <tr>
              <th className="px-5 py-4 text-left font-serif text-base font-semibold" style={{ color: "var(--navy)" }}>Feature</th>
              {cols.map((c, i) => (
                <th key={c} className={`px-5 py-4 text-center font-serif text-base font-semibold ${i === 0 ? "bg-gold/15 text-navy" : ""}`} style={{ color: "var(--navy)" }}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.map((r) => (
              <tr key={r.feature} className="border-t border-border">
                <td className="px-5 py-4 font-medium" style={{ color: "var(--ink)" }}>{r.feature}</td>
                {r.values.map((v, i) => (
                  <td key={i} className={`px-5 py-4 text-center ${i === 0 ? "bg-gold/5" : ""}`}>
                    {typeof v === "boolean" ? (
                      v ? <Check className="mx-auto h-5 w-5 text-teal" /> : <X className="mx-auto h-5 w-5 text-slate-mid/50" />
                    ) : (
                      <span className="text-xs font-medium" style={{ color: "var(--slate-mid)" }}>{v}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do I need to switch from Xero or QuickBooks?", a: "No. CLARIVANCE AI sits alongside your existing accounting software, pulling in your data via secure API. Keep using Xero or QuickBooks as you do today — we add the intelligence layer on top." },
    { q: "What is Making Tax Digital?", a: "Making Tax Digital (MTD) is HMRC's mandate requiring digital record-keeping and quarterly digital tax submissions. From April 2026, sole traders earning above £50,000 must comply. CLARIVANCE AI handles your MTD ITSA submissions in one click." },
    { q: "Is my financial data safe?", a: "Yes. All data is stored in AWS London (eu-west-2), UK GDPR compliant, encrypted at rest and in transit. We are an FCA-regulated Open Banking participant. Your data never leaves the UK." },
    { q: "What happens after my 90-day trial?", a: "Your free trial gives you full access for 90 days. We'll email you 14 days before it ends. If you do nothing, your plan simply continues at its monthly price — and you can cancel anytime before the trial ends so you're never charged." },
    { q: "Can my accountant access the platform?", a: "Yes. Growth and Pro plans include accountant access at no extra cost. Your accountant gets a dedicated view to review submissions, approve filings and download year-end exports." },
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
