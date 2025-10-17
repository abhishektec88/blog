import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SEO, PPC, social media, and analytics services by Ankit Ranjan Digital Marketing Solution.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-dvh px-6 py-16 md:py-20 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold">Services</h1>
        <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">
          Full-funnel growth services tailored to your business goals and stage.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-6">
            <h2 className="text-xl font-semibold">Search Engine Optimization</h2>
            <p className="mt-2 text-sm">Audits, on-page, content strategy, and authority building.</p>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-6">
            <h2 className="text-xl font-semibold">Paid Media (PPC)</h2>
            <p className="mt-2 text-sm">Google Ads, Meta, and performance creatives with A/B testing.</p>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-6">
            <h2 className="text-xl font-semibold">Content & Social</h2>
            <p className="mt-2 text-sm">Content calendars, distribution, and social community growth.</p>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-6">
            <h2 className="text-xl font-semibold">Analytics & CRO</h2>
            <p className="mt-2 text-sm">GA4, funnels, dashboards, and experiments for conversion lift.</p>
          </div>
        </div>
      </div>
    </main>
  );
}


