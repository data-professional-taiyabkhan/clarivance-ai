import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

export const SITE_URL = "https://www.clarivanceai.co.uk";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-semibold" style={{ color: "var(--navy)" }}>404</h1>
        <h2 className="mt-4 font-serif text-xl font-semibold" style={{ color: "var(--navy)" }}>Page not found</h2>
        <p className="mt-2 text-sm" style={{ color: "var(--slate-mid)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold transition-all hover:brightness-105"
            style={{ color: "var(--navy)" }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CLARIVANCE AI — Know what's safe to spend, after tax" },
      { name: "description", content: "CLARIVANCE AI is building software for UK sole traders and landlords that shows how much they can safely spend after the tax they are building up. Launching September 2027." },
      { name: "author", content: "CLARIVANCE AI Ltd" },
      { name: "theme-color", content: "#0A1628" },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:site_name", content: "CLARIVANCE AI" },
      { property: "og:title", content: "CLARIVANCE AI" },
      { property: "og:description", content: "Know your cash. Never miss your tax. What's safe to spend, after tax — for UK sole traders and landlords." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: SITE_URL + "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "CLARIVANCE AI — Know your cash. Never miss your tax." },
      { property: "og:locale", content: "en_GB" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CLARIVANCE AI" },
      { name: "twitter:description", content: "Know your cash. Never miss your tax. What's safe to spend, after tax — for UK sole traders and landlords." },
      { name: "twitter:image", content: SITE_URL + "/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "alternate icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/icon-512.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        // Enable scroll-reveal animations only when JS is available. Runs in
        // <head> before paint, so there's no flash and no-JS users see content.
        children: "document.documentElement.classList.add('reveal-on')",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": SITE_URL + "/#organization",
              name: "CLARIVANCE AI Ltd",
              alternateName: "Clarivance AI",
              url: SITE_URL,
              logo: SITE_URL + "/icon-512.png",
              description:
                "In development: software for UK sole traders and landlords that shows how much they can safely spend after the tax they are building up. Launching September 2027.",
              areaServed: { "@type": "Country", name: "United Kingdom" },
              founder: { "@type": "Person", name: "Vinutha Chandrashekara" },
            },
            {
              "@type": "WebSite",
              "@id": SITE_URL + "/#website",
              name: "CLARIVANCE AI",
              url: SITE_URL,
              publisher: { "@id": SITE_URL + "/#organization" },
              inLanguage: "en-GB",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
