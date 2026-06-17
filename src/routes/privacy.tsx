import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/ui-bits";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | CLARIVANCE AI" },
      { name: "description", content: "How CLARIVANCE AI collects, uses, and protects your personal data under UK GDPR." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: SITE_URL + "/privacy" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="bg-mist py-16 lg:py-20" style={{ background: "var(--mist)" }}>
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h1 className="font-serif text-5xl font-semibold tracking-tight" style={{ color: "var(--navy)" }}>
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm" style={{ color: "var(--slate-mid)" }}>
            Last updated: June 2026 · CLARIVANCE AI Ltd
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed" style={{ color: "var(--ink)" }}>

          <LegalBlock title="1. Who we are">
            <p>
              CLARIVANCE AI Ltd ("we", "us", "our") is the data controller for the personal data we
              collect through this website and our services. We are incorporated in England and Wales.
            </p>
            <p className="mt-3">
              Contact: <a href="mailto:privacy@clarivanceai.co.uk" className="text-teal underline underline-offset-2">privacy@clarivanceai.co.uk</a>
            </p>
          </LegalBlock>

          <LegalBlock title="2. What data we collect">
            <p>When you join our waitlist, we collect:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5" style={{ color: "var(--slate-mid)" }}>
              <li>First and last name</li>
              <li>Business email address</li>
              <li>Business name and type (optional)</li>
              <li>Annual income range (optional)</li>
              <li>Accounting software currently in use (optional)</li>
              <li>Any message you choose to include (optional)</li>
            </ul>
            <p className="mt-3">
              We also collect standard server logs (IP address, browser, timestamp) for security
              and operational purposes.
            </p>
          </LegalBlock>

          <LegalBlock title="3. How we use your data">
            <ul className="list-disc space-y-1.5 pl-5" style={{ color: "var(--slate-mid)" }}>
              <li>To contact you when CLARIVANCE AI launches and your free trial is ready</li>
              <li>To send you relevant MTD preparation updates (you can unsubscribe at any time)</li>
              <li>To understand who our users are and improve our product</li>
            </ul>
            <p className="mt-3">
              Our legal basis for processing is <strong>legitimate interests</strong> (communicating
              about a service you have asked to be informed about) and, where required, <strong>consent</strong>.
            </p>
          </LegalBlock>

          <LegalBlock title="4. Where your data is stored">
            <p>
              Waitlist data is stored in <strong>Airtable</strong> (a US-based service covered by
              Standard Contractual Clauses under UK GDPR). All other data remains within the UK on
              AWS London (eu-west-2) infrastructure.
            </p>
          </LegalBlock>

          <LegalBlock title="5. How long we keep your data">
            <p>
              We keep your waitlist data for as long as CLARIVANCE AI is operating and you remain
              a prospective or active customer. You may request deletion at any time by emailing us.
            </p>
          </LegalBlock>

          <LegalBlock title="6. Your rights under UK GDPR">
            <p>You have the right to:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5" style={{ color: "var(--slate-mid)" }}>
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion ("right to be forgotten")</li>
              <li>Object to processing or restrict it</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{" "}
              <a href="mailto:privacy@clarivanceai.co.uk" className="text-teal underline underline-offset-2">
                privacy@clarivanceai.co.uk
              </a>. We will respond within 30 days. You also have the right to lodge a complaint
              with the{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal underline underline-offset-2">
                Information Commissioner's Office (ICO)
              </a>.
            </p>
          </LegalBlock>

          <LegalBlock title="7. Cookies">
            <p>
              We use minimal cookies. For full details, see our{" "}
              <Link to="/cookies" className="text-teal underline underline-offset-2">Cookie Policy</Link>.
            </p>
          </LegalBlock>

          <LegalBlock title="8. Changes to this policy">
            <p>
              We may update this policy from time to time. The date at the top of this page will
              always reflect the most recent version. Continued use of our site after changes
              constitutes acceptance.
            </p>
          </LegalBlock>

          <div className="rounded-2xl border border-border bg-white p-6 card-elevated">
            <p className="text-sm font-semibold" style={{ color: "var(--navy)" }}>Questions about this policy?</p>
            <p className="mt-1 text-sm" style={{ color: "var(--slate-mid)" }}>
              Email us at{" "}
              <a href="mailto:privacy@clarivanceai.co.uk" className="text-teal underline underline-offset-2">
                privacy@clarivanceai.co.uk
              </a>{" "}
              and we'll respond within 2 business days.
            </p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold" style={{ color: "var(--navy)" }}>{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
