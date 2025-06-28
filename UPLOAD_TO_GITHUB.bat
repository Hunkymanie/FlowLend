@echo off
cls
echo ==========================================
echo    FlowLend GitHub Upload - Windows
echo ==========================================
echo.

echo [1/8] Checking Git installation...
git --version
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)
echo ✓ Git is installed
echo.

echo [2/8] Initializing Git repository...
git init
echo ✓ Repository initialized
echo.

echo [3/8] Configuring Git user...
git config user.name "hunkymanie"
git config user.email "hunkymanie@example.com"
echo ✓ Git user configured
echo.

echo [4/8] Adding all files...
git add .
echo ✓ All files staged
echo.

echo [5/8] Checking files to commit...
git status --short
echo.

echo [6/8] Creating commit...
git commit -m "Complete FlowLend DeFi Platform - Next.js, TypeScript, Hardhat, Professional UI, Smart Contracts, Mobile Responsive"
if errorlevel 1 (
    echo ERROR: Failed to create commit
    pause
    exit /b 1
)
echo ✓ Commit created successfully
echo.

echo [7/8] Setting up GitHub remote...
git remote remove origin 2>nul
git remote add origin https://github.com/hunkymanie/FlowLend.git
git branch -M main
echo ✓ Remote configured
echo.

echo [8/8] Pushing to GitHub...
echo NOTE: You may be prompted for GitHub credentials
git push -u origin main --force
if errorlevel 1 (
    echo.
    echo ==========================================
    echo  Push failed - possible solutions:
    echo ==========================================
    echo 1. Make sure you're logged into GitHub
    echo 2. Use Personal Access Token as password
    echo 3. Try: git push -u origin main --force
    echo 4. Check repository exists at: https://github.com/hunkymanie/FlowLend
    echo.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo           SUCCESS! 
echo ==========================================
echo Your FlowLend project is now on GitHub!
echo.
echo Repository URL: https://github.com/hunkymanie/FlowLend
echo.
echo Next steps:
echo 1. Visit the repository URL above
echo 2. Verify all files are uploaded
echo 3. Deploy to Vercel or preferred platform
echo ==========================================
pause
