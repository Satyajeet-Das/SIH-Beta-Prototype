@echo off

:: Initializations
SETLOCAL EnableDelayedExpansion

for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do (
  set "DEL=%%a"
)

:: Main
set "username=Unknown"
for /f "tokens=*" %%i in ('git config user.name') do set username=%%i

if "%username%" == "Shivanshu Gupta" (
    echo Deploying...
) else (
    echo "Please make sure that you run this command to install vercel first: `npm i -g vercel`"
)

cd frontend
call npm run build
cd ..

xcopy .vercel frontend\dist\.vercel /E /I /Y
xcopy frontend\src\assets frontend\dist\src\assets /E /I /Y

cd frontend\dist
vercel --prod
