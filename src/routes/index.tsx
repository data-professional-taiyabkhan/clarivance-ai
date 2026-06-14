import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge, PrimaryCTA, OutlineCTA, Reveal } from "@/components/ui-bits";
import { CashFlowChart } from "@/components/Charts";
import { ArrowRight, ShieldCheck, Radar, Zap, Lock, TrendingUp, AlertTriangle, Wallet, Calendar } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLARIVANCE AI — Cash flow & MTD tax intelligence for UK micro-businesses" },
      { name: "description", content: "AI-powered 52-week cash flow forecasts, real-time tax ring-fencing and one-click HMRC MTD filing for UK sole traders and micro-businesses." },
      { property: "og:title", content: "CLARIVANCE AI — Know your cash. Never miss your tax." },
      { property: "og:description", content: "AI-powered cash flow forecasting and MTD tax automation for UK sole traders and micro-businesses." },
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
            "AI-powered 52-week cash flow forecasts, real-time tax ring-fencing and one-click HMRC Making Tax Digital filing for UK sole traders and micro-businesses.",
          url: SITE_URL,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
            description: "Free 90-day trial at launch",
          },
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
      <BFDESection />
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
          <EyebrowBadge tone="gold">🚀 Now accepting waitlist sign-ups — Free 90-day trial at launch</EyebrowBadge>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl" style={{ color: "var(--navy)" }}>
            Know your cash. <br className="hidden md:block" />
            Never miss your tax. <span className="text-teal">Powered by AI.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-balance" style={{ color: "var(--slate-mid)" }}>
            CLARIVANCE AI gives UK sole traders and micro-businesses a 52-week cash flow forecast,
            real-time tax ring-fencing, and one-click HMRC Making Tax Digital filing — all in one platform.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryCTA to="/contact">Join the Waitlist — Free</PrimaryCTA>
            <OutlineCTA to="/product">See How It Works <ArrowRight className="ml-2 h-4 w-4" /></OutlineCTA>
          </div>
          <p className="mt-5 text-sm" style={{ color: "var(--slate-mid)" }}>
            No credit card required · Cancel anytime · UK data only (AWS London)
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
        <span className="text-xs uppercase tracking-widest text-white/50">Dashboard · Live</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricTile label="Cash in 13 weeks" value="£24,810" delta="+12.4%" tone="success" icon={<Wallet className="h-4 w-4" />} />
        <MetricTile label="Tax Ring-Fenced" value="£8,640" delta="MTD Q2 ready" tone="warning" icon={<ShieldCheck className="h-4 w-4" />} />
        <MetricTile label="Next Action" value="Chase 3 invoices" delta="£4,200 expected" tone="teal" icon={<Zap className="h-4 w-4" />} />
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-white">52-Week Cash Forecast</span>
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
    { v: "5.5M", l: "UK micro-businesses" },
    { v: "1.5M+", l: "facing MTD deadline" },
    { v: "£60K", l: "early revenue generated" },
    { v: "3", l: "patent-pending innovations" },
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
    { e: "💸", t: "Cash Flow Blindness", d: "60% of UK SME failures are caused by cash flow mismanagement — owners simply can't see what's coming." },
    { e: "📋", t: "MTD Deadline April 2026", d: "HMRC's MTD mandate requires quarterly digital filing for sole traders earning above £50,000." },
    { e: "😱", t: "Year-End Tax Shocks", d: "43% of self-assessment filers face an unexpected tax bill they hadn't ring-fenced cash for." },
    { e: "🏚️", t: "Gap in the Market", d: "Fluidly, the UK's leading cash flow AI, shut down in April 2023 — leaving a gaping hole." },
  ];
  return (
    <Section variant="mist">
      <Reveal className="mx-auto max-w-3xl text-center">
        <EyebrowBadge>The problem</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance lg:text-5xl" style={{ color: "var(--navy)" }}>
          UK micro-businesses are flying blind — and HMRC is about to close the runway.
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
        <EyebrowBadge>The platform</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance lg:text-5xl" style={{ color: "var(--navy)" }}>
          Three modules. One platform. Complete financial clarity.
        </h2>
      </Reveal>

      <Reveal className="mt-14 grid gap-7 lg:grid-cols-3">
        <ModuleCard
          icon={<Radar className="h-6 w-6" />}
          name="CashRadar™"
          tagline="AI Cash Flow Forecasting"
          desc="13 to 52-week rolling forecasts powered by our Behavioural Financial DNA Engine. See cash crunches up to 12 weeks before they hit."
        />
        <ModuleCard
          featured
          icon={<ShieldCheck className="h-6 w-6" />}
          name="TaxShield™"
          tagline="Real-Time Tax Ring-Fencing"
          desc="HMRC MTD API connection, real-time tax calculation on every transaction, and one-click quarterly filing. Never face a tax shock again."
        />
        <ModuleCard
          icon={<Zap className="h-6 w-6" />}
          name="ActionFlow™"
          tagline="Prescriptive Action Engine"
          desc="Weekly action lists, invoice chase recommendations, and a financial health score updated weekly. Always know your next move."
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

function BFDESection() {
  const items = [
    { n: "01", t: "Client Payment Profiling", d: "Learn how each customer actually pays — not just their stated terms." },
    { n: "02", t: "Seasonal Rhythm Detection", d: "Detect quarterly, monthly and weekly cycles unique to your business." },
    { n: "03", t: "Unified Cash + Tax Timeline", d: "One forecast that combines what you'll earn and what you'll owe HMRC." },
    { n: "04", t: "Early Crisis Detection", d: "Spot cash crunches up to 12 weeks before they hit — with time to act." },
  ];
  return (
    <Section variant="navy">
      <Reveal className="mx-auto max-w-3xl text-center">
        <EyebrowBadge tone="white">The innovation</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance text-white lg:text-5xl">
          The Behavioural Financial DNA Engine
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
          Every business has a unique financial fingerprint. CLARIVANCE AI learns yours.
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
          <Lock className="h-4 w-4" />
          Patent-Pending Technology · 3 UK IPO Claims Filed · PCT International Application
        </div>
      </div>
    </Section>
  );
}

function Integrations() {
  const tools = ["Xero", "QuickBooks", "FreeAgent", "Sage", "Open Banking (PSD2)", "HMRC MTD API"];
  return (
    <Section variant="mist">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-semibold lg:text-4xl" style={{ color: "var(--navy)" }}>
          Works with the tools you already use
        </h2>
        <p className="mt-4" style={{ color: "var(--slate-mid)" }}>
          Connect once. CLARIVANCE AI does the rest.
        </p>
      </Reveal>
      <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {tools.map((t) => (
          <span key={t} className="rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold shadow-sm" style={{ color: "var(--navy)" }}>
            {t}
          </span>
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
            That's the problem CLARIVANCE AI was built to eliminate.
          </blockquote>
          <div className="mt-7 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full font-serif text-lg font-bold text-white gradient-teal-navy">
              VC
            </div>
            <div>
              <div className="font-semibold" style={{ color: "var(--navy)" }}>Vinutha Chandrashekara</div>
              <div className="text-sm" style={{ color: "var(--slate-mid)" }}>Founder & CEO, CLARIVANCE AI</div>
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
        <EyebrowBadge tone="white"><Calendar className="h-3.5 w-3.5" /> April 2026 deadline</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance lg:text-5xl">
          MTD is coming. Get ahead of it.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
          Reserve your free 90-day trial. We'll be in touch when CLARIVANCE AI is ready for you.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-gold px-6 py-4 text-base font-semibold shadow-lg transition-all hover:brightness-105"
            style={{ color: "var(--navy)" }}
          >
            Reserve My Spot <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
