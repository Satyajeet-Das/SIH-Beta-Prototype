@echo off

:: Initializations
SETLOCAL EnableDelayedExpansion

for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do     rem"') do (
  set "DEL=%%a"
)

:: Main
set "username=Unknown"
for /f "tokens=*" %%i in ('git config user.name') do set username=%%i

set "commit_msg=New update from %username%"
if "%~1" == "" (
    set /p commit_msg="Enter your commit message (default: '%commit_msg%'): "
    if "%commit_msg%" == "" set "commit_msg=New Update"
) else (
    set "commit_msg=%*"
)

git add .
git commit -m "%commit_msg%"

git checkout dev
git add .
git commit -m "%commit_msg%"

git checkout main
git add .
git commit -m "%commit_msg%"

echo Fetching new changes...
git fetch
if errorlevel 1 (
    call :colorEcho 0c "Fetch failed from origin."
    exit 1
)

echo Merging new changes...
git merge
if errorlevel 1 (
    call :colorEcho 0c "Merge failed from origin. First fix the conflicts and then run the script again."
    exit 1
)

echo Merging Your Changes...
git merge dev
if errorlevel 1 (
    call :colorEcho 0c "Your changes conflict with the main branch. First fix the conflicts and then run the script again."
    exit 1
)

echo Pushing new changes...
git push -u origin
if errorlevel 1 (
    call :colorEcho 0c "Push failed to origin."
    exit 1
)

git branch -d dev
git branch dev
git checkout dev

call :colorEcho 0a "Update successful."

:: Functions
goto :eof

:colorEcho
<nul set /p ".=%DEL%" > "%~2"
findstr /v /a:%1 /R "^$" "%~2" nul
del "%~2" > nul 2>&1i
echo.
exit /b 0

:: End of file
:eof