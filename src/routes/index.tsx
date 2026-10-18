import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge, PrimaryCTA, OutlineCTA, Reveal } from "@/components/ui-bits";
import { CashFlowChart } from "@/components/Charts";
import { ArrowRight, ShieldCheck, Radar, Zap, Wallet, Calendar } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLARIVANCE AI — Know what's safe to spend, after tax" },
      { name: "description", content: "CLARIVANCE AI is building software for UK sole traders and landlords that shows one figure they can act on: how much they can safely spend after the tax they are building up. Launching September 2027." },
      { property: "og:title", content: "CLARIVANCE AI — Know your cash. Never miss your tax." },
      { property: "og:description", content: "What's safe to spend, after tax — for UK sole traders and landlords. Join the waitlist." },
      { property: "og:url", content: SITE_URL + "/" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CLARIVANCE AI",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          description:
            "In development: software for UK sole traders and landlords that shows how much they can safely spend after the tax they are building up. Launching September 2027.",
          url: SITE_URL,
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <StatsStrip />
      <Problems />
      <Modules />
      <WhyDifferent />
      <Integrations />
      <FounderQuote />
      <WaitlistCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px]" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklab, var(--teal) 12%, transparent), transparent 70%)"
      }} />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <EyebrowBadge tone="gold">🚀 Now accepting waitlist sign-ups · Launching September 2027</EyebrowBadge>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl" style={{ color: "var(--navy)" }}>
            Know your cash. <br className="hidden md:block" />
            <span className="text-teal">Never miss your tax.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-balance" style={{ color: "var(--slate-mid)" }}>
            CLARIVANCE AI is building one figure UK sole traders and landlords can act on: how much
            they can safely spend this week, next month and at quarter-end, after the tax they are
            building up has been set aside.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryCTA to="/contact">Join the Waitlist — Free</PrimaryCTA>
            <OutlineCTA to="/product">See How It Will Work <ArrowRight className="ml-2 h-4 w-4" /></OutlineCTA>
          </div>
          <p className="mt-5 text-sm" style={{ color: "var(--slate-mid)" }}>
            Free to join · No credit card required
          </p>
        </div>

        <Reveal className="mx-auto mt-16 max-w-5xl">
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-2xl gradient-navy p-6 shadow-2xl ring-1 ring-white/10 lg:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="text-xs uppercase tracking-widest text-white/50">Illustration · not real data</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricTile label="Safe to spend today" value="£3,120" delta="after your tax reserve" tone="success" icon={<Wallet className="h-4 w-4" />} />
        <MetricTile label="Tax reserve" value="£8,640" delta="for 31 January" tone="warning" icon={<ShieldCheck className="h-4 w-4" />} />
        <MetricTile label="This week" value="Chase invoice 47" delta="this customer usually pays in 40 days" tone="teal" icon={<Zap className="h-4 w-4" />} />
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Cash after tax — next 52 weeks (illustration)</span>
          <div className="flex gap-3 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-teal" /> Cash</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gold" /> Tax due</span>
          </div>
        </div>
        <CashFlowChart />
      </div>
    </div>
  );
}

function MetricTile({
  label, value, delta, tone, icon,
}: { label: string; value: string; delta: string; tone: "success" | "warning" | "teal"; icon: React.ReactNode }) {
  const accent =
    tone === "success" ? "text-green-400" : tone === "warning" ? "text-gold" : "text-teal-soft";
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between text-white/60">
        <span className="text-xs uppercase tracking-wider">{label}</span>
        <span className={accent}>{icon}</span>
      </div>
      <div className="mt-2 font-serif text-3xl font-semibold text-white">{value}</div>
      <div className={`mt-1.5 text-xs font-medium ${accent}`}>{delta}</div>
    </div>
  );
}

