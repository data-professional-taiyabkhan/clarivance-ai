import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SITE_URL } from "./__root";
import { SiteLayout } from "@/components/SiteLayout";
import { EyebrowBadge } from "@/components/ui-bits";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Join the Waitlist — Free 90-day trial | CLARIVANCE AI" },
      { name: "description", content: "Reserve your free 90-day trial of CLARIVANCE AI. No credit card required. Built for UK sole traders facing MTD." },
      { property: "og:title", content: "Reserve your free 90-day trial — CLARIVANCE AI" },
      { property: "og:description", content: "Get ahead of MTD April 2026. Join the CLARIVANCE AI waitlist." },
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
            <EyebrowBadge tone="gold">🚀 Free 90-day trial</EyebrowBadge>
            <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight leading-[1.05] text-balance lg:text-6xl" style={{ color: "var(--navy)" }}>
              Reserve your spot.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg" style={{ color: "var(--slate-mid)" }}>
              Join the waitlist today and we'll be in touch the moment CLARIVANCE AI is ready for you.
              No credit card required.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-serif text-2xl font-semibold lg:text-3xl" style={{ color: "var(--navy)" }}>
                Why join the waitlist
              </h2>
              <ol className="mt-7 space-y-6">
                {[
                  { t: "Free for 90 days at launch", d: "Full platform access, every feature, every plan. No credit card to start." },
                  { t: "Founder-pricing locked in", d: "Waitlist members keep their introductory pricing for 12 months after launch." },
                  { t: "Shape the product", d: "Direct access to the founder for early feedback. The roadmap is built around you." },
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
                    <div className="font-serif text-base font-semibold text-red-700">MTD deadline: April 2026</div>
                    <p className="mt-1 text-sm text-red-900/80">
                      Sole traders earning over £50,000 must comply. Don't wait until the last quarter
                      to find your software, train on it, and migrate your data.
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
        Thanks for joining. We'll email you as soon as your free 90-day trial is ready.
        In the meantime, keep an eye out for our MTD prep emails.
      </p>
    </div>
  );
}

const WAITLIST_ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT as string | undefined;

function WaitlistForm({ onSubmit }: { onSubmit: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
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
      <div className="grid grid-cols-2 gap-4">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <Field label="Business name" name="businessName" />
      <Field label="Business email" name="email" type="email" required />

      <SelectField label="Business type" name="businessType" options={[
        "Sole trader", "Limited company (1–5)", "Limited company (6–10)", "Accountant / Bookkeeper", "Other",
      ]} />

      <SelectField label="Annual income" name="income" options={[
        "Under £30k", "£30–50k", "£50–100k", "£100–250k", "Over £250k",
      ]} />

      <SelectField label="Accounting software" name="software" options={[
        "Xero", "QuickBooks", "FreeAgent", "Sage", "Excel", "Nothing yet", "Other",
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
          "Reserving your spot…"
        ) : (
          <>
            Reserve My Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
      <p className="text-center text-xs" style={{ color: "var(--slate-mid)" }}>
        By submitting, you agree to receive launch updates from CLARIVANCE AI. Unsubscribe anytime.
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
