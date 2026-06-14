import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge } from "@/components/ui-bits";
import { Eye, Flag, Leaf, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Built by a finance professional | CLARIVANCE AI" },
      { name: "description", content: "Founded by Vinutha Chandrashekara — 10+ years in SME finance. CLARIVANCE AI was built to give every UK micro-business the financial clarity of a CFO." },
      { property: "og:title", content: "About CLARIVANCE AI — Built by a finance professional, for finance professionals." },
      { property: "og:description", content: "Meet our founder and our mission to give 5.5M UK micro-businesses CFO-grade financial intelligence." },
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
            Built by a Finance Professional. <br />
            <span className="text-teal">Built for Finance Professionals.</span>
          </h1>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full font-serif text-6xl font-bold text-white shadow-2xl gradient-teal-navy">
              VC
            </div>
            <div className="mt-6 text-center">
              <div className="font-serif text-2xl font-semibold" style={{ color: "var(--navy)" }}>Vinutha Chandrashekara</div>
              <div className="mt-1 text-sm font-semibold text-teal">Founder & CEO — CLARIVANCE AI</div>
            </div>
          </div>
          <div>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--ink)" }}>
              <p>
                Vinutha started her career in SME finance over a decade ago, working with sole
                traders, freelancers, and micro-business owners across the UK. She saw the same
                story play out, again and again: capable founders running profitable businesses,
                blindsided by a tax bill or a cash crunch they had no warning about.
              </p>
              <p>
                The advisory tools available — spreadsheets, basic accounting software, generic
                bank dashboards — weren't built for the realities of a one-person business. And
                when Fluidly, the UK's leading cash flow AI, shut down in 2023, an entire
                category of innovation simply vanished.
              </p>
              <p>
                CLARIVANCE AI is the platform Vinutha wished she had for every client she's
                worked with — combining cash flow intelligence, real-time tax ring-fencing,
                and prescriptive weekly actions in one place. It's purpose-built for the UK
                MTD era and for the businesses HMRC's deadlines hit hardest.
              </p>
              <p>
                Today, CLARIVANCE AI Ltd is in pre-launch with three patent-pending innovations
                filed at the UK IPO and £60,000+ in early advisory revenue from the founder's
                consultancy practice — proof the problem is real and the solution is wanted.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "BSc Accounting & Finance",
                "ACCA Part-Qualified",
                "Xero Advisor",
                "QuickBooks ProAdvisor",
                "MTD Practitioner",
                "10+ Years SME Finance",
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
            <span className="text-gold"> To give every UK micro-business owner the financial clarity and
            confidence of a CFO — at the price of a coffee subscription. </span>
            <span className="text-gold">"</span>
          </blockquote>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { v: "5.5M", l: "businesses we serve" },
            { v: "1.5M+", l: "facing MTD" },
            { v: "60%", l: "SME failures from cash" },
            { v: "3", l: "patent claims filed" },
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
            { i: <Eye className="h-6 w-6" />, t: "Transparency First", d: "Clear pricing, plain English, no dark patterns. You always know what you're paying for." },
            { i: <Flag className="h-6 w-6" />, t: "UK-First, Always", d: "Built for UK tax law, UK banking, UK businesses. Data stays in AWS London — full stop." },
            { i: <Leaf className="h-6 w-6" />, t: "Net Zero by 2030", d: "Carbon-aware infrastructure, ethical AI use, and a published sustainability commitment." },
            { i: <Lightbulb className="h-6 w-6" />, t: "Genuine Innovation", d: "Three patent-pending claims at the UK IPO. We're not wrapping ChatGPT — we're building real IP." },
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
