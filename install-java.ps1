# Java Installation Script for Windows (No Admin Required)

# Configuration
$jdkVersion = "17.0.9"
$jdkUrl = "https://download.oracle.com/java/17/archive/jdk-17.0.9_windows-x64_bin.exe"
$downloadPath = "$env:TEMP\jdk-installer.exe"

Write-Host "Installing Java JDK $jdkVersion..." -ForegroundColor Cyan

# Download JDK installer
Write-Host "Downloading JDK installer from Oracle..." -ForegroundColor Cyan
Write-Host "This may take a few minutes depending on your internet connection." -ForegroundColor Yellow

Write-Host "\nIMPORTANT: Since we cannot automatically download the Oracle JDK," -ForegroundColor Yellow
Write-Host "please follow these manual installation steps:" -ForegroundColor Yellow
Write-Host "\n1. Visit: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html" -ForegroundColor White
Write-Host "2. Download 'Windows x64 Installer' for JDK 17.0.9" -ForegroundColor White
Write-Host "3. Run the installer and follow the prompts" -ForegroundColor White
Write-Host "4. Make sure to select 'Add to PATH' during installation" -ForegroundColor White
Write-Host "\nAlternatively, you can install Eclipse Temurin JDK:" -ForegroundColor Cyan
Write-Host "1. Visit: https://adoptium.net/temurin/releases/?version=17" -ForegroundColor White
Write-Host "2. Download the Windows x64 installer" -ForegroundColor White
Write-Host "3. Run the installer and follow the prompts" -ForegroundColor White

Write-Host "\nAfter installation, restart your terminal and verify by running:" -ForegroundColor Green
Write-Host "java -version" -ForegroundColor White

Write-Host "\nOnce Java is installed, you can proceed with generating the keystore:" -ForegroundColor Green
Write-Host ".\generate-keystore.ps1" -ForegroundColor White