@echo off
echo === Deploying PyMaster to GitHub Pages ===
echo.

echo [1/4] Building with GitHub Pages base path...
call npx vite build --base /MasterPyton-1..2..GO/
if errorlevel 1 goto :error

echo [2/4] Switching to gh-pages branch...
git checkout gh-pages
if errorlevel 1 (
    echo Creating gh-pages branch...
    git checkout --orphan gh-pages
    git rm -rf --cached .
)

echo [3/4] Copying build files...
xcopy /Y /E dist\* . >nul 2>&1
git add -f index.html assets\
git commit -m "Deploy to GitHub Pages" --allow-empty

echo [4/4] Pushing to GitHub...
git push origin gh-pages --force

echo.
echo Switching back to main...
git checkout -f main
call npm run build

echo.
echo === DEPLOYED! ===
echo Visit: https://christm45.github.io/MasterPyton-1..2..GO/
goto :end

:error
echo BUILD FAILED!
:end
pause
