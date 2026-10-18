import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge } from "@/components/ui-bits";
import { AlertTriangle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "MTD Guide — Making Tax Digital for UK sole traders | CLARIVANCE AI" },
      { name: "description", content: "Everything UK sole traders need to know about Making Tax Digital (MTD ITSA) — deadlines, who's affected, and what to do next." },
      { property: "og:title", content: "The Complete MTD Guide for UK Sole Traders" },
      { property: "og:description", content: "Making Tax Digital for Income Tax: who is affected from April 2026, 2027 and 2028, and what to do next." },
      { property: "og:url", content: SITE_URL + "/resources" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <SiteLayout>
      <section className="bg-mist py-20 lg:py-28" style={{ background: "var(--mist)" }}>
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <EyebrowBadge>Resources</EyebrowBadge>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance lg:text-6xl" style={{ color: "var(--navy)" }}>
            The Complete <span className="text-teal">MTD Guide</span> for UK Sole Traders
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: "var(--slate-mid)" }}>
            Plain-English answers to the questions every sole trader is asking
            about Making Tax Digital.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border-2 border-red-300 bg-red-50 p-7" style={{
            background: "color-mix(in oklab, var(--danger) 8%, white)",
            borderColor: "color-mix(in oklab, var(--danger) 35%, white)",
          }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-xl bg-red-500/15 p-3 text-red-600">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-red-700">
                  Next MTD cohort: April 2027
                </h3>
                <p className="mt-2 text-base text-red-900/80">
                  If your qualifying self-employment and property income is above £30,000, Making Tax
                  Digital for Income Tax applies to you from 6 April 2027. It has applied to income
                  above £50,000 since 6 April 2026.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-serif text-3xl font-semibold lg:text-4xl" style={{ color: "var(--navy)" }}>
              The MTD timeline
            </h2>
            <div className="mt-8 space-y-4">
              <DeadlineRow tone="danger" date="April 2026" who="Income above £50,000" status="IN FORCE" />
              <DeadlineRow tone="warning" date="April 2027" who="Income above £30,000" status="PREPARE NOW" />
              <DeadlineRow tone="teal" date="April 2028" who="Income above £20,000" status="COMING SOON" />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-3xl font-semibold lg:text-4xl" style={{ color: "var(--navy)" }}>
              5 steps to MTD-ready
            </h2>
            <div className="mt-8 space-y-5">
              {[
                { t: "Confirm your obligation", d: "Check the qualifying income on your Self Assessment return: self-employment plus property income. Above £30,000 means MTD applies to you from April 2027." },
                { t: "Choose HMRC-recognised software", d: "HMRC requires digital records and quarterly updates sent through software it recognises. Clarivance won't file at launch, so you will need recognised filing software as well." },
                { t: "Keep your records up to date", d: "Connecting your bank feed to your accounting software keeps your digital records current with less manual entry." },
                { t: "Send your quarterly updates", d: "Four quarterly updates a year, due 7 August, 7 November, 7 February and 7 May, plus a final declaration after the tax year ends." },
                { t: "Set tax aside as you earn", d: "The biggest cause of tax shocks isn't the tax itself — it's spending the money before it's owed. Keep a reserve in a separate account; Clarivance is being built to tell you how much." },
              ].map((s, i) => (
                <div key={i} className="flex gap-5 rounded-2xl border border-border bg-white p-6 card-elevated">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-serif text-xl font-bold text-white gradient-teal-navy">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold" style={{ color: "var(--navy)" }}>{s.t}</h3>
                    <p className="mt-1 leading-relaxed" style={{ color: "var(--slate-mid)" }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section variant="mist">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowBadge>Articles</EyebrowBadge>
          <h2 className="mt-5 font-serif text-4xl font-semibold lg:text-5xl" style={{ color: "var(--navy)" }}>
            Read the guides
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { e: "📋", t: "MTD ITSA: The Complete Sole Trader Guide", d: "HMRC's quarterly update rules, including the April 2027 and April 2028 thresholds." },
            { e: "💰", t: "How to Build a 13-Week Cash Flow Forecast", d: "The single most important spreadsheet you'll ever build — and how to do it in an afternoon." },
            { e: "📊", t: "Why UK Sole Traders Get Surprised by Their Tax Bill", d: "The four mental models that lead to year-end tax shocks — and how to avoid them." },
            { e: "🏦", t: "Open Banking for Small Businesses", d: "What it is, how read-only access works, and what to check before you connect a bank account." },
            { e: "⚡", t: "The Weekly Financial Health Check", d: "A 15-minute weekly routine for keeping on top of cash and tax." },
            { e: "🗓️", t: "Payments on Account, Explained", d: "Why your first January bill can be one and a half times what you expect, and how to plan for it." },
          ].map((a, i) => (
            <article key={i} className="group rounded-2xl border border-border bg-white p-7 card-elevated">
              <div className="text-3xl">{a.e}</div>
              <h3 className="mt-4 font-serif text-lg font-semibold leading-snug" style={{ color: "var(--navy)" }}>{a.t}</h3>
              <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "var(--slate-mid)" }}>{a.d}</p>
              <div className="mt-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                  Coming soon
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3.5 text-base font-semibold shadow-md transition-all hover:brightness-105"
            style={{ color: "var(--navy)" }}
          >
            Join the CLARIVANCE AI waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}

function DeadlineRow({ tone, date, who, status }: { tone: "danger" | "warning" | "teal"; date: string; who: string; status: string }) {
  const styles =
    tone === "danger"
      ? "border-red-300 bg-red-50 text-red-700"
      : tone === "warning"
        ? "border-gold/50 bg-gold/10 text-gold"
        : "border-teal/40 bg-teal/10 text-teal";
  return (
    <div className={`flex flex-col gap-3 rounded-2xl border-2 p-6 sm:flex-row sm:items-center sm:justify-between ${styles}`}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
        <div className="font-serif text-2xl font-semibold">{date}</div>
        <div className="text-base font-medium" style={{ color: "var(--ink)" }}>{who}</div>
      </div>
      <span className="self-start rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider sm:self-auto">
        {status}
      </span>
    </div>
  );
}
