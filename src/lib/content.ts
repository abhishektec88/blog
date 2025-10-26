import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const contentDirectory = path.join(process.cwd(), 'content');

export function getHomepageContent() {
  try {
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, 'homepage.yml'),
      'utf8'
    );
    return yaml.load(fileContents) as {
      title: string;
      description: string;
      keywords: string[];
      heroH1: string;
      heroDescription: string;
      seoTitle: string;
      seoDescription: string;
      services: Array<{ name: string; description: string }>;
      process: Array<{ number: number; title: string; description: string }>;
      caseStudies?: Array<{ category: string; heading: string; description: string }>;
      faqs?: Array<{ question: string; answer: string }>;
      socialProof?: { quote: string; attribution: string };
      cta?: { heading: string; description: string; buttonText: string };
      finalCta?: { heading: string; description: string; buttonText: string };
    };
  } catch (error) {
    console.error('Error reading homepage content:', error);
    return null;
  }
}

export function getServicesContent() {
  try {
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, 'services-page.yml'),
      'utf8'
    );
    return yaml.load(fileContents) as {
      title: string;
      metaDescription: string;
      keywords: string[];
      h1: string;
      introText: string;
      services: Array<{ title: string; description: string }>;
    };
  } catch (error) {
    console.error('Error reading services content:', error);
    return null;
  }
}

export function getAboutContent() {
  try {
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, 'about-page.yml'),
      'utf8'
    );
    return yaml.load(fileContents) as {
      title: string;
      metaDescription: string;
      keywords: string[];
      h1: string;
      aboutText: string;
    };
  } catch (error) {
    console.error('Error reading about content:', error);
    return null;
  }
}

export function getContactContent() {
  try {
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, 'contact-page.yml'),
      'utf8'
    );
    return yaml.load(fileContents) as {
      title: string;
      metaDescription: string;
      keywords: string[];
      h1: string;
      email: string;
      contactText: string;
    };
  } catch (error) {
    console.error('Error reading contact content:', error);
    return null;
  }
}
