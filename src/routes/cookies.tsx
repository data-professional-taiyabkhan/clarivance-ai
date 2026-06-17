import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/ui-bits";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | CLARIVANCE AI" },
      { name: "description", content: "How CLARIVANCE AI uses cookies and similar technologies on this website." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: SITE_URL + "/cookies" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <SiteLayout>
      <section className="bg-mist py-16 lg:py-20" style={{ background: "var(--mist)" }}>
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h1 className="font-serif text-5xl font-semibold tracking-tight" style={{ color: "var(--navy)" }}>
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm" style={{ color: "var(--slate-mid)" }}>
            Last updated: June 2026 · CLARIVANCE AI Ltd
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed" style={{ color: "var(--ink)" }}>

          <LegalBlock title="What are cookies?">
            <p>
              Cookies are small text files placed on your device by websites you visit. They are
              widely used to make websites work more efficiently and to provide information to
              site owners.
            </p>
          </LegalBlock>

          <LegalBlock title="What cookies does CLARIVANCE AI use?">
            <p className="mb-4">
              This is a pre-launch marketing website. We use a minimal set of cookies:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[500px] text-sm">
                <thead className="bg-mist" style={{ background: "var(--mist)" }}>
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: "var(--navy)" }}>Cookie</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: "var(--navy)" }}>Purpose</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: "var(--navy)" }}>Duration</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: "var(--navy)" }}>Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">Session storage</td>
                    <td className="px-4 py-3" style={{ color: "var(--slate-mid)" }}>Remembers scroll position and navigation state</td>
                    <td className="px-4 py-3" style={{ color: "var(--slate-mid)" }}>Session only</td>
                    <td className="px-4 py-3" style={{ color: "var(--slate-mid)" }}>Essential</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              We do <strong>not</strong> currently use advertising cookies, third-party tracking,
              or analytics cookies. If this changes, we will update this policy and seek consent
              where required by UK PECR.
            </p>
          </LegalBlock>

          <LegalBlock title="Essential cookies">
            <p>
              Essential cookies are necessary for the website to function and cannot be disabled.
              They do not store any personally identifiable information and do not require your
              consent under UK PECR.
            </p>
          </LegalBlock>

          <LegalBlock title="How to control cookies">
            <p>
              You can control and delete cookies through your browser settings. Note that disabling
              cookies may affect the functionality of this website. For more information:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5" style={{ color: "var(--slate-mid)" }}>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-teal underline underline-offset-2">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-teal underline underline-offset-2">Firefox</a></li>
              <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-teal underline underline-offset-2">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-teal underline underline-offset-2">Edge</a></li>
            </ul>
          </LegalBlock>

          <LegalBlock title="Changes to this policy">
            <p>
              We may update this cookie policy as our use of cookies changes. The date at the top
              of this page reflects the most recent update.
            </p>
          </LegalBlock>

          <div className="rounded-2xl border border-border bg-white p-6 card-elevated">
            <p className="text-sm" style={{ color: "var(--slate-mid)" }}>
              Questions? Email{" "}
              <a href="mailto:privacy@clarivanceai.co.uk" className="text-teal underline underline-offset-2">
                privacy@clarivanceai.co.uk
              </a>. Also see our{" "}
              <Link to="/privacy" className="text-teal underline underline-offset-2">Privacy Policy</Link>
              {" "}and{" "}
              <Link to="/terms" className="text-teal underline underline-offset-2">Terms of Service</Link>.
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
