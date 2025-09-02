# Frontend Update Script - Replace components with API-connected versions
Write-Host " Updating frontend components to use Cloudflare Workers API..." -ForegroundColor Cyan

# Backup original files
 = "D:\DEV\ham_tools\ham.tools\src\backup-20250902-214647"
New-Item -Path  -ItemType Directory -Force | Out-Null

Write-Host " Creating backup in: " -ForegroundColor Yellow
Copy-Item "D:\DEV\ham_tools\ham.tools\src\pages\Login.tsx" "\Login.tsx"
Copy-Item "D:\DEV\ham_tools\ham.tools\src\pages\Register.tsx" "\Register.tsx"
Copy-Item "D:\DEV\ham_tools\ham.tools\src\pages\IframeConfig.tsx" "\IframeConfig.tsx"

# Replace with updated versions
Write-Host " Replacing Login component..." -ForegroundColor Green
Copy-Item "D:\DEV\ham_tools\ham.tools\src\pages\Login-updated.tsx" "D:\DEV\ham_tools\ham.tools\src\pages\Login.tsx" -Force

Write-Host " Replacing Register component..." -ForegroundColor Green
Copy-Item "D:\DEV\ham_tools\ham.tools\src\pages\Register-updated.tsx" "D:\DEV\ham_tools\ham.tools\src\pages\Register.tsx" -Force

Write-Host " Replacing IframeConfig component..." -ForegroundColor Green
Copy-Item "D:\DEV\ham_tools\ham.tools\src\pages\IframeConfig-updated.tsx" "D:\DEV\ham_tools\ham.tools\src\pages\IframeConfig.tsx" -Force

# Clean up temporary files
Remove-Item "D:\DEV\ham_tools\ham.tools\src\pages\*-updated.tsx"

Write-Host ""
Write-Host " Frontend updated successfully!" -ForegroundColor Green
Write-Host ""
Write-Host " What was updated:" -ForegroundColor Cyan
Write-Host "    API configuration: src/config/api.ts" -ForegroundColor White
Write-Host "    Environment file: .env" -ForegroundColor White
Write-Host "    Login component: Callsign-based authentication" -ForegroundColor White
Write-Host "    Register component: Amateur radio registration" -ForegroundColor White
Write-Host "    IframeConfig: Live API integration" -ForegroundColor White
Write-Host ""
Write-Host " Next steps:" -ForegroundColor Cyan
Write-Host "   1. cd D:\DEV\ham_tools\ham.tools" -ForegroundColor White
Write-Host "   2. npm run dev" -ForegroundColor White
Write-Host "   3. Test the updated components" -ForegroundColor White
Write-Host ""
Write-Host " API URL: https://sp3fck-ham-tools-api.hamtools.workers.dev" -ForegroundColor Yellow