function StatsStrip() {
  const stats = [
    { v: "4.53M", l: "self-employed people in the UK (ONS, 2026)" },
    { v: "2.88M", l: "unincorporated landlords (HMRC, 2026)" },
    { v: "~1M", l: "missed the January 2026 Self Assessment deadline (HMRC)" },
    { v: "~970k", l: "more people join MTD for Income Tax in April 2027 (HMRC)" },
  ];
  return (
    <section className="gradient-navy py-14 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-serif text-4xl font-semibold text-gold lg:text-5xl">{s.v}</div>
            <div className="mt-1.5 text-sm text-white/70">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problems() {
  const problems = [
    { e: "💸", t: "Tax isn't taken at source", d: "It builds up quietly through the year and falls due in two lumps, on 31 January and 31 July, often with a payment on account added on top." },
    { e: "📋", t: "MTD reaches more people in April 2027", d: "Making Tax Digital for Income Tax applies above £50,000 from April 2026, above £30,000 from April 2027 and above £20,000 from April 2028." },
    { e: "😱", t: "The first bill is the biggest shock", d: "Once a bill is over £1,000, HMRC also asks for payments on account. A first profitable year can mean a January payment of one and a half times the year's tax." },
    { e: "🔍", t: "Today's tools look backwards", d: "Bank tax pots use a flat percentage you pick. Accounting software shows the year so far. Neither tells you what the rest of the year will cost in tax." },
  ];
  return (
    <Section variant="mist">
      <Reveal className="mx-auto max-w-3xl text-center">
        <EyebrowBadge>The problem</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance lg:text-5xl" style={{ color: "var(--navy)" }}>
          Self-employed people can't see how much of their money is theirs.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {problems.map((p, i) => (
          <Reveal key={p.t} delay={i * 70} className="h-full">
          <div className="h-full rounded-2xl border border-border bg-white p-7 card-elevated transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="text-3xl">{p.e}</div>
            <h3 className="mt-4 font-serif text-xl font-semibold" style={{ color: "var(--navy)" }}>{p.t}</h3>
            <p className="mt-2.5 leading-relaxed" style={{ color: "var(--slate-mid)" }}>{p.d}</p>
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Modules() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-3xl text-center">
        <EyebrowBadge>How it will work</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance lg:text-5xl" style={{ color: "var(--navy)" }}>
          One number you can act on — and the three views behind it.
        </h2>
      </Reveal>

      <Reveal className="mt-14 grid gap-7 lg:grid-cols-3">
        <ModuleCard
          icon={<Radar className="h-6 w-6" />}
          name="CashRadar™"
          tagline="Cash-flow forecast"
          desc="Your cash position for the next 13 to 52 weeks, shown as a range of likely outcomes and learned from your own bank history."
        />
        <ModuleCard
          featured
          icon={<ShieldCheck className="h-6 w-6" />}
          name="TaxShield™"
          tagline="Tax position and reserve"
          desc="Works out the tax you are building up and recommends how much to keep aside, so January and July don't come as a shock."
        />
        <ModuleCard
          icon={<Zap className="h-6 w-6" />}
          name="ActionFlow™"
          tagline="Weekly actions"
          desc="A short weekly list of plain-English actions, such as which invoice to chase, based on your own numbers."
        />
      </Reveal>
    </Section>
  );
}

function ModuleCard({
  icon, name, tagline, desc, featured,
}: { icon: React.ReactNode; name: string; tagline: string; desc: string; featured?: boolean }) {
  return (
    <div className={`relative rounded-2xl p-8 transition-all hover:-translate-y-1 ${
      featured
        ? "gradient-navy text-white ring-2 ring-gold ring-gold-glow"
        : "border border-border bg-white card-elevated hover:shadow-lg"
    }`}>
      {featured && (
        <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--navy)" }}>
          Flagship
        </span>
      )}
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
        featured ? "bg-gold/20 text-gold" : "bg-teal/10 text-teal"
      }`}>
        {icon}
      </div>
      <h3 className={`mt-5 font-serif text-2xl font-semibold ${featured ? "text-white" : ""}`} style={!featured ? { color: "var(--navy)" } : undefined}>
        {name}
      </h3>
      <p className={`mt-1 text-sm font-semibold ${featured ? "text-gold" : "text-teal"}`}>
        {tagline}
      </p>
      <p className={`mt-4 leading-relaxed ${featured ? "text-white/80" : ""}`} style={!featured ? { color: "var(--slate-mid)" } : undefined}>
        {desc}
      </p>
    </div>
  );
}

function WhyDifferent() {
  const items = [
    { n: "01", t: "Built around your whole year", d: "Income tax is worked out on the year as a whole. Clarivance is being designed around that, not around a flat percentage." },
    { n: "02", t: "A reserve you can rely on", d: "It recommends how much to keep aside and tells you why the figure changed. Every figure is labelled as an estimate." },
    { n: "03", t: "Payment dates built in", d: "31 January and 31 July, including payments on account, are part of the picture from the start." },
    { n: "04", t: "Read-only by design", d: "Clarivance will never move your money. You keep your bank and your accounting software." },
  ];
  return (
    <Section variant="navy">
      <Reveal className="mx-auto max-w-3xl text-center">
        <EyebrowBadge tone="white">Why it's different</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance text-white lg:text-5xl">
          Safe to spend, after tax
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
          Bank tax pots use a flat percentage. Accounting software shows the year so far.
          Clarivance is being built to show what's yours to spend.
        </p>
      </Reveal>

      <Reveal className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <div className="font-serif text-3xl font-semibold text-gold">{it.n}</div>
            <h3 className="mt-3 font-serif text-lg font-semibold text-white">{it.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{it.d}</p>
          </div>
        ))}
      </Reveal>

      <div className="mt-12 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold">
          <Calendar className="h-4 w-4" />
          In development · Paid pilot planned from May 2027
        </div>
      </div>
    </Section>
  );
}

function Integrations() {
  const connections = [
    { t: "Your bank, through Open Banking", w: "From the pilot, 2027" },
    { t: "Xero, QuickBooks and FreeAgent (read-only)", w: "Planned for 2028" },
    { t: "HMRC Making Tax Digital", w: "Planned for 2028, once HMRC recognises Clarivance" },
  ];
  return (
    <Section variant="mist">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-semibold lg:text-4xl" style={{ color: "var(--navy)" }}>
          Planned connections
        </h2>
        <p className="mt-4" style={{ color: "var(--slate-mid)" }}>
          Clarivance will sit alongside the bank and accounting software you already use. Nothing to switch.
        </p>
      </Reveal>
      <Reveal className="mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-3">
        {connections.map((c) => (
          <div key={c.t} className="rounded-2xl border border-border bg-white px-5 py-4 text-center shadow-sm">
            <div className="text-sm font-semibold" style={{ color: "var(--navy)" }}>{c.t}</div>
            <div className="mt-1 text-xs" style={{ color: "var(--slate-mid)" }}>{c.w}</div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

function FounderQuote() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-border bg-white p-10 card-elevated lg:p-14">
          <div className="font-serif text-5xl leading-none text-gold">"</div>
          <blockquote className="mt-2 font-serif text-2xl leading-relaxed text-balance lg:text-3xl" style={{ color: "var(--navy)" }}>
            I've worked with over 30 sole trader clients. Every single one has been caught
            out by an unexpected tax bill or a cash crunch they didn't see coming.
            That's the problem CLARIVANCE AI is being built to solve.
          </blockquote>
          <div className="mt-7 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full font-serif text-lg font-bold text-white gradient-teal-navy">
              VC
            </div>
            <div>
              <div className="font-semibold" style={{ color: "var(--navy)" }}>Vinutha Chandrashekara</div>
              <div className="text-sm" style={{ color: "var(--slate-mid)" }}>Co-founder & CEO, CLARIVANCE AI</div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function WaitlistCTA() {
  return (
    <section className="relative gradient-navy py-20 text-white lg:py-28">
      <div className="absolute inset-0 -z-0 opacity-30" style={{
        background: "radial-gradient(ellipse 50% 60% at 50% 50%, color-mix(in oklab, var(--gold) 25%, transparent), transparent 70%)"
      }} />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <EyebrowBadge tone="white"><Calendar className="h-3.5 w-3.5" /> April 2027: MTD for income over £30,000</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance lg:text-5xl">
          Get ahead of your next tax bill.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
          Join the waitlist. We'll be in touch about the paid pilot (from May 2027) and the launch (September 2027).
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-gold px-6 py-4 text-base font-semibold shadow-lg transition-all hover:brightness-105"
            style={{ color: "var(--navy)" }}
          >
            Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
