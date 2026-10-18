import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { EyebrowBadge } from "@/components/ui-bits";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Join the Waitlist | CLARIVANCE AI" },
      { name: "description", content: "Join the CLARIVANCE AI waitlist to hear about the paid pilot (from May 2027) and the launch (September 2027). Free to join." },
      { property: "og:title", content: "Join the CLARIVANCE AI waitlist" },
      { property: "og:description", content: "Hear first about the CLARIVANCE AI pilot and launch." },
      { property: "og:url", content: SITE_URL + "/contact" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-mist py-16 lg:py-20" style={{ background: "var(--mist)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <EyebrowBadge tone="gold">🚀 Join the waitlist</EyebrowBadge>
            <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight leading-[1.05] text-balance lg:text-6xl" style={{ color: "var(--navy)" }}>
              Join the waitlist.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg" style={{ color: "var(--slate-mid)" }}>
              We'll be in touch about the paid pilot (from May 2027) and the launch (September 2027).
              Free to join; no credit card required.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-serif text-2xl font-semibold lg:text-3xl" style={{ color: "var(--navy)" }}>
                Why join the waitlist
              </h2>
              <ol className="mt-7 space-y-6">
                {[
                  { t: "Hear first about the pilot", d: "A small paid pilot is planned from May to August 2027, at £9 a month, for 10 to 15 businesses." },
                  { t: "Help shape the product", d: "Tell us how you handle tax today. The founders read every message." },
                  { t: "No commitment", d: "Joining is free. We'll only contact you about Clarivance, and you can leave the list at any time." },
                ].map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-serif text-base font-bold text-white gradient-teal-navy">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-serif text-lg font-semibold" style={{ color: "var(--navy)" }}>{s.t}</div>
                      <div className="mt-1 leading-relaxed" style={{ color: "var(--slate-mid)" }}>{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-2xl border-2 border-red-300 bg-red-50 p-6" style={{
                background: "color-mix(in oklab, var(--danger) 8%, white)",
                borderColor: "color-mix(in oklab, var(--danger) 35%, white)",
              }}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                  <div>
                    <div className="font-serif text-base font-semibold text-red-700">Making Tax Digital: April 2027</div>
                    <p className="mt-1 text-sm text-red-900/80">
                      From April 2027, Making Tax Digital for Income Tax applies to qualifying income over
                      £30,000, and from April 2028 to income over £20,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-white p-8 card-elevated lg:p-10">
              {submitted ? (
                <SuccessState />
              ) : (
                <WaitlistForm onSubmit={() => setSubmitted(true)} />
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function SuccessState() {
  return (
    <div className="flex h-full flex-col items-center justify-center py-10 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/15 text-teal">
        <CheckCircle2 className="h-9 w-9" />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-semibold" style={{ color: "var(--navy)" }}>You're on the list.</h3>
      <p className="mt-3 max-w-sm leading-relaxed" style={{ color: "var(--slate-mid)" }}>
        Thanks for joining. We'll be in touch about the pilot and the launch.
      </p>
    </div>
  );
}

const WAITLIST_ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT || "/api/waitlist";

function WaitlistForm({ onSubmit }: { onSubmit: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: if this hidden field is filled, it's a bot — silently reject.
    if (fd.get("_hp")) {
      onSubmit();
      return;
    }

    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      businessName: String(fd.get("businessName") ?? ""),
      email: String(fd.get("email") ?? ""),
      businessType: String(fd.get("businessType") ?? ""),
      income: String(fd.get("income") ?? ""),
      software: String(fd.get("software") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    if (!WAITLIST_ENDPOINT) {
      setError("The waitlist isn't connected yet. Please email us directly for now.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      onSubmit();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real users, bots fill it automatically */}
      <input
        type="text"
        name="_hp"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />
      <div className="grid grid-cols-2 gap-4">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <Field label="Business name (optional)" name="businessName" />
      <Field label="Email" name="email" type="email" required />

      <SelectField label="I am a…" name="businessType" options={[
        "Sole trader", "Landlord", "Sole trader and landlord", "Employed with a side business", "Accountancy or bookkeeping practice", "Other",
      ]} />

      <SelectField label="Yearly income from self-employment or property" name="income" options={[
        "Under £20k", "£20–30k", "£30–50k", "£50–100k", "Over £100k", "Prefer not to say",
      ]} />

      <SelectField label="What do you use now?" name="software" options={[
        "Xero", "QuickBooks", "FreeAgent", "Sage", "My bank's tax pot or tools", "A spreadsheet", "My accountant handles it", "Nothing yet", "Other",
      ]} />

      <div>
        <label className="mb-1.5 block text-sm font-semibold" style={{ color: "var(--navy)" }}>
          Message <span className="font-normal" style={{ color: "var(--slate-mid)" }}>(optional)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Anything you'd like to share?"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm placeholder:text-slate-mid/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        />
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm"
          style={{
            background: "color-mix(in oklab, var(--danger) 8%, white)",
            borderColor: "color-mix(in oklab, var(--danger) 35%, white)",
            color: "color-mix(in oklab, var(--danger) 70%, black)",
          }}
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-xl bg-gold px-6 py-4 text-base font-semibold shadow-md transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
        style={{ color: "var(--navy)" }}
      >
        {submitting ? (
          "Joining…"
        ) : (
          <>
            Join the waitlist <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
      <p className="text-center text-xs" style={{ color: "var(--slate-mid)" }}>
        We'll use your details only to contact you about Clarivance's pilot and launch. You can ask us to
        remove them at any time. See our{" "}
        <Link to="/privacy" className="underline underline-offset-2">privacy policy</Link>.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "var(--navy)" }}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "var(--navy)" }}>
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
