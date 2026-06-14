import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, EyebrowBadge, PrimaryCTA, OutlineCTA, Reveal } from "@/components/ui-bits";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type QA = { q: string; a: string };
type Category = { title: string; items: QA[] };

const FAQ: Category[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "What is CLARIVANCE AI?",
        a: "CLARIVANCE AI is an all-in-one financial intelligence platform for UK sole traders and micro-businesses. It combines AI cash-flow forecasting (CashRadar), real-time tax ring-fencing and HMRC Making Tax Digital filing (TaxShield), and weekly prescriptive actions (ActionFlow) — so you always know your cash position and never get caught out by a tax bill.",
      },
      {
        q: "Who is it built for?",
        a: "UK sole traders, freelancers, contractors and micro-businesses — especially the 1.5M+ who fall under the Making Tax Digital mandate. Accountants and bookkeepers who manage multiple clients can use it too.",
      },
      {
        q: "How does it work?",
        a: "You connect your accounting software or bank via secure, read-only Open Banking. Our Behavioural Financial DNA Engine learns how your business actually earns and spends, then produces a rolling 13–52 week cash-flow forecast, sets aside the right amount of tax on every transaction, and gives you a weekly action list.",
      },
      {
        q: "What does it integrate with?",
        a: "Xero, QuickBooks, FreeAgent and Sage, plus Open Banking (PSD2) and the HMRC Making Tax Digital API. Connect once and CLARIVANCE AI keeps everything in sync.",
      },
      {
        q: "When does CLARIVANCE AI launch?",
        a: "We're currently pre-launch and accepting waitlist sign-ups. Waitlist members get a free 90-day trial at launch and locked-in founder pricing for 12 months.",
      },
    ],
  },
  {
    title: "Making Tax Digital & tax",
    items: [
      {
        q: "What is Making Tax Digital (MTD)?",
        a: "Making Tax Digital is HMRC's initiative requiring businesses to keep digital records and submit quarterly updates through compatible software. MTD for Income Tax Self Assessment (MTD ITSA) begins in April 2026 for sole traders and landlords earning above £50,000.",
      },
      {
        q: "Do I have to comply with MTD?",
        a: "If you're a sole trader or landlord with qualifying income over £50,000, MTD ITSA applies from April 2026. The threshold drops to £30,000 from April 2027 and is set to extend further. CLARIVANCE AI is built to keep you compliant from day one.",
      },
      {
        q: "Does CLARIVANCE AI file my taxes with HMRC?",
        a: "Yes — TaxShield connects directly to the HMRC MTD API so you can submit your quarterly updates with one click. CLARIVANCE AI is software to help you stay organised and compliant; it does not replace a qualified accountant, and nothing in the product is personalised tax advice.",
      },
      {
        q: "How does tax ring-fencing work?",
        a: "Every time money comes in, TaxShield calculates the tax you're likely to owe on it and ring-fences that amount in your forecast. So when your tax bill is due, the money is already accounted for — no year-end shock.",
      },
    ],
  },
  {
    title: "Pricing & trial",
    items: [
      {
        q: "How much does it cost?",
        a: "Plans start from £66/month, with Starter, Growth and Pro tiers to match the size of your business. Every plan starts with a free 90-day trial, so you can try the full platform before paying anything.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Everyone who joins the waitlist gets full access to every feature free for 90 days at launch — no credit card required to start.",
      },
      {
        q: "Do I need a credit card to join the waitlist?",
        a: "No. Joining the waitlist is completely free and takes under a minute. We'll only be in touch when your trial is ready.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes — there are no long-term contracts. You can cancel at any time during or after your trial.",
      },
    ],
  },
  {
    title: "Data & security",
    items: [
      {
        q: "Is my financial data safe?",
        a: "Security is foundational. Your data is stored entirely in the UK (AWS London), encrypted in transit and at rest, and handled in line with UK GDPR. Bank connections use regulated, read-only Open Banking.",
      },
      {
        q: "Where is my data stored?",
        a: "All data is stored and processed in the UK on AWS London infrastructure. It never leaves the UK.",
      },
      {
        q: "Can CLARIVANCE AI access my bank account or move money?",
        a: "No. We use read-only Open Banking, which means we can see transactions to build your forecast but can never move money, make payments, or change anything in your account.",
      },
    ],
  },
];

// Build FAQPage structured data from the same source as the visible content.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.flatMap((c) =>
    c.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  ),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Common questions about CLARIVANCE AI" },
      {
        name: "description",
        content:
          "Answers to common questions about CLARIVANCE AI — how it works, Making Tax Digital, pricing, the free 90-day trial, and data security for UK micro-businesses.",
      },
      { property: "og:title", content: "CLARIVANCE AI — Frequently Asked Questions" },
      {
        property: "og:description",
        content:
          "How CLARIVANCE AI works, MTD compliance, pricing, your free trial, and how we keep your data secure.",
      },
      { property: "og:url", content: SITE_URL + "/faq" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <section className="bg-mist py-16 lg:py-24" style={{ background: "var(--mist)" }}>
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <EyebrowBadge>FAQ</EyebrowBadge>
          <h1
            className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance lg:text-6xl"
            style={{ color: "var(--navy)" }}
          >
            Questions? <span className="text-teal">We've got answers.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg" style={{ color: "var(--slate-mid)" }}>
            Everything you need to know about CLARIVANCE AI, Making Tax Digital, pricing and
            keeping your data secure. Can't find it here? Just ask.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-14">
          {FAQ.map((cat) => (
            <Reveal key={cat.title}>
              <h2
                className="mb-2 font-serif text-2xl font-semibold lg:text-3xl"
                style={{ color: "var(--navy)" }}
              >
                {cat.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {cat.items.map((it, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat.title}-${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline lg:text-lg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-teal" style={{ color: "var(--navy)" }}>
                      {it.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base leading-relaxed" >
                      <span style={{ color: "var(--slate-mid)" }}>{it.a}</span>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative gradient-navy py-20 text-white">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-balance lg:text-4xl">
            Still have a question?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/75">
            Join the waitlist and you'll get direct access to our founder — we read every message.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryCTA to="/contact">Join the Waitlist — Free</PrimaryCTA>
            <OutlineCTA to="/resources" variant="light">
              Read the MTD Guide
            </OutlineCTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
