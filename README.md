# Kinta Sme Data App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and enhanced with Capacitor for Android app deployment.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Publishing to Google Play Store

This app is configured for deployment to the Google Play Store using Capacitor. To build and publish the app:

### Building for Android

```bash
# Build the Next.js app and sync with Capacitor
npm run cap:build:android

# Open the project in Android Studio
npm run cap:open:android
```

### Production Build for Play Store

```bash
# Build the app for Play Store submission
npm run playstore:build
```

This script will:
1. Build the Next.js app
2. Sync with Capacitor
3. Generate a keystore file if one doesn't exist
4. Build a signed APK and AAB (Android App Bundle)
5. Copy the release files to a `playstore-release` directory

### Publishing Process

Detailed instructions for publishing to the Play Store can be found in the [PLAYSTORE_PUBLISHING.md](./PLAYSTORE_PUBLISHING.md) file.

Key steps include:
1. Creating a Google Play Developer account
2. Setting up app signing with a keystore
3. Preparing store listing assets
4. Uploading your app bundle
5. Completing the store listing
6. Submitting for review
