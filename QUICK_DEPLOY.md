# Quick Deploy Guide - 5 Minutes to Live! 🚀

## The Fastest Way (Vercel)

### 1. Get Your Code on GitHub (2 minutes)

```bash
cd ~/Documents/portfolio/-website

# If you haven't set up git yet:
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Create a new repo on GitHub (https://github.com/new)
# Name it something like "portfolio" or "personal-website"
# Then connect it:
git remote add origin https://github.com/only1collo/YOUR-REPO-NAME.git
git push -u origin main
```

### 2. Deploy to Vercel (2 minutes)

1. Go to **[vercel.com/signup](https://vercel.com/signup)**
2. Click **"Continue with GitHub"**
3. Click **"Add New Project"**
4. Find your portfolio repository and click **"Import"**
5. Change **Root Directory** to `-website`
6. Click **"Deploy"**

That's it! Your site will be live in ~2 minutes at `https://your-project.vercel.app`

### 3. Add Your Email API Key (1 minute)

1. In Vercel, go to your project
2. Click **"Settings"** → **"Environment Variables"**
3. Add:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (get it from [resend.com](https://resend.com))
4. Click **"Save"**
5. Go to **"Deployments"** → Click the three dots on latest deployment → **"Redeploy"**

### 4. Done! 🎉

Your portfolio is now live! Test the contact form to make sure emails work.

---

## Custom Domain (Optional)

Want to use your own domain like `collinsndege.com`?

1. In Vercel, go to **"Settings"** → **"Domains"**
2. Add your domain
3. Update your domain's DNS settings (Vercel will show you exactly what to do)
4. Wait 5-10 minutes for DNS to propagate

---

## Future Updates

To update your site, just push to GitHub:

```bash
git add .
git commit -m "Updated portfolio"
git push
```

Vercel will automatically rebuild and deploy! ✨

---

## Need the Full Guide?

See `DEPLOYMENT_GUIDE.md` for more deployment options and troubleshooting.
