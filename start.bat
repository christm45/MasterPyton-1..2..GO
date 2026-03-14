@echo off
title PyMaster - Learn Python
echo ========================================
echo   PyMaster - Learn Python
echo   Starting local server...
echo ========================================
echo.

:: Try to use npx serve first (Node.js)
where npx >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo Opening in browser...
    start http://localhost:3000
    npx serve dist -l 3000 -s
    goto :end
)

:: Fallback: Python http.server
where python >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo Opening in browser...
    start http://localhost:8000
    cd dist
    python -m http.server 8000
    goto :end
)

echo ERROR: Neither Node.js nor Python found.
echo Install Node.js from https://nodejs.org
pause

:end
