# Netlify CMS Troubleshooting Guide

## Error: "Unable to access identity settings"

### Cause
This error appears when:
1. Netlify Identity is not enabled
2. Git Gateway is not enabled
3. You're testing locally (CMS only works when deployed on Netlify)

### Solutions

## Solution 1: Enable Identity & Git Gateway (For Production)

### Step 1: Deploy to Netlify

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add Netlify CMS"
   git push origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Log in or sign up
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Click "Deploy site"

3. **Wait for deployment to complete** (about 2-3 minutes)

### Step 2: Enable Identity

1. In Netlify dashboard, click on your site
2. Go to **Site settings**
3. Scroll down and click **Identity** in the left sidebar
4. Click **Enable Identity** button
5. Wait for it to initialize (may take 10-30 seconds)

### Step 3: Enable Git Gateway

1. Still in Identity settings, scroll down to **Services**
2. Click **Enable Git Gateway** button
3. Wait for it to initialize

### Step 4: Invite Your First User

1. In the Identity section, click **Invite users**
2. Enter the email address of the person who will edit content
3. Click **Send invite**
4. They will receive an email to set up their password

### Step 5: Test the CMS

1. Go to `https://your-site-name.netlify.app/admin`
2. Click "Log in with Netlify Identity"
3. Enter email and password
4. You should now see the CMS dashboard!

---

## Solution 2: Test Locally (Advanced)

If you want to test the CMS locally before deploying:

### Option A: Use Proxy Mode (Recommended for Local Testing)

1. Start your Next.js dev server:
   ```bash
   pnpm dev
   ```

2. In a new terminal, start the Netlify CMS proxy:
   ```bash
   npx netlify-cms-proxy-server
   ```

3. Update `public/admin/config.yml`:
   ```yaml
   backend:
     name: proxy
     proxy_url: http://localhost:8081/api/v1
     branch: main
   ```

4. Go to `http://localhost:3000/admin`

### Option B: Use Test Backend (Read-Only)

For testing the CMS interface without saving:

1. Update `public/admin/config.yml`:
   ```yaml
   backend:
     name: test-repo
   ```

2. Go to `http://localhost:3000/admin`

**Note:** This won't actually save changes, but you can see the CMS interface.

---

## Solution 3: Alternative - Use Vercel with Different CMS

If you're hosting on Vercel instead of Netlify, use one of these alternatives:

### Option A: Forestry CMS (Now TinaCMS)
- Works with any Git provider
- Not free, but has a free tier

### Option B: Sanity CMS
- Headless CMS
- Free tier available
- Requires integration with Next.js

### Option C: Contentful CMS
- Headless CMS
- Free tier available
- Requires integration with Next.js

---

## Complete Setup Checklist

- [ ] Code pushed to GitHub
- [ ] Site deployed to Netlify
- [ ] Netlify Identity enabled
- [ ] Git Gateway enabled
- [ ] Test user invited
- [ ] Can access `/admin` page
- [ ] Can log in with email/password
- [ ] Can see CMS dashboard
- [ ] Can edit content
- [ ] Changes save successfully

---

## Common Issues

### Issue 1: "Identity service not found"
**Solution:** Make sure you enabled Identity in Netlify dashboard

### Issue 2: "Git Gateway not available"
**Solution:** Enable Git Gateway in Identity settings

### Issue 3: "Can't log in"
**Solution:**
1. Check you received the invite email
2. Try "Forgot password"
3. Make sure Identity is enabled

### Issue 4: "Changes not saving"
**Solution:**
1. Check Git Gateway is enabled
2. Check GitHub integration in Netlify
3. Look at build logs for errors

### Issue 5: CMS loads but can't see collections
**Solution:** Check `config.yml` file exists and is valid YAML

---

## Testing Your Setup

### Test 1: Can you access the admin page?
- URL: `https://your-site.netlify.app/admin`
- Should show: Login button or CMS dashboard

### Test 2: Can you log in?
- Click "Log in with Netlify Identity"
- Enter email/password
- Should see: CMS dashboard with collections

### Test 3: Can you edit content?
- Click on "Homepage" collection
- Make a small change
- Click "Save"
- Should see: Success message

### Test 4: Do changes appear on site?
- After saving, wait 1-2 minutes
- Go to your live site
- Check if changes appear

---

## Quick Commands Reference

### Local Development
```bash
# Start Next.js
pnpm dev

# Start Netlify CMS proxy (in separate terminal)
npx netlify-cms-proxy-server
```

### Deploy to Netlify
```bash
# Push to GitHub
git add .
git commit -m "Your message"
git push origin main

# Netlify auto-deploys
```

### Update Content Files
```bash
# Files are in content/ folder
content/
  ├── homepage.yml
  ├── services-page.yml
  ├── about-page.yml
  └── contact-page.yml
```

---

## Still Having Issues?

### Check These:

1. **Is your site deployed on Netlify?**
   - CMS doesn't work on localhost without proxy
   - Must be deployed to Netlify

2. **Is Identity enabled?**
   - Go to Site settings → Identity
   - Should say "Enabled"

3. **Is Git Gateway enabled?**
   - In Identity settings, scroll to Services
   - Should say "Enabled"

4. **Did you receive invite email?**
   - Check spam folder
   - Try resending invite

5. **Check browser console for errors**
   - Press F12
   - Look at Console tab
   - Share any red error messages

---

## Need More Help?

- [Netlify CMS Docs](https://www.netlifycms.org/docs/)
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway Docs](https://www.netlify.com/docs/git-gateway/)

### Video Tutorial
Watch this setup tutorial: [How to Set Up Netlify CMS](https://www.youtube.com/watch?v=Y8w8TU6Y5lY)

---

**Important:** The CMS admin interface at `/admin` only works when:
1. Your site is deployed on Netlify (not Vercel or other hosting)
2. Netlify Identity is enabled
3. Git Gateway is enabled

If you're hosting elsewhere, you'll need to use a different CMS solution.
