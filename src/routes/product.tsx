import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge, PrimaryCTA } from "@/components/ui-bits";
import { CashWarningChart } from "@/components/Charts";
import { ArrowRight, ShieldCheck, AlertCircle, Clock, CheckCircle2, Lock } from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — CashRadar, TaxShield & ActionFlow | CLARIVANCE AI" },
      { name: "description", content: "Three AI modules in one platform: 52-week cash forecasts, real-time MTD tax ring-fencing, and weekly prescriptive actions." },
      { property: "og:title", content: "CLARIVANCE AI Product — Three modules. Complete financial intelligence." },
      { property: "og:description", content: "CashRadar, TaxShield and ActionFlow — the complete AI financial intelligence platform for UK micro-businesses." },
      { property: "og:url", content: SITE_URL + "/product" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/product" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <SiteLayout>
      <Hero />
      <CashRadarSection />
      <TaxShieldSection />
      <ActionFlowSection />
      <BFDE />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="bg-mist py-20 lg:py-28" style={{ background: "var(--mist)" }}>
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <EyebrowBadge>The product</EyebrowBadge>
        <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance lg:text-6xl" style={{ color: "var(--navy)" }}>
          Three Modules. One Platform. <br />
          <span className="text-teal">Complete Financial Intelligence.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: "var(--slate-mid)" }}>
          Forecast cash. Ring-fence tax. Act with confidence.
          Built specifically for UK sole traders and micro-businesses.
        </p>
        <div className="mt-8">
          <PrimaryCTA to="/contact">Join the Waitlist</PrimaryCTA>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-teal" />
      <span style={{ color: "var(--ink)" }}>{children}</span>
    </li>
  );
}

function CashRadarSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <EyebrowBadge>📡 CashRadar™</EyebrowBadge>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight lg:text-5xl" style={{ color: "var(--navy)" }}>
            See your cash 52 weeks ahead.
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--slate-mid)" }}>
            AI-powered forecasting that learns your business rhythm — from how each
            client actually pays to your seasonal patterns.
          </p>
          <ul className="mt-8 space-y-3.5">
            <FeatureItem>13-week rolling forecast with weekly updates (Starter)</FeatureItem>
            <FeatureItem>52-week extended forecast with scenario modelling (Growth & Pro)</FeatureItem>
            <FeatureItem>Per-client payment delay prediction</FeatureItem>
            <FeatureItem>Seasonal cash rhythm detection — specific to your business</FeatureItem>
            <FeatureItem>Cash shortfall alerts up to 12 weeks in advance</FeatureItem>
            <FeatureItem>"What if?" scenario builder</FeatureItem>
            <FeatureItem>Connects to Xero, QuickBooks, FreeAgent, Sage & Open Banking</FeatureItem>
          </ul>
        </div>
        <div className="rounded-2xl gradient-navy p-7 shadow-2xl ring-1 ring-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Cash forecast — next 52 weeks</span>
            <span className="rounded-full bg-red-500/20 px-2.5 py-1 text-xs font-semibold text-red-300">
              <AlertCircle className="mr-1 inline h-3 w-3" />
              Dip detected
            </span>
          </div>
          <div className="mt-5">
            <CashWarningChart />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg bg-white/5 p-3">
              <div className="text-white/50">Today</div>
              <div className="mt-1 font-serif text-lg font-semibold text-white">£18,420</div>
            </div>
            <div className="rounded-lg bg-red-500/10 p-3 ring-1 ring-red-500/30">
              <div className="text-red-300">Week 22 low</div>
              <div className="mt-1 font-serif text-lg font-semibold text-red-300">£2,140</div>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <div className="text-white/50">Week 52</div>
              <div className="mt-1 font-serif text-lg font-semibold text-gold">£31,900</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TaxShieldSection() {
  return (
    <Section variant="mist">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="rounded-2xl gradient-navy p-7 shadow-2xl ring-1 ring-white/10 lg:order-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">TaxShield™ — Live</span>
            <span className="rounded-full bg-green-500/20 px-2.5 py-1 text-xs font-semibold text-green-300">
              <CheckCircle2 className="mr-1 inline h-3 w-3" />
              MTD Q2 filing — READY
            </span>
          </div>
          <div className="mt-6 rounded-xl border border-gold/30 bg-gold/10 p-6">
            <div className="text-xs uppercase tracking-wider text-gold">Tax Ring-Fenced</div>
            <div className="mt-2 font-serif text-5xl font-semibold text-gold">£8,640</div>
            <div className="mt-2 text-sm text-white/70">Income tax · Class 4 NI · VAT</div>
          </div>
          <div className="mt-5 space-y-2.5">
            {[
              { l: "Income Tax", v: "£5,820" },
              { l: "Class 4 NI", v: "£1,940" },
              { l: "VAT (Q2)", v: "£880" },
            ].map((r) => (
              <div key={r.l} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5 text-sm">
                <span className="text-white/70">{r.l}</span>
                <span className="font-semibold text-white">{r.v}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-lg bg-teal/15 px-4 py-3 text-sm text-teal-soft">
            <Clock className="h-4 w-4" />
            Next MTD deadline: 5 Aug — 47 days
          </div>
        </div>
        <div className="lg:order-2">
          <EyebrowBadge tone="gold">🛡️ TaxShield™</EyebrowBadge>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight lg:text-5xl" style={{ color: "var(--navy)" }}>
            Never face a tax shock again.
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--slate-mid)" }}>
            Real-time tax calculation on every transaction, automatic ring-fencing,
            and one-click HMRC MTD submissions.
          </p>
          <ul className="mt-8 space-y-3.5">
            <FeatureItem>Connects directly to HMRC MTD ITSA API</FeatureItem>
            <FeatureItem>Real-time income tax calculation on every transaction</FeatureItem>
            <FeatureItem>Class 4 NI and VAT ring-fencing</FeatureItem>
            <FeatureItem>Quarterly MTD submissions — one click to file</FeatureItem>
            <FeatureItem>Year-end self-assessment export</FeatureItem>
            <FeatureItem>Tax calendar with countdown to quarterly deadlines</FeatureItem>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function ActionFlowSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <EyebrowBadge>⚡ ActionFlow™</EyebrowBadge>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight lg:text-5xl" style={{ color: "var(--navy)" }}>
            Always know your next move.
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--slate-mid)" }}>
            Don't just watch your numbers — act on them. Every week, three to five
            specific actions ranked by impact.
          </p>
          <ul className="mt-8 space-y-3.5">
            <FeatureItem>Weekly prioritised action list — 3 to 5 specific tasks</FeatureItem>
            <FeatureItem>Invoice chase recommendations with payment timing predictions</FeatureItem>
            <FeatureItem>Expense deferral suggestions to bridge cash gaps</FeatureItem>
            <FeatureItem>Automated payment reminder sequences</FeatureItem>
            <FeatureItem>Financial health score — updated weekly</FeatureItem>
            <FeatureItem>Client risk scoring</FeatureItem>
          </ul>
        </div>
        <div className="rounded-2xl gradient-navy p-7 shadow-2xl ring-1 ring-white/10">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">This week's actions</span>
            <span className="text-xs text-white/50">Updated 2h ago</span>
          </div>
          <div className="space-y-3">
            <ActionItem
              priority="HIGH PRIORITY"
              tone="danger"
              title="Chase invoice #1182 — Studio Bright"
              meta="42 days overdue · £3,400 · Predicted pay date drifting"
            />
            <ActionItem
              priority="THIS WEEK"
              tone="warning"
              title="Set aside £1,240 for VAT Q2"
              meta="MTD filing due in 18 days"
            />
            <ActionItem
              priority="PLAN AHEAD"
              tone="teal"
              title="Defer hardware purchase to August"
              meta="Avoids £2,800 dip in week 22"
            />
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-white/60">Financial Health Score</span>
              <span className="font-serif text-3xl font-semibold text-gold">82<span className="text-base text-white/40">/100</span></span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: "82%", background: "linear-gradient(90deg, var(--teal), var(--gold))" }} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ActionItem({ priority, tone, title, meta }: { priority: string; tone: "danger" | "warning" | "teal"; title: string; meta: string }) {
  const styles =
    tone === "danger"
      ? "bg-red-500/10 text-red-300 ring-red-500/30"
      : tone === "warning"
        ? "bg-gold/15 text-gold ring-gold/30"
        : "bg-teal/15 text-teal-soft ring-teal/30";
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ${styles}`}>
        {priority}
      </span>
      <div className="mt-2 font-semibold text-white">{title}</div>
      <div className="mt-1 text-xs text-white/60">{meta}</div>
    </div>
  );
}

function BFDE() {
  const items = [
    { n: "01", t: "Client Payment Profiling", d: "Learn how each customer actually pays — not just their stated terms." },
    { n: "02", t: "Seasonal Rhythm Detection", d: "Detect quarterly, monthly and weekly cycles unique to your business." },
    { n: "03", t: "Unified Cash + Tax Timeline", d: "One forecast that combines what you'll earn and what you'll owe HMRC." },
    { n: "04", t: "Early Crisis Detection", d: "Spot cash crunches up to 12 weeks before they hit — with time to act." },
  ];
  return (
    <Section variant="navy">
      <div className="mx-auto max-w-3xl text-center">
        <EyebrowBadge tone="white">The innovation</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance text-white lg:text-5xl">
          The Behavioural Financial DNA Engine
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
          Every business has a unique financial fingerprint. CLARIVANCE AI learns yours.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="font-serif text-3xl font-semibold text-gold">{it.n}</div>
            <h3 className="mt-3 font-serif text-lg font-semibold text-white">{it.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{it.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold">
          <Lock className="h-4 w-4" />
          Patent-Pending Technology · 3 UK IPO Claims Filed · PCT International Application
        </div>
      </div>
    </Section>
  );
}
