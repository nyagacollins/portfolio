# Git Setup - Step by Step

## Problem: Only README is being pushed to GitHub

This usually happens when git isn't properly tracking all files. Let's fix it!

## Solution: Fresh Git Setup

### Option 1: Use the Setup Script (Easiest)

```bash
cd ~/Documents/portfolio/-website
./setup-git.sh
```

Follow the prompts, then continue to "Push to GitHub" below.

---

### Option 2: Manual Setup

Run these commands one by one:

```bash
cd ~/Documents/portfolio/-website

# Remove existing git (if any)
rm -rf .git

# Initialize fresh git repository
git init

# Add ALL files
git add .

# Check what will be committed (should see MANY files)
git status

# You should see files like:
# - app/
# - components/
# - package.json
# - etc.

# If you only see README.md, something is wrong with .gitignore
# Check: cat .gitignore

# Commit all files
git commit -m "Initial commit - Portfolio website"

# Verify files are committed
git log --stat
```

---

## Push to GitHub

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you like)
3. Make it **Public** or **Private**
4. **DO NOT** check "Add a README file"
5. Click "Create repository"

### Step 2: Connect and Push

GitHub will show you commands. Use these:

```bash
cd ~/Documents/portfolio/-website

# Set branch to main
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/only1collo/YOUR-REPO-NAME.git

# Push everything
git push -u origin main
```

### Step 3: Verify on GitHub

Go to your repository on GitHub and check:
- You should see folders: `app/`, `components/`, etc.
- You should see files: `package.json`, `next.config.js`, etc.
- NOT just README.md

---

## Common Issues

### Issue 1: "node_modules" being added

If you see node_modules in git status:
```bash
echo "node_modules/" >> .gitignore
git rm -r --cached node_modules
git commit -m "Remove node_modules"
```

### Issue 2: ".env.local" being added

This file contains secrets and should NOT be pushed:
```bash
git rm --cached .env.local
git commit -m "Remove .env.local"
```

### Issue 3: Still only seeing README

Check your .gitignore file:
```bash
cat .gitignore
```

Make sure it doesn't have patterns that exclude your code folders.

### Issue 4: Permission denied (publickey)

You need to set up SSH keys or use HTTPS with a personal access token.

For HTTPS (easier):
```bash
git remote set-url origin https://github.com/only1collo/YOUR-REPO-NAME.git
```

Then when you push, use your GitHub username and a Personal Access Token (not password).

Get a token here: https://github.com/settings/tokens

---

## Verify Everything is Tracked

Run this to see all tracked files:

```bash
git ls-files
```

You should see MANY files including:
- app/layout.tsx
- app/page.tsx
- components/sections/Hero.tsx
- components/sections/About.tsx
- etc.

If you only see README.md, the files weren't added properly.

---

## Quick Test

After pushing, clone your repo in a different location to verify:

```bash
cd /tmp
git clone https://github.com/only1collo/YOUR-REPO-NAME.git test-clone
cd test-clone
ls -la
```

You should see all your project files!

---

## Need Help?

If you're still having issues, run these diagnostic commands and share the output:

```bash
cd ~/Documents/portfolio/-website
echo "=== Git Status ==="
git status

echo "=== Tracked Files ==="
git ls-files | head -20

echo "=== .gitignore ==="
cat .gitignore

echo "=== Directory Contents ==="
ls -la
```
