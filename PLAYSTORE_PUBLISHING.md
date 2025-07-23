# Publishing to Google Play Store

This guide will walk you through the process of preparing and publishing your Capacitor app to the Google Play Store.

## Prerequisites

- A Google Play Developer account (requires a one-time $25 USD fee)
- Your app built and tested on Android
- A keystore file for signing your app

## Step 1: Generate a Keystore

A keystore is required to sign your Android app. This is a critical step as you must use the same keystore for all future updates.

1. Navigate to the `android` directory in your project
2. Run the provided PowerShell script to generate a keystore:

```powershell
.\generate-keystore.ps1
```

3. Follow the prompts to create your keystore
4. The script will generate a `keystore.jks` file and provide instructions for updating your `build.gradle` file

> **IMPORTANT**: Keep your keystore file and passwords secure! If you lose them, you won't be able to update your app on the Play Store.

## Step 2: Build a Release Version of Your App

1. Make sure your app is properly configured in `capacitor.config.ts` and `android/app/build.gradle`
2. Sync your Capacitor project to apply any configuration changes:

```bash
npm run build
npx cap sync android
```

3. Build a release version of your app:

```bash
cd android
.\gradlew assembleRelease
```

4. The signed APK will be located at: `android/app/build/outputs/apk/release/app-release.apk`

## Step 3: Create an App Bundle (Recommended by Google)

Google Play prefers Android App Bundles (AAB) over APK files:

```bash
cd android
.\gradlew bundleRelease
```

The app bundle will be located at: `android/app/build/outputs/bundle/release/app-release.aab`

## Step 4: Prepare Store Listing Assets

Before submitting your app, prepare the following assets:

1. **App Icon**: Your app icon in various sizes (already included in your Android project)
2. **Feature Graphic**: 1024 x 500 px image
3. **Screenshots**: At least 2 screenshots of your app (recommended sizes: 16:9 aspect ratio)
4. **Short Description**: Up to 80 characters
5. **Full Description**: Up to 4000 characters
6. **Privacy Policy URL**: Link to your privacy policy page

## Step 5: Create Your Google Play Store Listing

1. Log in to your [Google Play Console](https://play.google.com/console/)
2. Click "Create app"
3. Fill in the app details and create the listing
4. Navigate to "App content" and complete all required sections:
   - App access (if your app requires login)
   - Ads declaration
   - Content rating
   - Target audience
   - News app declaration (if applicable)
   - COVID-19 info (if applicable)
   - Data safety section

## Step 6: Upload Your App Bundle

1. In the Play Console, go to "Production" > "Create new release"
2. Upload your AAB file
3. Add release notes
4. Save and review your release

## Step 7: Roll Out Your App

1. After completing all the required information, click "Start rollout to Production"
2. Your app will be reviewed by Google, which typically takes a few days
3. Once approved, your app will be published on the Google Play Store

## Updating Your App

When you need to update your app:

1. Increment the `versionCode` and update the `versionName` in `android/app/build.gradle`
2. Build a new release version using the **same keystore**
3. Create a new release in the Google Play Console and upload the new AAB file

## Troubleshooting

### Common Issues

- **Signing Issues**: Ensure your keystore information in `build.gradle` is correct
- **Version Code Conflicts**: Each update must have a higher `versionCode` than the previous version
- **Play Store Rejections**: Review Google's policies and guidelines if your app is rejected

### Useful Commands

- Check your APK signature: `keytool -list -printcert -jarfile app-release.apk`
- Verify your app bundle: `bundletool build-apks --bundle=app-release.aab --output=app-release.apks`

## Additional Resources

- [Google Play Console Help](https://support.google.com/googleplay/android-developer/)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Developer Guidelines](https://developer.android.com/distribute/best-practices/launch/)