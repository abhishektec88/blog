import type { Metadata } from "next";
import { getAboutContent } from "@/lib/content";

export function generateMetadata(): Metadata {
  const content = getAboutContent();
  
  return {
    title: content?.metaDescription ? `About | ${content.title}` : "About",
    description: content?.metaDescription || "Learn about Ankit Ranjan Digital Marketing Solution and our growth philosophy.",
    keywords: content?.keywords,
  };
}

export default function AboutPage() {
  const content = getAboutContent();

  // Fallback to default content if file doesn't exist yet
  const h1 = content?.h1 || "About";
  const aboutText = content?.aboutText || "We are a results-driven digital marketing partner focused on measurable growth. Our approach blends strategy, creative, and analytics to build enduring brands.";

  return (
    <main className="min-h-dvh px-6 py-16 md:py-20 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold">{h1}</h1>
        <p className="mt-4 text-black/70 dark:text-white/70 whitespace-pre-line">
          {aboutText}
        </p>
      </div>
    </main>
  );
}


