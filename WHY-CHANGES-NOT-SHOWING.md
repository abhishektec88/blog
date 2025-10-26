# Why Changes from CMS Aren't Showing on Your Website

## Problem
You've edited content in the CMS, saved successfully, but the changes aren't appearing on your website.

## Root Cause
**The website code is hardcoded, not reading from the content files!**

Currently your website looks like this:
```tsx
// src/app/page.tsx
<h1>Grow faster with data-driven marketing</h1>
```

But the content files are here:
```yaml
# content/homepage.yml
heroH1: "Grow faster with data-driven marketing"
```

**The website doesn't know about these content files yet!**

---

## Solution: Make Your Website Read from Content Files

Your website needs to be updated to READ from those YAML files. Here's how:

### Option 1: Use a Node.js Library (Recommended)

Install a YAML parser and read the content files in your page components.

1. **Install the library:**
```bash
pnpm add js-yaml
pnpm add -D @types/js-yaml
```

2. **Create a utility to read content:**

Create `src/lib/content.ts`:
```typescript
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const contentDirectory = path.join(process.cwd(), 'content');

export function getHomepageContent() {
  const fileContents = fs.readFileSync(
    path.join(contentDirectory, 'homepage.yml'),
    'utf8'
  );
  return yaml.load(fileContents) as any;
}

export function getServicesContent() {
  const fileContents = fs.readFileSync(
    path.join(contentDirectory, 'services-page.yml'),
    'utf8'
  );
  return yaml.load(fileContents) as any;
}

export function getAboutContent() {
  const fileContents = fs.readFileSync(
    path.join(contentDirectory, 'about-page.yml'),
    'utf8'
  );
  return yaml.load(fileContents) as any;
}

export function getContactContent() {
  const fileContents = fs.readFileSync(
    path.join(contentDirectory, 'contact-page.yml'),
    'utf8'
  );
  return yaml.load(fileContents) as any;
}
```

3. **Update your pages to use the content:**

Then update `src/app/page.tsx` to use this content instead of hardcoded values.

---

## Complete Implementation

Let me create the updated files for you:

