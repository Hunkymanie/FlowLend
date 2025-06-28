# FlowLend GitHub Upload - Manual Commands

## IMPORTANT: Run these commands in PowerShell/CMD in your project directory

### Step 1: Navigate to project directory
```cmd
cd "C:\Users\TOBILOBA\FlowLend"
```

### Step 2: Initialize and configure Git
```cmd
git init
git config user.name "hunkymanie"
git config user.email "your-email@example.com"
```

### Step 3: Stage all files
```cmd
git add .
```

### Step 4: Check what will be committed
```cmd
git status
```

### Step 5: Create commit
```cmd
git commit -m "Complete FlowLend DeFi Platform - Next.js TypeScript Hardhat Smart Contracts"
```

### Step 6: Set up GitHub
```cmd
git branch -M main
git remote remove origin
git remote add origin https://github.com/hunkymanie/FlowLend.git
```

### Step 7: Push to GitHub
```cmd
git push -u origin main --force
```

## If you get authentication errors:

### Option A: Use Personal Access Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token with "repo" permissions
3. Use username: hunkymanie
4. Use token as password when prompted

### Option B: Use GitHub CLI
```cmd
# Install GitHub CLI first
winget install --id GitHub.cli

# Then authenticate and push
gh auth login
gh repo create FlowLend --public --source=. --push
```

### Option C: GitHub Desktop
1. Download GitHub Desktop
2. Clone the repository
3. Copy your files to the cloned folder
4. Commit and push through the GUI

## Verification:
After successful push, visit: https://github.com/hunkymanie/FlowLend

You should see:
- All your project files
- README.md displaying properly
- Commit history with your commits
- Complete folder structure

## Troubleshooting:

### If repository doesn't exist:
1. Go to https://github.com/hunkymanie
2. Click "New repository"
3. Name it "FlowLend"
4. Don't initialize with README
5. Create repository
6. Then run the push commands

### If push is rejected:
```cmd
git push -u origin main --force
```

Your project is complete and ready - just needs to get to GitHub!
