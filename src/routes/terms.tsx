import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/ui-bits";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | CLARIVANCE AI" },
      { name: "description", content: "Terms of service for using the CLARIVANCE AI website and waitlist." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: SITE_URL + "/terms" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <section className="bg-mist py-16 lg:py-20" style={{ background: "var(--mist)" }}>
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h1 className="font-serif text-5xl font-semibold tracking-tight" style={{ color: "var(--navy)" }}>
            Terms of Service
          </h1>
          <p className="mt-4 text-sm" style={{ color: "var(--slate-mid)" }}>
            Last updated: June 2026 · CLARIVANCE AI Ltd
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed" style={{ color: "var(--ink)" }}>

          <LegalBlock title="1. Acceptance of terms">
            <p>
              By accessing this website or joining the CLARIVANCE AI waitlist, you agree to these
              Terms of Service. If you do not agree, please do not use our services.
            </p>
          </LegalBlock>

          <LegalBlock title="2. About CLARIVANCE AI">
            <p>
              CLARIVANCE AI Ltd is a pre-launch financial technology company incorporated in England
              and Wales. The platform described on this website is currently in development and has
              not yet launched commercially.
            </p>
          </LegalBlock>

          <LegalBlock title="3. Waitlist and free trial">
            <ul className="list-disc space-y-1.5 pl-5" style={{ color: "var(--slate-mid)" }}>
              <li>Joining the waitlist is free and creates no financial obligation.</li>
              <li>We will contact you by email when your free 90-day trial is ready.</li>
              <li>Free trial terms (duration, features included) will be confirmed in your onboarding email.</li>
              <li>After any paid trial period ends, your card will be charged at the plan rate unless you cancel.</li>
              <li>You can cancel at any time — no long-term contracts.</li>
            </ul>
          </LegalBlock>

          <LegalBlock title="4. Not financial advice">
            <p>
              CLARIVANCE AI provides tools to help you organise, forecast, and file tax information.
              Nothing on this website or within the platform constitutes personalised financial,
              tax, or legal advice. You should consult a qualified accountant or financial advisor
              for advice specific to your circumstances.
            </p>
          </LegalBlock>

          <LegalBlock title="5. Intellectual property">
            <p>
              All content on this website — including text, graphics, logos, and software — is the
              property of CLARIVANCE AI Ltd or its licensors and is protected by UK and international
              intellectual property law. Three patent applications are pending at the UK Intellectual
              Property Office (UK IPO) and internationally (PCT).
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, or create derivative works from any content on
              this site without our express written permission.
            </p>
          </LegalBlock>

          <LegalBlock title="6. Limitation of liability">
            <p>
              To the fullest extent permitted by law, CLARIVANCE AI Ltd shall not be liable for any
              indirect, incidental, or consequential loss arising from your use of or inability to
              use this website or the services described. Our total liability in any circumstances
              shall not exceed £100.
            </p>
          </LegalBlock>

          <LegalBlock title="7. Governing law">
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </LegalBlock>

          <LegalBlock title="8. Changes to these terms">
            <p>
              We may update these terms at any time. The date at the top of this page will reflect
              the latest version. Continued use of our site after changes constitutes acceptance.
            </p>
          </LegalBlock>

          <LegalBlock title="9. Contact">
            <p>
              For any questions about these terms, email{" "}
              <a href="mailto:legal@clarivanceai.co.uk" className="text-teal underline underline-offset-2">
                legal@clarivanceai.co.uk
              </a>.
            </p>
          </LegalBlock>

          <div className="rounded-2xl border border-border bg-white p-6 card-elevated">
            <p className="text-sm" style={{ color: "var(--slate-mid)" }}>
              Also see our{" "}
              <Link to="/privacy" className="text-teal underline underline-offset-2">Privacy Policy</Link>
              {" "}and{" "}
              <Link to="/cookies" className="text-teal underline underline-offset-2">Cookie Policy</Link>.
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
