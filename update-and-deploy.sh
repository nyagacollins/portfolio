#!/bin/bash

echo "🔄 Updating dependencies and deploying..."
echo ""

# Add the updated files
echo "Adding updated files..."
git add package.json package-lock.json

# Commit
echo "Committing changes..."
git commit -m "Update Next.js to latest secure version (16.1.6)"

# Push
echo "Pushing to GitHub..."
git push

echo ""
echo "✅ Done! Vercel will automatically redeploy with the updated version."
echo ""
echo "Check your deployment at: https://vercel.com"
