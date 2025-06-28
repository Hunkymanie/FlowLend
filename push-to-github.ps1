# PowerShell script to push FlowLend to GitHub
Write-Host "🚀 Pushing FlowLend to GitHub..." -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Check git status
Write-Host "📊 Current git status:" -ForegroundColor Cyan
git status

# Add all files
Write-Host "📁 Adding all files..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "Complete FlowLend DeFi platform - cleaned up and production ready"

# Set main branch
Write-Host "🌳 Setting main branch..." -ForegroundColor Yellow
git branch -M main

# Add remote origin (remove if exists first)
Write-Host "🔗 Setting up remote origin..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/hunkymanie/FlowLend.git

# Show remotes
Write-Host "📡 Remote repositories:" -ForegroundColor Cyan
git remote -v

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Green
Write-Host "⚠️  You may need to authenticate with GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "✅ Done! Check your repository at: https://github.com/hunkymanie/FlowLend" -ForegroundColor Green
