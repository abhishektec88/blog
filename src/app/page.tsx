import { getHomepageContent } from '@/lib/content';
import type { Metadata } from 'next';

export const dynamic = "force-static";

// Export metadata for SEO
export function generateMetadata(): Metadata {
  const content = getHomepageContent();
  
  return {
    title: content?.seoTitle || content?.title || "Ankit Ranjan Digital Marketing Solution | SEO, PPC & Growth Marketing",
    description: content?.seoDescription || content?.description || "Grow faster with data-driven digital marketing. Expert SEO, PPC, social media, and analytics services to drive measurable ROI and sustainable brand growth.",
    keywords: content?.keywords,
    openGraph: {
      title: content?.seoTitle || content?.title || "Ankit Ranjan Digital Marketing Solution",
      description: content?.seoDescription || content?.description || "Grow faster with data-driven digital marketing.",
    },
    twitter: {
      title: content?.seoTitle || content?.title,
      description: content?.seoDescription || content?.description,
    },
  };
}

export default function Home() {
  const content = getHomepageContent();

  // Fallback to default content if file doesn't exist yet
  const heroH1 = content?.heroH1 || "Grow faster with data-driven marketing";
  const heroDescription = content?.heroDescription || "Ankit Ranjan Digital Marketing Solution blends SEO, PPC, social, and analytics to drive measurable ROI and sustainable brand growth.";
  const services = content?.services || [
    { name: "SEO", description: "Technical SEO, on-page, content, and authority building." },
    { name: "PPC", description: "Google & Meta Ads with rigorous experimentation and budget control." },
    { name: "Analytics", description: "GA4, tracking, dashboards, and conversion optimization." },
  ];
  const process = content?.process || [
    { number: 1, title: "Discover", description: "Audit, goals, ICP, and competitive landscape." },
    { number: 2, title: "Plan", description: "Roadmap with KPIs, channels, and resourcing." },
    { number: 3, title: "Execute", description: "Launch SEO, ads, and content with tight feedback loops." },
    { number: 4, title: "Optimize", description: "Measure, test, and iterate for compounding gains." },
  ];
  
  const caseStudies = content?.caseStudies || [
    { category: "SaaS", heading: "+62% Qualified Leads", description: "Scaled SEO + paid search with CRO to reduce CPA." },
    { category: "E‑commerce", heading: "+38% ROAS", description: "Performance creatives and feed optimization across channels." },
    { category: "Fintech", heading: "3x Organic Traffic", description: "Technical fixes + content clusters for compounding growth." },
  ];
  
  const faqs = content?.faqs || [
    { question: "How soon can we see results?", answer: "Most clients see early wins in 4–8 weeks with bigger gains over 3–6 months." },
    { question: "Do you work on retainers or projects?", answer: "Both. We tailor the engagement to your goals and team structure." },
    { question: "Can you integrate with our analytics stack?", answer: "Yes — GA4, Looker, Segment, server-side tagging, and more." },
  ];
  
  const socialProof = content?.socialProof || {
    quote: "Within 90 days, our qualified leads increased by 62% with a better CPA.",
    attribution: "— Growth Lead, SaaS Startup",
  };
  
  const cta = content?.cta || {
    heading: "Ready to accelerate growth?",
    description: "Book a free strategy call and get a tailored growth plan.",
    buttonText: "Book a Strategy Call",
  };
  
  const finalCta = content?.finalCta || {
    heading: "Let's build your growth engine",
    description: "Tell us your goals and we'll propose a plan within 48 hours.",
    buttonText: "Start the conversation",
  };

  return (
    <main className="min-h-dvh">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45rem_30rem_at_20%_20%,rgba(14,165,233,.15),transparent)] dark:bg-[radial-gradient(45rem_30rem_at_20%_20%,rgba(14,165,233,.2),transparent)]" />
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              {heroH1.split('data-driven')[0]}
              <span className="text-sky-600"> data-driven marketing</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-black/70 dark:text-white/70 max-w-xl">
              {heroDescription}
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/contact" className="px-6 py-3 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors">
                Get a Free Consultation
              </a>
              <a href="/services" className="px-6 py-3 rounded-md border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-sky-100 via-white to-amber-50 dark:from-sky-900/20 dark:via-black dark:to-amber-900/10 shadow-sm" />
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold">Capabilities</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map(({ name, description }) => (
            <div key={name} className="rounded-lg border border-black/10 dark:border-white/15 p-6">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-14">
        <p className="text-center text-sm uppercase tracking-wider text-black/60 dark:text-white/60">Trusted by teams at</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center opacity-80">
          {["next.svg","vercel.svg","globe.svg","window.svg","file.svg"].map((src) => (
            <img key={src} alt="logo" src={`/${src}`} className="h-6 md:h-7 dark:invert" />
          ))}
        </div>
      </section>

      {/* Our process */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold">Our Process</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {process.map(({ number, title, description }) => (
            <div key={title} className="rounded-lg border border-black/10 dark:border-white/15 p-6">
              <div className="h-8 w-8 rounded-full bg-sky-500/10 text-sky-600 grid place-items-center font-semibold">{number}</div>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold">Case Studies</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article key={index} className="rounded-xl border border-black/10 dark:border-white/15 p-6 bg-white/60 dark:bg-black/40">
              <span className="text-xs uppercase tracking-wider text-black/60 dark:text-white/60">{study.category}</span>
              <h3 className="mt-2 text-xl font-semibold">{study.heading}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{study.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold">FAQ</h2>
        <div className="mt-6 divide-y divide-black/10 dark:divide-white/15 rounded-xl border border-black/10 dark:border-white/15">
          {faqs.map((faq, index) => (
            <details key={index} className="group p-5">
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="ml-4 text-black/50 dark:text-white/50 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70 max-w-3xl">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-14">
        <div className="rounded-xl border border-black/10 dark:border-white/15 p-6 md:p-10 bg-white/60 dark:bg-black/40">
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70">
            &ldquo;{socialProof.quote}&rdquo;
          </p>
          <p className="mt-3 font-medium">{socialProof.attribution}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-20 md:pb-28">
        <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-r from-sky-500 to-sky-600 text-white">
          <h3 className="text-2xl md:text-4xl font-bold">{cta.heading}</h3>
          <p className="mt-3 text-white/90 max-w-2xl">{cta.description}</p>
          <div className="mt-6">
            <a href="/contact" className="px-6 py-3 rounded-md bg-white text-sky-700 font-medium hover:bg-white/90 transition-colors">
              {cta.buttonText}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-20">
        <div className="rounded-2xl p-8 md:p-12 border border-black/10 dark:border-white/15 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">{finalCta.heading}</h3>
          <p className="mt-3 text-black/70 dark:text-white/70">{finalCta.description}</p>
          <div className="mt-6">
            <a href="/contact" className="px-6 py-3 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors">{finalCta.buttonText}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
