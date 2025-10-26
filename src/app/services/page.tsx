import type { Metadata } from "next";
import { getServicesContent } from "@/lib/content";

export function generateMetadata(): Metadata {
  const content = getServicesContent();
  
  return {
    title: content?.metaDescription ? `Services | ${content.title}` : "Services",
    description: content?.metaDescription || "SEO, PPC, social media, and analytics services by Ankit Ranjan Digital Marketing Solution.",
    keywords: content?.keywords,
  };
}

export default function ServicesPage() {
  const content = getServicesContent();

  // Fallback to default content if file doesn't exist yet
  const h1 = content?.h1 || "Services";
  const introText = content?.introText || "Full-funnel growth services tailored to your business goals and stage.";
  const services = content?.services || [
    { title: "Search Engine Optimization", description: "Audits, on-page, content strategy, and authority building." },
    { title: "Paid Media (PPC)", description: "Google Ads, Meta, and performance creatives with A/B testing." },
    { title: "Content & Social", description: "Content calendars, distribution, and social community growth." },
    { title: "Analytics & CRO", description: "GA4, funnels, dashboards, and experiments for conversion lift." },
  ];

  return (
    <main className="min-h-dvh px-6 py-16 md:py-20 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold">{h1}</h1>
        <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">
          {introText}
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="rounded-lg border border-black/10 dark:border-white/15 p-6">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


