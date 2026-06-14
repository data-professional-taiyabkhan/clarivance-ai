import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PrimaryCTA, OutlineCTA } from "@/components/ui-bits";
import { CheckCircle2, Mail, Rocket, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/welcome")({
  head: () => ({
    meta: [
      { title: "Welcome aboard — your free trial has started | CLARIVANCE AI" },
      {
        name: "description",
        content:
          "Thanks for starting your CLARIVANCE AI free trial. Here's what happens next — and a reminder that you won't be charged for 90 days.",
      },
      // Post-checkout page: keep it out of search results.
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: WelcomePage,
});

const steps = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Check your inbox",
    body: "A confirmation from Stripe is on its way with your trial and billing details. Keep it for your records.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "We'll get you set up",
    body: "Our team will email you shortly with your onboarding steps and access, so you can connect your accounts and start forecasting.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Nothing to pay for 90 days",
    body: "Your card won't be charged until your free trial ends. Cancel anytime before then and you won't pay a penny.",
  },
];

function WelcomePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[480px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklab, var(--teal) 14%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal/15 text-teal">
            <CheckCircle2 className="h-11 w-11" />
          </div>
          <h1
            className="mt-7 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance lg:text-6xl"
            style={{ color: "var(--navy)" }}
          >
            You're in. <span className="text-teal">Welcome to CLARIVANCE AI.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "var(--slate-mid)" }}>
            Your free 90-day trial has started — no charge today. We're thrilled to help you
            see your cash clearly and stay ahead of every tax deadline.
          </p>

          <div className="mx-auto mt-12 grid gap-5 text-left sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-white p-6 card-elevated">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold" style={{ color: "var(--navy)" }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--slate-mid)" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryCTA to="/">Back to homepage</PrimaryCTA>
            <OutlineCTA to="/resources">
              Read the MTD Guide <ArrowRight className="ml-2 h-4 w-4" />
            </OutlineCTA>
          </div>

          <p className="mt-8 text-sm" style={{ color: "var(--slate-mid)" }}>
            Didn't get a confirmation email, or have a question?{" "}
            <Link to="/contact" className="font-semibold text-teal hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
