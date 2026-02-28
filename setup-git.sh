#!/bin/bash

echo "Setting up Git repository..."
echo ""

# Remove existing git if any
if [ -d ".git" ]; then
    echo "Removing existing .git directory..."
    rm -rf .git
fi

# Initialize git
echo "Initializing git..."
git init

# Add all files
echo "Adding all files..."
git add .

# Show what will be committed
echo ""
echo "Files to be committed:"
git status --short

# Count files
file_count=$(git status --short | wc -l)
echo ""
echo "Total files: $file_count"

# Commit
echo ""
read -p "Commit these files? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git commit -m "Initial commit - Portfolio website"
    echo ""
    echo "✓ Files committed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Create a new repository on GitHub: https://github.com/new"
    echo "2. Run these commands:"
    echo ""
    echo "   git branch -M main"
    echo "   git remote add origin https://github.com/only1collo/YOUR-REPO-NAME.git"
    echo "   git push -u origin main"
    echo ""
else
    echo "Commit cancelled"
fi
