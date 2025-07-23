# Java Installation Guide

## Why Java is Required

Java Development Kit (JDK) is required for Android app development and signing. The keystore generation script and Android build process both depend on Java being installed on your system.

## Installation Options

### Option 1: Using the Provided Script

We've created a script that provides instructions for manual installation:

1. Open PowerShell
2. Navigate to your project directory
3. Run the installation script:
   ```
   .\install-java.ps1
   ```
4. Follow the manual installation instructions provided by the script

### Option 2: Manual Installation from Oracle

If you prefer to install Java manually from Oracle:

1. Visit the Oracle JDK archive: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
2. Download 'Windows x64 Installer' for JDK 17.0.9
   - You may need to create a free Oracle account to download
3. Run the installer and follow the prompts
4. Make sure the "Add to PATH" option is selected during installation

### Option 3: Manual Installation from Adoptium

Alternatively, you can install Eclipse Temurin JDK (OpenJDK):

1. Visit the Adoptium website: https://adoptium.net/temurin/releases/?version=17
2. Download the Windows x64 installer for JDK 17
3. Run the installer and follow the prompts
4. Make sure the "Add to PATH" option is selected during installation

### Option 4: Using Chocolatey (Administrator Required)

If you prefer using Chocolatey package manager:

1. First, install Chocolatey if you don't have it:
   - Open PowerShell as administrator
   - Run the following command:
   ```
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

2. Install Java using Chocolatey:
   - In the same administrator PowerShell window, run:
   ```
   choco install temurin17 -y
   ```

## Verifying Installation

After installation, verify Java is installed correctly:

1. **Important:** Close and reopen your PowerShell or Command Prompt window
   - This is necessary for the PATH changes to take effect
2. Run the following command:
   ```
   java -version
   ```
3. You should see output similar to this (version numbers may vary):
   ```
   java version "17.0.9" 2023-10-17 LTS
   Java(TM) SE Runtime Environment (build 17.0.9+11-LTS-201)
   Java HotSpot(TM) 64-Bit Server VM (build 17.0.9+11-LTS-201, mixed mode, sharing)
   ```

## Troubleshooting

If you see "java is not recognized as an internal or external command":

1. Make sure you've closed and reopened your terminal after installation
2. Check if Java was installed but not added to PATH:
   - Try looking for Java in `C:\Program Files\Java\` or `C:\Program Files\Eclipse Adoptium\`
   - If found, you'll need to manually add it to your PATH environment variable

## Next Steps

Once Java is installed and verified, you can proceed with:

1. Generating the keystore for your Android app:
   ```
   .\generate-keystore.ps1
   ```

2. Building your app for the Play Store:
   ```
   npm run playstore:build
   ```

3. Following the instructions in the `PLAYSTORE_PUBLISHING.md` file to publish your app