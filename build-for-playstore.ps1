# PowerShell script to build and bundle the app for Play Store submission

# Configuration
$appName = "Kinta Sme Data"

# Check if Node.js is installed
try {
    $nodeVersion = node -v
    Write-Host "Node.js is installed: $nodeVersion"
} catch {
    Write-Host "Error: Node.js is not installed or not in PATH. Please install Node.js and try again."
    exit 1
}

# Function to check if a command exists
function Test-Command($command) {
    try {
        Get-Command $command -ErrorAction Stop
        return $true
    } catch {
        return $false
    }
}

# Check if Java is installed
if (Test-Command "java") {
    $javaVersion = java -version 2>&1
    Write-Host "Java is installed."
} else {
    Write-Host "Error: Java is not installed or not in PATH. Please install Java and try again."
    exit 1
}

# Check if Android SDK is properly set up
if (Test-Command "gradlew") {
    Write-Host "Android SDK appears to be set up."
} else {
    Write-Host "Warning: Could not find gradlew. Make sure Android SDK is properly set up."
}

# Build the Next.js app
Write-Host "\n[1/5] Building the Next.js app..."
try {
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "npm build failed" }
    Write-Host "Next.js build completed successfully." -ForegroundColor Green
} catch {
    Write-Host "Error building Next.js app: $_" -ForegroundColor Red
    exit 1
}

# Sync Capacitor
Write-Host "\n[2/5] Syncing Capacitor..."
try {
    npx cap sync android
    if ($LASTEXITCODE -ne 0) { throw "Capacitor sync failed" }
    Write-Host "Capacitor sync completed successfully." -ForegroundColor Green
} catch {
    Write-Host "Error syncing Capacitor: $_" -ForegroundColor Red
    exit 1
}

# Check if keystore exists
$keystorePath = "android/keystore.jks"
if (-not (Test-Path $keystorePath)) {
    Write-Host "\nKeystore not found at $keystorePath" -ForegroundColor Yellow
    $createKeystore = Read-Host "Do you want to create a keystore now? (y/n)"
    
    if ($createKeystore -eq "y") {
        Write-Host "\nRunning keystore generation script..."
        try {
            Set-Location android
            .\generate-keystore.ps1
            Set-Location ..
        } catch {
            Write-Host "Error generating keystore: $_" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "\nPlease create a keystore before building for the Play Store." -ForegroundColor Yellow
        Write-Host "You can run 'android\generate-keystore.ps1' to create one." -ForegroundColor Yellow
        exit 1
    }
}

# Build release APK
Write-Host "\n[3/5] Building release APK..."
try {
    Set-Location android
    .\gradlew assembleRelease
    if ($LASTEXITCODE -ne 0) { throw "APK build failed" }
    Write-Host "Release APK built successfully." -ForegroundColor Green
    Set-Location ..
} catch {
    Write-Host "Error building release APK: $_" -ForegroundColor Red
    Set-Location ..
    exit 1
}

# Build App Bundle (AAB)
Write-Host "\n[4/5] Building App Bundle (AAB)..."
try {
    Set-Location android
    .\gradlew bundleRelease
    if ($LASTEXITCODE -ne 0) { throw "AAB build failed" }
    Write-Host "App Bundle built successfully." -ForegroundColor Green
    Set-Location ..
} catch {
    Write-Host "Error building App Bundle: $_" -ForegroundColor Red
    Set-Location ..
    exit 1
}

# Create output directory
$outputDir = "playstore-release"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

# Copy APK and AAB to output directory
Write-Host "\n[5/5] Copying release files to output directory..."
try {
    $apkPath = "android/app/build/outputs/apk/release/app-release.apk"
    $aabPath = "android/app/build/outputs/bundle/release/app-release.aab"
    
    if (Test-Path $apkPath) {
        Copy-Item $apkPath -Destination "$outputDir/$appName-release.apk"
    } else {
        Write-Host "Warning: APK file not found at $apkPath" -ForegroundColor Yellow
    }
    
    if (Test-Path $aabPath) {
        Copy-Item $aabPath -Destination "$outputDir/$appName-release.aab"
    } else {
        Write-Host "Warning: AAB file not found at $aabPath" -ForegroundColor Yellow
    }
    
    Write-Host "Files copied to $outputDir directory." -ForegroundColor Green
} catch {
    Write-Host "Error copying release files: $_" -ForegroundColor Red
    exit 1
}

# Success message
Write-Host "\n✅ Build completed successfully!" -ForegroundColor Green
Write-Host "\nRelease files are available in the '$outputDir' directory:"
if (Test-Path "$outputDir/$appName-release.apk") {
    Write-Host "- $appName-release.apk (for testing)" -ForegroundColor Cyan
}
if (Test-Path "$outputDir/$appName-release.aab") {
    Write-Host "- $appName-release.aab (for Play Store submission)" -ForegroundColor Cyan
}

Write-Host "\nNext steps:"
Write-Host "1. Upload the AAB file to the Google Play Console"
Write-Host "2. Complete your store listing information"
Write-Host "3. Submit your app for review"

Write-Host "\nFor detailed instructions, see the PLAYSTORE_PUBLISHING.md file." -ForegroundColor Yellow