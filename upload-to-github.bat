@echo off
echo =============================================
echo    FlowLend GitHub Upload Script
echo =============================================
echo.

echo [1/6] Initializing git repository...
git init

echo [2/6] Adding all files...
git add .

echo [3/6] Creating commit...
git commit -m "Complete FlowLend DeFi platform - Next.js, TypeScript, Hardhat, professional UI"

echo [4/6] Setting main branch...
git branch -M main

echo [5/6] Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/hunkymanie/FlowLend.git

echo [6/6] Pushing to GitHub...
git push -u origin main --force

echo.
echo =============================================
echo    Upload Complete!
echo    Check: https://github.com/hunkymanie/FlowLend
echo =============================================
pause
