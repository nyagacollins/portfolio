#!/bin/bash

echo "🔧 Fixing deployment issues..."
echo ""

# Add the updated files
echo "Adding updated package files..."
git add package.json package-lock.json

# Commit
echo "Committing changes..."
git commit -m "Fix: Remove unused 3D libraries causing React 19 conflicts"

# Push
echo "Pushing to GitHub..."
git push

echo ""
echo "✅ Done! Vercel will automatically redeploy."
echo ""
echo "Changes made:"
echo "- Removed @react-spring/web (not used, conflicts with React 19)"
echo "- Removed @react-three/fiber (not used)"
echo "- Removed @react-three/drei (not used)"
echo "- Removed three.js (not used)"
echo ""
echo "Your portfolio uses Framer Motion for animations, which works perfectly with React 19!"
echo ""
echo "Check deployment at: https://vercel.com"
