import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ankit Ranjan Digital Marketing Solution and our growth philosophy.",
};

export default function AboutPage() {
  return (
    <main className="min-h-dvh px-6 py-16 md:py-20 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold">About</h1>
        <p className="mt-4 text-black/70 dark:text-white/70">
          We are a results-driven digital marketing partner focused on measurable growth.
          Our approach blends strategy, creative, and analytics to build enduring brands.
        </p>
      </div>
    </main>
  );
}


