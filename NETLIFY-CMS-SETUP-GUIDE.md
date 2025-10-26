# Netlify CMS Setup Guide for Non-Technical SEO Users

## Overview

This guide will help you set up a web-based content management system (CMS) so SEO professionals can update content, keywords, titles, and descriptions without touching code.

## What is Netlify CMS (Decap CMS)?

Netlify CMS (now called Decap CMS) is a Git-based content management system that provides a web interface for editing content. Your SEO person can log in and update content directly from their browser.

## Features

- ✅ Edit SEO titles and descriptions
- ✅ Update keywords
- ✅ Change page content
- ✅ Add/edit FAQ items
- ✅ Update service descriptions
- ✅ No coding knowledge required
- ✅ Live preview of changes
- ✅ Version control (all changes tracked)

## Setup Instructions

### Step 1: Deploy to Netlify

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add Netlify CMS"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect Next.js
   - Click "Deploy site"

### Step 2: Enable Netlify Identity

1. In Netlify dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select **Invite only** or **Open**
4. Under **External providers**, you can configure:
   - Google
   - GitHub
   - GitLab
   - Bitbucket
   - Email/Password

### Step 3: Configure Git Gateway

1. In **Identity** settings, scroll down to **Services**
2. Click **Enable Git Gateway**
3. This allows CMS users to save changes to your Git repository

### Step 4: Create Your First CMS User

1. Go to **Identity** → **Invite users**
2. Enter the SEO person's email address
3. Click **Send invite**
4. They will receive an email to set up their password

## How to Use the CMS

### For SEO Professional:

1. **Access the CMS**
   - Go to `https://your-site.netlify.app/admin`
   - Login with email/password or social provider

2. **Edit Homepage Content**
   - Click **Homepage** in the sidebar
   - Edit:
     - Site Title
     - Keywords (add/remove)
     - Meta Description
     - Hero H1 Heading
     - Hero Description
     - Service descriptions
     - Process steps
   - Click **Save**

3. **Edit Services Page**
   - Click **Services Page** in the sidebar
   - Update:
     - Page Title
     - Meta Description
     - Keywords
     - Service cards

4. **Edit About Page**
   - Click **About Page**
   - Update content and SEO fields

5. **Edit Contact Page**
   - Click **Contact Page**
   - Update email and contact information

6. **Manage FAQ**
   - Click **FAQ** in sidebar
   - Add new FAQ items
   - Edit existing questions
   - Set order number

### What Happens When You Save?

1. Your changes are saved to a YAML file
2. Changes are committed to Git
3. Netlify automatically redeploys the site
4. New version goes live in 1-2 minutes

## File Structure

```
your-site/
├── content/
│   ├── homepage.yml         ← Homepage content
│   ├── services-page.yml    ← Services page
│   ├── about-page.yml       ← About page
│   ├── contact-page.yml     ← Contact page
│   └── faqs/                ← FAQ items
├── public/
│   └── admin/
│       ├── index.html       ← CMS interface
│       └── config.yml       ← CMS configuration
```

## What Can Be Edited

### Homepage (`content/homepage.yml`)
- Site title
- Keywords (add/remove)
- Hero heading
- Hero description
- Meta title
- Meta description
- Services list
- Process steps

### Services Page (`content/services-page.yml`)
- Page title
- Meta description
- Keywords
- H1 heading
- Service cards (title + description)

### About Page (`content/about-page.yml`)
- Page title
- Meta description
- Keywords
- About text content

### Contact Page (`content/contact-page.yml`)
- Page title
- Meta description
- Keywords
- Email address
- Contact text

### FAQ (`content/faqs/*.md`)
- Question
- Answer
- Display order

## Customization

### Add New Fields

Edit `public/admin/config.yml` to add new fields:

```yaml
fields:
  - { label: "Your Field Name", name: "fieldName", widget: "string" }
```

### Widget Types

- `string` - Single line text
- `text` - Multi-line text
- `markdown` - Rich text with formatting
- `number` - Numbers
- `list` - List of items
- `select` - Dropdown menu
- `boolean` - Checkbox
- `date` - Date picker
- `datetime` - Date and time picker
- `file` - Image upload
- `image` - Image with alt text

### Example: Adding Image Field

```yaml
- { label: "Hero Image", name: "heroImage", widget: "image" }
```

## Security

### User Roles (Optional)

1. Go to **Identity** → **Users**
2. Click on user
3. Assign role: `editor` or `admin`

### Access Control

- Users can only edit content (not code)
- All changes are tracked in Git
- Review changes before they go live
- Roll back if needed

## Troubleshooting

### Can't Login

1. Check email for invite
2. Try "Forgot password"
3. Contact site owner

### Changes Not Showing

1. Wait 1-2 minutes for deployment
2. Check Netlify build logs
3. Clear browser cache
4. Check Git for committed changes

### Error Saving

1. Check internet connection
2. Try again in a few minutes
3. Contact site owner if persistent

## Tips for SEO Users

### Keywords

- Add one per line
- Use lowercase
- Include location if targeting local traffic
- Keep to relevant, specific terms

### Meta Descriptions

- Keep under 160 characters
- Include a call-to-action
- Mention main keyword
- Make it compelling

### Titles

- Keep under 60 characters
- Include primary keyword
- Make it unique per page
- Use title case

### Content Updates

- Update content regularly for SEO
- Add new FAQ items frequently
- Keep service descriptions fresh
- Add location keywords for local SEO

## Example Workflow

**Monday Morning:**

1. Log in to CMS at `your-site.netlify.app/admin`
2. Review current keywords
3. Research new keywords to add
4. Update meta descriptions
5. Add new FAQ item
6. Save and publish
7. Site updates automatically in 2 minutes

**Weekly:**

- Update service descriptions
- Add new keywords
- Update hero text
- Refresh case studies

**Monthly:**

- Review all pages
- Update outdated content
- Add seasonal keywords
- Refresh testimonials

## Need Help?

### Resources

- [Netlify CMS Docs](https://www.netlifycms.org/docs/)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Netlify Support](https://www.netlify.com/support/)

### Contact

For technical issues, contact the website developer.

## Quick Reference

| Action | Location | File |
|--------|----------|------|
| Edit homepage | Homepage → Edit | `content/homepage.yml` |
| Edit services | Services Page → Edit | `content/services-page.yml` |
| Edit about | About Page → Edit | `content/about-page.yml` |
| Edit contact | Contact Page → Edit | `content/contact-page.yml` |
| Add FAQ | FAQ → New | `content/faqs/*.md` |
| Update keywords | Any page → Keywords field | Various |
| Update SEO title | Any page → Meta Title | Various |

---

**Note**: This system works with Netlify hosting. If hosting elsewhere, contact the developer for setup.
