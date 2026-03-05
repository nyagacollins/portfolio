#!/bin/bash

echo "🔄 Reinstalling dependencies..."
echo ""

# Remove old files
echo "Cleaning up..."
rm -rf node_modules package-lock.json

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if successful
if [ -d "node_modules" ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "You can now run:"
    echo "  npm run dev    - Start development server"
    echo "  npm run build  - Build for production"
else
    echo ""
    echo "❌ Installation failed. Try running manually:"
    echo "  npm install"
fi
