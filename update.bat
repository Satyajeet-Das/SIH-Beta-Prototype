@echo off

:: Initializations
SETLOCAL EnableDelayedExpansion
for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do     rem"') do (
  set "DEL=%%a"
)

:: Functions
:colorEcho
echo off
<nul set /p ".=%DEL%" > "%~2"
findstr /v /a:%1 /R "^$" "%~2" nul
del "%~2" > nul 2>&1i
echo.

:errorExit
echo.
call :colorEcho 0c %1
echo.
exit /b 1

:: Main
set "username=Unknown"
for /f "tokens=*" %%i in ('git config user.name') do set username=%%i
echo %username%

set "commit_msg=New update from %username%"
if "%~1" == "" (
    set /p commit_msg="Enter commit message (default: 'New Update'): "
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
    call :errorExit "Fetch failed from origin."
)

echo Merging new changes...
git merge
if errorlevel 1 (
    call :errorExit "Merge failed from origin. First fix the conflicts and then run the script again."
)

echo Merging Your Changes...
git merge dev
if errorlevel 1 (
    call :errorExit "Your changes conflict with the main branch. First fix the conflicts and then run the script again."
)

echo Pushing new changes...
git push -u origin
if errorlevel 1 (
    call :errorExit "Push failed to origin."
)

git branch -d dev
git branch dev
git checkout dev

call :colorEcho 0a "Update successful."