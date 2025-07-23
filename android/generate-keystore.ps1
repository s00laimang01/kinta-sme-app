# PowerShell script to generate a keystore for Android app signing

$keystoreFile = "keystore.jks"
$alias = "kintasme"
$validity = 25 * 365 # 25 years in days

# Check if Java is installed
try {
    $javaVersion = java -version 2>&1
    Write-Host "Java is installed. Proceeding with keystore generation."
} catch {
    Write-Host "Error: Java is not installed or not in PATH. Please install Java and try again."
    exit 1
}

# Check if keystore already exists
if (Test-Path $keystoreFile) {
    $overwrite = Read-Host "Keystore file already exists. Do you want to overwrite it? (y/n)"
    if ($overwrite -ne "y") {
        Write-Host "Keystore generation cancelled."
        exit 0
    }
}

# Prompt for keystore password
$keystorePassword = Read-Host "Enter keystore password (at least 6 characters)" -AsSecureString
$keystorePasswordText = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($keystorePassword))

if ($keystorePasswordText.Length -lt 6) {
    Write-Host "Error: Password must be at least 6 characters long."
    exit 1
}

# Prompt for key password (can be the same as keystore password)
$keyPassword = Read-Host "Enter key password (press Enter to use the same as keystore password)" -AsSecureString
$keyPasswordText = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($keyPassword))

if ($keyPasswordText -eq "") {
    $keyPasswordText = $keystorePasswordText
}

# Prompt for Distinguished Name information
$dname = Read-Host "Enter your name (CN)"
$org = Read-Host "Enter your organization name (O)"
$orgUnit = Read-Host "Enter your organizational unit (OU)"
$city = Read-Host "Enter your city/locality (L)"
$state = Read-Host "Enter your state/province (ST)"
$country = Read-Host "Enter your two-letter country code (C)"

# Build the Distinguished Name string
$dnameString = "CN=$dname, OU=$orgUnit, O=$org, L=$city, ST=$state, C=$country"

# Generate the keystore
Write-Host "Generating keystore..."
$keytoolCommand = "keytool -genkeypair -v -keystore $keystoreFile -alias $alias -keyalg RSA -keysize 2048 -validity $validity -dname `"$dnameString`" -storepass $keystorePasswordText -keypass $keyPasswordText"

try {
    Invoke-Expression $keytoolCommand
    Write-Host "\nKeystore generated successfully: $keystoreFile"
    Write-Host "\nIMPORTANT: Keep your keystore file and passwords secure!"
    Write-Host "You will need them to sign app updates in the future."
    Write-Host "\nKeystore details:"
    Write-Host "Keystore file: $keystoreFile"
    Write-Host "Key alias: $alias"
    Write-Host "Validity: $validity days"
} catch {
    Write-Host "Error generating keystore: $_"
    exit 1
}

# Instructions for updating build.gradle
Write-Host "\nNext steps:"
Write-Host "1. Update the signingConfigs section in app/build.gradle with:"
Write-Host "   storeFile file(\"../$keystoreFile\")"
Write-Host "   storePassword \"$keystorePasswordText\""
Write-Host "   keyAlias \"$alias\""
Write-Host "   keyPassword \"$keyPasswordText\""
Write-Host "2. Run 'npx cap sync' to sync the changes"
Write-Host "3. Build your app with 'cd android && ./gradlew assembleRelease'"