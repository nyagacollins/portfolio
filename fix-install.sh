#!/bin/bash

set -e  # Exit on error

echo "🔧 Fixing npm installation..."
echo ""

# Step 1: Clean everything
echo "Step 1: Cleaning old files..."
rm -rf node_modules package-lock.json .next
echo "✓ Cleaned"

# Step 2: Clear npm cache
echo ""
echo "Step 2: Clearing npm cache..."
npm cache clean --force
echo "✓ Cache cleared"

# Step 3: Install dependencies
echo ""
echo "Step 3: Installing dependencies (this may take a minute)..."
npm install --verbose

# Step 4: Verify installation
echo ""
echo "Step 4: Verifying installation..."
if [ -f "node_modules/.bin/next" ]; then
    echo "✓ Next.js installed successfully"
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "You can now run:"
    echo "  npm run dev"
else
    echo "❌ Installation failed - Next.js binary not found"
    echo ""
    echo "Please try manually:"
    echo "  npm install"
    exit 1
fi
