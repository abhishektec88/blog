// Import YAML files directly using webpack loader
import homepageContent from '../../content/homepage.yml';
import servicesContent from '../../content/services-page.yml';
import aboutContent from '../../content/about-page.yml';
import contactContent from '../../content/contact-page.yml';

export function getHomepageContent() {
  return homepageContent as {
    title: string;
    description: string;
    keywords: string[];
    heroH1: string;
    heroDescription: string;
    seoTitle: string;
    seoDescription: string;
    services: Array<{ name: string; description: string }>;
    process: Array<{ number: number; title: string; description: string }>;
  };
}

export function getServicesContent() {
  return servicesContent as {
    title: string;
    metaDescription: string;
    keywords: string[];
    h1: string;
    introText: string;
    services: Array<{ title: string; description: string }>;
  };
}

export function getAboutContent() {
  return aboutContent as {
    title: string;
    metaDescription: string;
    keywords: string[];
    h1: string;
    aboutText: string;
  };
}

export function getContactContent() {
  return contactContent as {
    title: string;
    metaDescription: string;
    keywords: string[];
    h1: string;
    email: string;
    contactText: string;
  };
}
