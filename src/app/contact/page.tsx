import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ankit Ranjan Digital Marketing Solution for a free consultation.",
};

export default function ContactPage() {
  return (
    <main className="min-h-dvh px-6 py-16 md:py-20 md:px-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <p className="mt-4 text-black/70 dark:text-white/70">
          Ready to grow? Email us at <a className="underline" href="mailto:hello@example.com">hello@example.com</a>.
        </p>
        <div className="mt-8">
          <a href="mailto:hello@example.com" className="px-5 py-3 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors">
            Request a Free Consultation
          </a>
        </div>
      </div>
    </main>
  );
}


