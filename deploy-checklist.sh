#!/bin/bash

echo "🚀 Portfolio Deployment Checklist"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the -website directory"
    exit 1
fi

echo "✓ In correct directory"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "⚠️  Git not initialized. Initializing now..."
    git init
    git branch -M main
    echo "✓ Git initialized"
else
    echo "✓ Git already initialized"
fi

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "⚠️  You have uncommitted changes"
    echo ""
    git status -s
    echo ""
    read -p "Do you want to commit these changes? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter commit message: " commit_msg
        git add .
        git commit -m "$commit_msg"
        echo "✓ Changes committed"
    fi
else
    echo "✓ No uncommitted changes"
fi

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✓ .env.local exists"
    if grep -q "RESEND_API_KEY=re_" .env.local; then
        echo "✓ RESEND_API_KEY is set"
    else
        echo "⚠️  RESEND_API_KEY might not be set correctly"
    fi
else
    echo "⚠️  .env.local not found (needed for local testing)"
fi

# Check if remote is set
if git remote -v | grep -q "origin"; then
    echo "✓ Git remote is configured"
    git remote -v
else
    echo "⚠️  No git remote configured"
    echo ""
    echo "To add a remote:"
    echo "  git remote add origin https://github.com/only1collo/your-repo-name.git"
fi

# Test build
echo ""
echo "Testing build..."
if npm run build > /dev/null 2>&1; then
    echo "✓ Build successful"
else
    echo "❌ Build failed! Fix errors before deploying"
    npm run build
    exit 1
fi

echo ""
echo "=================================="
echo "✅ Ready to deploy!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Go to vercel.com and import your repository"
echo "3. Add RESEND_API_KEY to Vercel environment variables"
echo "4. Deploy!"
echo ""
echo "See DEPLOYMENT_GUIDE.md for detailed instructions"
