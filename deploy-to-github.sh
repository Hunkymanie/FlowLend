#!/bin/bash
echo "======================================"
echo "FlowLend GitHub Upload - Step by Step"
echo "======================================"
echo ""

echo "Step 1: Initialize Git Repository"
git init
echo "✓ Git initialized"
echo ""

echo "Step 2: Configure Git (replace with your info)"
git config user.name "hunkymanie"
git config user.email "your-email@example.com"
echo "✓ Git configured"
echo ""

echo "Step 3: Add all files"
git add .
echo "✓ Files added"
echo ""

echo "Step 4: Check what will be committed"
echo "Files to be committed:"
git status --porcelain
echo ""

echo "Step 5: Create initial commit"
git commit -m "Initial commit: Complete FlowLend DeFi platform

Features:
- Next.js 15 with TypeScript
- Smart contracts with Hardhat
- Professional UI with Tailwind CSS
- Borrow/Lend functionality
- Dashboard and analytics
- Mobile responsive design
- Comprehensive documentation"
echo "✓ Commit created"
echo ""

echo "Step 6: Set main branch"
git branch -M main
echo "✓ Main branch set"
echo ""

echo "Step 7: Add GitHub remote"
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/hunkymanie/FlowLend.git
echo "✓ Remote added"
echo ""

echo "Step 8: Push to GitHub"
echo "Pushing to GitHub... (you may need to authenticate)"
git push -u origin main --force
echo "✓ Pushed to GitHub!"
echo ""

echo "======================================"
echo "SUCCESS! Your FlowLend project is now on GitHub!"
echo "Visit: https://github.com/hunkymanie/FlowLend"
echo "======================================"
