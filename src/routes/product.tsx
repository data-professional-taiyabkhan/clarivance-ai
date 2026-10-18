import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge, PrimaryCTA } from "@/components/ui-bits";
import { CashWarningChart } from "@/components/Charts";
import { ArrowRight, AlertCircle, Clock, Info, Calendar } from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — CashRadar, TaxShield & ActionFlow | CLARIVANCE AI" },
      { name: "description", content: "How CLARIVANCE AI will work: a 13–52 week cash forecast, a recommended tax reserve and weekly actions for UK sole traders and landlords. In development; launching September 2027." },
      { property: "og:title", content: "CLARIVANCE AI — How it will work" },
      { property: "og:description", content: "What's safe to spend, after tax: CashRadar, TaxShield and ActionFlow. In development; launching September 2027." },
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
      <WhyDifferent />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="bg-mist py-20 lg:py-28" style={{ background: "var(--mist)" }}>
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <EyebrowBadge>The product · in development</EyebrowBadge>
        <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance lg:text-6xl" style={{ color: "var(--navy)" }}>
          One number you can act on. <br />
          <span className="text-teal">Three views behind it.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: "var(--slate-mid)" }}>
          What's safe to spend today, after tax, with the forecast, the tax reserve and the week's actions
          one tap away. Being built for UK sole traders and landlords; launching September 2027.
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

function IllustrationTag() {
  return (
    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
      Illustration · not real data
    </span>
  );
}

function CashRadarSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <EyebrowBadge>📡 CashRadar™</EyebrowBadge>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight lg:text-5xl" style={{ color: "var(--navy)" }}>
            See your cash up to 52 weeks ahead.
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--slate-mid)" }}>
            A forecast of your cash for the next 13 to 52 weeks, shown as a range and learned from your own
            bank history: which customers pay late, which months are strong, when the big bills land.
          </p>
          <ul className="mt-8 space-y-3.5">
            <FeatureItem>13 to 52-week forecast, shown as a range of likely outcomes</FeatureItem>
            <FeatureItem>The late-payment pattern of each of your customers</FeatureItem>
            <FeatureItem>Learns your seasonal rhythm from up to 24 months of bank history</FeatureItem>
            <FeatureItem>Early warning when your cash after tax looks like dropping below zero</FeatureItem>
            <FeatureItem>What-if scenarios (Plus plan)</FeatureItem>
            <FeatureItem>Your bank through Open Banking from the pilot; Xero, QuickBooks and FreeAgent planned for 2028</FeatureItem>
          </ul>
        </div>
        <div className="rounded-2xl gradient-navy p-7 shadow-2xl ring-1 ring-white/10">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-white">Cash after tax — next 52 weeks</span>
            <IllustrationTag />
          </div>
          <div className="mt-3">
            <span className="rounded-full bg-red-500/20 px-2.5 py-1 text-xs font-semibold text-red-300">
              <AlertCircle className="mr-1 inline h-3 w-3" />
              Dip ahead
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
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-white">TaxShield™</span>
            <IllustrationTag />
          </div>
          <div className="mt-6 rounded-xl border border-gold/30 bg-gold/10 p-6">
            <div className="text-xs uppercase tracking-wider text-gold">Recommended tax reserve</div>
            <div className="mt-2 font-serif text-5xl font-semibold text-gold">£8,640</div>
            <div className="mt-2 text-sm text-white/70">Income tax · Class 4 NI · safety margin</div>
          </div>
          <div className="mt-5 space-y-2.5">
            {[
              { l: "Income tax", v: "£5,820" },
              { l: "Class 4 NI", v: "£1,940" },
              { l: "Safety margin for an uncertain year", v: "£880" },
            ].map((r) => (
              <div key={r.l} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5 text-sm">
                <span className="text-white/70">{r.l}</span>
                <span className="font-semibold text-white">{r.v}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-lg bg-teal/15 px-4 py-3 text-sm text-teal-soft">
            <Clock className="h-4 w-4" />
            Next payment date: 31 January
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
            <Info className="h-3.5 w-3.5" />
            An estimate, with its assumptions one tap away
          </div>
        </div>
        <div className="lg:order-2">
          <EyebrowBadge tone="gold">🛡️ TaxShield™</EyebrowBadge>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight lg:text-5xl" style={{ color: "var(--navy)" }}>
            See the tax you're building up.
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--slate-mid)" }}>
            Clarivance will work out the tax your income is building up, recommend a reserve to keep
            aside in your own bank, and explain every change.
          </p>
          <ul className="mt-8 space-y-3.5">
            <FeatureItem>Income tax and Class 4 National Insurance for sole traders in England, Wales and Northern Ireland</FeatureItem>
            <FeatureItem>A recommended reserve, with the reason each time it changes</FeatureItem>
            <FeatureItem>Payment dates built in: 31 January, 31 July and payments on account</FeatureItem>
            <FeatureItem>Property income, PAYE income, student loan and the High Income Child Benefit Charge at launch</FeatureItem>
            <FeatureItem>Read-only: Clarivance tells you what to keep aside and never moves your money</FeatureItem>
            <FeatureItem>MTD filing planned for 2028, once HMRC recognises Clarivance (Plus plan)</FeatureItem>
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
            Each Monday, a short summary: what's safe to spend, how your reserve changed and why,
            and up to three actions for the week.
          </p>
          <ul className="mt-8 space-y-3.5">
            <FeatureItem>Monday summary: safe to spend and how your reserve changed</FeatureItem>
            <FeatureItem>Up to three plain-English actions each week</FeatureItem>
            <FeatureItem>Invoice-chase prompts based on how each customer usually pays</FeatureItem>
            <FeatureItem>Early warning ahead of 31 January and 31 July</FeatureItem>
            <FeatureItem>Share a read-only view with your accountant (Plus plan)</FeatureItem>
          </ul>
        </div>
        <div className="rounded-2xl gradient-navy p-7 shadow-2xl ring-1 ring-white/10">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-white">This week's actions</span>
            <IllustrationTag />
          </div>
          <div className="space-y-3">
            <ActionItem
              priority="THIS WEEK"
              tone="danger"
              title="Chase invoice 47"
              meta="19 days old · this customer usually takes 40 days to pay"
            />
            <ActionItem
              priority="KEEP ASIDE"
              tone="warning"
              title="Keep £1,240 aside for 31 January"
              meta="Payment on account"
            />
            <ActionItem
              priority="PLAN AHEAD"
              tone="teal"
              title="Watch the week of 14 June"
              meta="If invoice 47 arrives late, cash after tax dips below zero that week"
            />
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

function WhyDifferent() {
  const items = [
    { n: "01", t: "Built around your whole year", d: "Income tax is worked out on the year as a whole. Clarivance is being designed around that, not around a flat percentage." },
    { n: "02", t: "A reserve you can rely on", d: "It recommends how much to keep aside and tells you why the figure changed. Every figure is labelled as an estimate." },
    { n: "03", t: "Payment dates built in", d: "31 January and 31 July, including payments on account, are part of the picture from the start." },
    { n: "04", t: "Read-only by design", d: "Clarivance will never move your money. You keep your bank and your accounting software." },
  ];
  return (
    <Section variant="navy">
      <div className="mx-auto max-w-3xl text-center">
        <EyebrowBadge tone="white">Why it's different</EyebrowBadge>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance text-white lg:text-5xl">
          Safe to spend, after tax
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
          Bank tax pots use a flat percentage. Accounting software shows the year so far.
          Clarivance is being built to show what's yours to spend.
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
          <Calendar className="h-4 w-4" />
          In development · Paid pilot planned from May 2027
        </div>
      </div>
    </Section>
  );
}
