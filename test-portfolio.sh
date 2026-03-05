#!/bin/bash

echo "🧪 Testing Portfolio Setup"
echo "=========================="
echo ""

# Check Node.js
echo "1. Checking Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "   ✓ Node.js installed: $NODE_VERSION"
else
    echo "   ✗ Node.js not found!"
    exit 1
fi

# Check npm
echo "2. Checking npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "   ✓ npm installed: $NPM_VERSION"
else
    echo "   ✗ npm not found!"
    exit 1
fi

# Check node_modules
echo "3. Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "   ✓ node_modules exists"
else
    echo "   ✗ node_modules missing"
    echo ""
    echo "   Installing dependencies..."
    npm install
    if [ $? -eq 0 ]; then
        echo "   ✓ Dependencies installed"
    else
        echo "   ✗ Installation failed"
        exit 1
    fi
fi

# Check if Next.js is installed
echo "4. Checking Next.js..."
if [ -f "node_modules/.bin/next" ]; then
    echo "   ✓ Next.js installed"
else
    echo "   ✗ Next.js not found in node_modules"
    exit 1
fi

# Test build
echo "5. Testing production build..."
npm run build > /tmp/build.log 2>&1
if [ $? -eq 0 ]; then
    echo "   ✓ Build successful!"
else
    echo "   ✗ Build failed!"
    echo ""
    echo "   Last 20 lines of build log:"
    tail -20 /tmp/build.log
    exit 1
fi

# Check .env.local
echo "6. Checking environment variables..."
if [ -f ".env.local" ]; then
    if grep -q "RESEND_API_KEY=" .env.local; then
        if grep -q "RESEND_API_KEY=re_" .env.local; then
            echo "   ✓ RESEND_API_KEY is set"
        else
            echo "   ⚠ RESEND_API_KEY exists but may not be configured"
        fi
    else
        echo "   ⚠ RESEND_API_KEY not found in .env.local"
    fi
else
    echo "   ⚠ .env.local not found (contact form won't work)"
fi

echo ""
echo "=========================="
echo "✅ All tests passed!"
echo ""
echo "To run the portfolio locally:"
echo "  npm run dev"
echo ""
echo "Then open: http://localhost:3000"
echo ""
echo "To deploy:"
echo "  git add ."
echo "  git commit -m 'Ready for deployment'"
echo "  git push"
