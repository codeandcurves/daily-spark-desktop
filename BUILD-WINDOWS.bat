@echo off
cd /d "%~dp0"
echo Installing build dependencies...
call npm install
if errorlevel 1 goto :fail
echo Building Daily Spark v1.2 Windows installer...
call npm run dist
if errorlevel 1 goto :fail
echo.
echo SUCCESS. Open the dist folder and run "Daily Spark Setup 1.2.0.exe"
explorer "%~dp0dist"
pause
exit /b 0
:fail
echo.
echo BUILD FAILED. Copy the error shown above and send it back.
pause
exit /b 1