import type { Metadata } from "next";
import { getContactContent } from "@/lib/content";

export function generateMetadata(): Metadata {
  const content = getContactContent();
  
  return {
    title: content?.metaDescription ? `Contact | ${content.title}` : "Contact",
    description: content?.metaDescription || "Contact Ankit Ranjan Digital Marketing Solution for a free consultation.",
    keywords: content?.keywords,
  };
}

export default function ContactPage() {
  const content = getContactContent();

  // Fallback to default content if file doesn't exist yet
  const h1 = content?.h1 || "Contact";
  const email = content?.email || "hello@example.com";
  const contactText = content?.contactText || "Ready to grow? Email us.";

  return (
    <main className="min-h-dvh px-6 py-16 md:py-20 md:px-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold">{h1}</h1>
        <p className="mt-4 text-black/70 dark:text-white/70">
          {contactText} <a className="underline" href={`mailto:${email}`}>{email}</a>.
        </p>
        <div className="mt-8">
          <a href={`mailto:${email}`} className="px-5 py-3 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors">
            Request a Free Consultation
          </a>
        </div>
      </div>
    </main>
  );
}


