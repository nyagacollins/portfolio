# Portfolio Deployment Guide

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best integration.

### Step 1: Prepare Your Project

1. Make sure your code is pushed to GitHub:
```bash
cd ~/Documents/portfolio/-website
git add .
git commit -m "Ready for deployment"
git push origin main
```

If you haven't initialized git yet:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# Create a new repository on GitHub, then:
git remote add origin https://github.com/only1collo/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and sign in with your GitHub account
3. Click "Add New Project"
4. Import your portfolio repository
5. Configure your project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `-website`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

### Step 3: Add Environment Variables

In the Vercel project settings:
1. Go to "Settings" → "Environment Variables"
2. Add your environment variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (re_...)
   - **Environment**: Production, Preview, Development (select all)
3. Click "Save"

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://your-project-name.vercel.app`

### Step 5: Add Custom Domain (Optional)

1. Go to "Settings" → "Domains"
2. Add your custom domain (e.g., collinsndege.com)
3. Follow the DNS configuration instructions
4. Vercel will automatically provision SSL certificate

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your repository
5. Configure build settings:
   - **Base directory**: `-website`
   - **Build command**: `npm run build`
   - **Publish directory**: `-website/.next`

### Step 3: Add Environment Variables

1. Go to "Site settings" → "Environment variables"
2. Add `RESEND_API_KEY` with your API key

### Step 4: Deploy

Click "Deploy site" and wait for completion.

---

## Option 3: Deploy to Your Own VPS (Advanced)

If you have a VPS (DigitalOcean, AWS, etc.):

### Step 1: Build Your Project

```bash
cd ~/Documents/portfolio/-website
npm run build
```

### Step 2: Set Up Your Server

```bash
# Install Node.js on your server
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Clone your repository
git clone https://github.com/only1collo/your-repo.git
cd your-repo/-website

# Install dependencies
npm install

# Create .env.local with your environment variables
echo "RESEND_API_KEY=your_key_here" > .env.local

# Build the project
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

### Step 3: Set Up Nginx

```bash
sudo apt install nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 4: Set Up SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Quick Deployment Checklist

Before deploying, make sure:

- [ ] All code is committed to Git
- [ ] `.env.local` is in `.gitignore` (don't commit secrets!)
- [ ] You have your Resend API key ready
- [ ] All dependencies are in `package.json`
- [ ] The project builds successfully locally (`npm run build`)
- [ ] You've tested the contact form locally

---

## Post-Deployment

After deployment:

1. **Test the contact form** - Send yourself a test message
2. **Check email delivery** - Verify emails arrive at ndegecollins20@gmail.com
3. **Test on mobile** - Check responsiveness
4. **Check all links** - Verify GitHub, LinkedIn, Twitter links work
5. **Test WhatsApp** - Click the WhatsApp button to verify it opens correctly

---

## Updating Your Site

### For Vercel/Netlify:
Just push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Your site will automatically redeploy!

### For VPS:
```bash
ssh your-server
cd your-repo/-website
git pull
npm install
npm run build
pm2 restart portfolio
```

---

## Troubleshooting

### Build Fails
- Check the build logs for errors
- Make sure all dependencies are installed
- Verify Node.js version compatibility

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set in environment variables
- Check the API route logs
- Verify your Resend account is active

### Site Not Loading
- Check DNS settings
- Verify deployment completed successfully
- Check server logs

---

## Need Help?

If you run into issues:
1. Check the deployment logs
2. Verify environment variables are set
3. Test locally first with `npm run build && npm start`
4. Check the platform's documentation (Vercel/Netlify)

Good luck with your deployment! 🚀
