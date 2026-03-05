#!/bin/bash

set -e

echo "=========================================="
echo "  PORTFOLIO INSTALLATION FIX"
echo "=========================================="
echo ""

cd ~/Documents/portfolio/-website

echo "Step 1: Cleaning..."
rm -rf node_modules package-lock.json .next
echo "✓ Cleaned"
echo ""

echo "Step 2: Installing with legacy peer deps..."
npm install --legacy-peer-deps
echo "✓ Installed"
echo ""

echo "Step 3: Verifying Next.js..."
if [ -f "node_modules/.bin/next" ]; then
    echo "✓ Next.js found"
else
    echo "✗ Next.js not found, installing separately..."
    npm install next@latest --legacy-peer-deps
fi
echo ""

echo "Step 4: Testing..."
if [ -f "node_modules/.bin/next" ]; then
    echo "✓ Ready to run!"
    echo ""
    echo "=========================================="
    echo "  SUCCESS!"
    echo "=========================================="
    echo ""
    echo "Now run:"
    echo "  npm run dev"
    echo ""
    echo "Then open: http://localhost:3000"
else
    echo "✗ Installation failed"
    echo ""
    echo "Try manually:"
    echo "  npm install --force"
fi
