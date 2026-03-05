#!/bin/bash

echo "================================================"
echo "  Portfolio Installation & Setup"
echo "================================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    echo "Please run this script from the -website directory"
    exit 1
fi

echo "✓ Found package.json"
echo ""

# Step 1: Clean up
echo "Step 1: Cleaning up old files..."
rm -rf node_modules package-lock.json .next
echo "✓ Cleaned"
echo ""

# Step 2: Check Node.js version
echo "Step 2: Checking Node.js..."
NODE_VERSION=$(node --version 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✓ Node.js version: $NODE_VERSION"
else
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi
echo ""

# Step 3: Check npm
echo "Step 3: Checking npm..."
NPM_VERSION=$(npm --version 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✓ npm version: $NPM_VERSION"
else
    echo "❌ npm not found. Please install npm first."
    exit 1
fi
echo ""

# Step 4: Clear npm cache
echo "Step 4: Clearing npm cache..."
npm cache clean --force 2>&1 | grep -v "npm warn"
echo "✓ Cache cleared"
echo ""

# Step 5: Install dependencies
echo "Step 5: Installing dependencies..."
echo "(This may take 1-2 minutes, please wait...)"
echo ""

npm install 2>&1 | while IFS= read -r line; do
    if [[ "$line" == *"added"* ]] || [[ "$line" == *"packages"* ]]; then
        echo "$line"
    fi
done

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Installation failed!"
    echo ""
    echo "Try running manually:"
    echo "  npm install"
    exit 1
fi

echo ""
echo "✓ Dependencies installed"
echo ""

# Step 6: Verify Next.js
echo "Step 6: Verifying Next.js installation..."
if [ -f "node_modules/.bin/next" ]; then
    echo "✓ Next.js binary found"
else
    echo "❌ Next.js binary not found!"
    echo ""
    echo "Trying to install Next.js specifically..."
    npm install next@latest
    
    if [ -f "node_modules/.bin/next" ]; then
        echo "✓ Next.js installed successfully"
    else
        echo "❌ Still failed. Please try:"
        echo "  npm install next@latest --force"
        exit 1
    fi
fi
echo ""

# Step 7: Check environment variables
echo "Step 7: Checking environment variables..."
if [ -f ".env.local" ]; then
    echo "✓ .env.local exists"
    if grep -q "RESEND_API_KEY=re_" .env.local 2>/dev/null; then
        echo "✓ RESEND_API_KEY is configured"
    else
        echo "⚠  RESEND_API_KEY not set (contact form won't work)"
        echo "   Get your API key from: https://resend.com"
    fi
else
    echo "⚠  .env.local not found"
    echo "   Creating template..."
    echo "RESEND_API_KEY=" > .env.local
    echo "✓ Created .env.local (add your Resend API key)"
fi
echo ""

# Step 8: Test build
echo "Step 8: Testing build..."
npm run build > /tmp/portfolio-build.log 2>&1

if [ $? -eq 0 ]; then
    echo "✓ Build successful!"
else
    echo "❌ Build failed!"
    echo ""
    echo "Last 30 lines of build log:"
    tail -30 /tmp/portfolio-build.log
    exit 1
fi
echo ""

echo "================================================"
echo "  ✅ Installation Complete!"
echo "================================================"
echo ""
echo "Your portfolio is ready to run!"
echo ""
echo "To start the development server:"
echo "  npm run dev"
echo ""
echo "Then open your browser to:"
echo "  http://localhost:3000"
echo ""
echo "To build for production:"
echo "  npm run build"
echo ""
echo "To deploy to Vercel:"
echo "  git add ."
echo "  git commit -m 'Ready for deployment'"
echo "  git push"
echo ""
