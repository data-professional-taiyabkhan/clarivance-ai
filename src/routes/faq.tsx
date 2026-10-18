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
        a: "CLARIVANCE AI is software being built for UK sole traders and landlords. It will show one figure you can act on: how much you can safely spend this week, next month and at quarter-end, after the tax you're building up has been set aside. Behind that figure sit a cash forecast (CashRadar), your tax position and recommended reserve (TaxShield) and a short weekly list of actions (ActionFlow).",
      },
      {
        q: "Who is it built for?",
        a: "Sole traders whose income moves around, people with more than one kind of income, landlords, people in their first years of self-employment, and the accountancy and bookkeeping practices who look after them.",
      },
      {
        q: "How will it work?",
        a: "You'll connect your bank account through Open Banking (read-only) and answer a few questions about your tax position. Clarivance will read your history, separate business income and costs from personal spending, and show what's safe to spend after tax, with the reasons behind every figure.",
      },
      {
        q: "What will it connect to?",
        a: "Your bank, through Open Banking, from the pilot in 2027. Read-only links to Xero, QuickBooks and FreeAgent are planned for 2028. You keep your bank and your accounting software; nothing has to move.",
      },
      {
        q: "When does CLARIVANCE AI launch?",
        a: "A small paid pilot is planned from May to August 2027, with launch in September 2027. Join the waitlist and we'll be in touch about both.",
      },
    ],
  },
  {
    title: "Making Tax Digital & tax",
    items: [
      {
        q: "What is Making Tax Digital (MTD)?",
        a: "Making Tax Digital for Income Tax requires sole traders and landlords to keep digital records and send HMRC quarterly updates through recognised software. It began in April 2026 for qualifying income above £50,000.",
      },
      {
        q: "Do I have to comply with MTD?",
        a: "If you're a sole trader or landlord with qualifying income over £50,000, it has applied since April 2026. The threshold drops to £30,000 from April 2027 and to £20,000 from April 2028.",
      },
      {
        q: "Will CLARIVANCE AI file my taxes with HMRC?",
        a: "Not at launch. MTD filing is planned for 2028, once HMRC recognises Clarivance, and will be part of the Plus plan. Until then, keep using your current filing software. Clarivance is software that gives estimates; it does not replace a qualified accountant, and nothing in it is personalised tax advice.",
      },
      {
        q: "How will the tax reserve work?",
        a: "Clarivance will work out the tax your income is building up and recommend how much to keep aside in your own bank. It is read-only, so it never moves money itself. Every figure is labelled as an estimate, and each change comes with its reason.",
      },
    ],
  },
  {
    title: "Pricing & pilot",
    items: [
      {
        q: "How much will it cost?",
        a: "Planned prices from launch are £14 a month for Essentials, £29 a month for Plus, and £8 per active client a month for accountancy practices (minimum ten clients). Prices may change after the pilot.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes, a 14-day free trial from launch in September 2027. The pilot, from May to August 2027, is paid at £9 a month.",
      },
      {
        q: "Do I need a credit card to join the waitlist?",
        a: "No. Joining the waitlist is free and takes under a minute. We'll only be in touch about the pilot and the launch.",
      },
      {
        q: "Will I be able to cancel anytime?",
        a: "Yes. There will be no long-term contracts, and you'll be able to cancel from inside the app.",
      },
    ],
  },
  {
    title: "Data & security",
    items: [
      {
        q: "Will my financial data be safe?",
        a: "Clarivance is being designed as read-only: it will see transactions but can never move money. Bank connections will go through an FCA-authorised Open Banking provider, and customer data will be held in the UK.",
      },
      {
        q: "What happens to the details I give on the waitlist?",
        a: "We use them only to contact you about Clarivance. Our privacy policy explains where they are stored and how to ask us to delete them.",
      },
      {
        q: "Will CLARIVANCE AI be able to move money from my account?",
        a: "No. Open Banking access will be read-only, which means Clarivance can see transactions to build your forecast but can never move money, make payments, or change anything in your account.",
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
          "Answers to common questions about CLARIVANCE AI — how it will work, Making Tax Digital, planned pricing, the pilot, and data security.",
      },
      { property: "og:title", content: "CLARIVANCE AI — Frequently Asked Questions" },
      {
        property: "og:description",
        content:
          "How CLARIVANCE AI will work, Making Tax Digital, planned pricing and the pilot.",
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
            Join the waitlist or send us a message — the founders read every one.
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
