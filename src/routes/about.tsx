import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge } from "@/components/ui-bits";
import { Eye, Flag, Lock, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | CLARIVANCE AI" },
      { name: "description", content: "CLARIVANCE AI Ltd was co-founded by Vinutha Chandrashekara, who has worked in accounting since 2017, to show self-employed people what they can afford to spend after tax." },
      { property: "og:title", content: "About CLARIVANCE AI" },
      { property: "og:description", content: "Our mission: to let every self-employed person in the UK see, on any day of the year, what they can afford to spend after tax." },
      { property: "og:url", content: SITE_URL + "/about" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-mist py-20 lg:py-28" style={{ background: "var(--mist)" }}>
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <EyebrowBadge>About us</EyebrowBadge>
          <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight leading-[1.05] text-balance lg:text-6xl" style={{ color: "var(--navy)" }}>
            Founded by an accountant. <br />
            <span className="text-teal">For the UK's self-employed.</span>
          </h1>
        </div>
      </section>

      <Section id="founder">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full font-serif text-6xl font-bold text-white shadow-2xl gradient-teal-navy">
              VC
            </div>
            <div className="mt-6 text-center">
              <div className="font-serif text-2xl font-semibold" style={{ color: "var(--navy)" }}>Vinutha Chandrashekara</div>
              <div className="mt-1 text-sm font-semibold text-teal">Co-founder & CEO — CLARIVANCE AI</div>
            </div>
          </div>
          <div>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--ink)" }}>
              <p>
                Vinutha has worked in accounting since 2017, and in UK practice since 2023, supporting
                small businesses with bookkeeping, management accounts, cash flow, VAT and compliance.
                Year after year she saw capable people caught out by a tax bill they could have planned for.
              </p>
              <p>
                The tools people use today don't answer the question that matters. A bank tax pot sets
                aside a flat percentage, and accounting software runs the year so far through the tax
                bands as if the year had already finished. Nobody knows in July how the year will end.
              </p>
              <p>
                CLARIVANCE AI is being built to give self-employed people one figure they can act on:
                what's safe to spend, after the tax they are building up. Vinutha owns the tax method behind it.
              </p>
              <p>
                Today, CLARIVANCE AI Ltd is pre-launch. A paid pilot is planned for May 2027 and the
                launch for September 2027.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "MSc in Banking and Finance",
                "Bachelor of Commerce",
                "Accounting roles since 2017",
                "UK practice since 2023",
              ].map((c) => (
                <span key={c} className="rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold text-teal">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section variant="navy">
        <div className="mx-auto max-w-4xl text-center">
          <EyebrowBadge tone="white">Our mission</EyebrowBadge>
          <blockquote className="mt-6 font-serif text-3xl leading-tight text-balance lg:text-4xl xl:text-5xl">
            <span className="text-gold">"</span>
            <span className="text-gold"> To let every self-employed person in the UK see, on any day of the
            year, what they can afford to spend after tax. </span>
            <span className="text-gold">"</span>
          </blockquote>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { v: "4.53M", l: "self-employed people in the UK (ONS, 2026)" },
            { v: "2.88M", l: "unincorporated landlords (HMRC, 2026)" },
            { v: "~1M", l: "missed the January 2026 Self Assessment deadline (HMRC)" },
            { v: "~18,000", l: "Self Assessment Time to Pay plans, April to early December 2025 (HMRC)" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <div className="font-serif text-4xl font-semibold text-gold lg:text-5xl">{s.v}</div>
              <div className="mt-2 text-sm text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="mist">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowBadge>Our values</EyebrowBadge>
          <h2 className="mt-5 font-serif text-4xl font-semibold lg:text-5xl" style={{ color: "var(--navy)" }}>
            What we stand for
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            { i: <Eye className="h-6 w-6" />, t: "Transparency first", d: "Clear pricing, plain English, no dark patterns. You always know what you're paying for." },
            { i: <Flag className="h-6 w-6" />, t: "UK-first", d: "Built for UK tax law and UK businesses. Customer data will be held in the UK." },
            { i: <Lock className="h-6 w-6" />, t: "Read-only by design", d: "Clarivance will never move your money. You keep your bank and your accounting software." },
            { i: <Lightbulb className="h-6 w-6" />, t: "Honest numbers", d: "Every figure will be labelled as an estimate, with the assumptions behind it one tap away. No accuracy claims until they have been tested." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-white p-7 card-elevated">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                {v.i}
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold" style={{ color: "var(--navy)" }}>{v.t}</h3>
              <p className="mt-2 leading-relaxed" style={{ color: "var(--slate-mid)" }}>{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
