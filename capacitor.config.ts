import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "Kinta Sme",
  webDir: "out",
  server: {
    allowNavigation: ["kinta-sme-server.vercel.app"], // Remove https://
    url: "https://kinta-sme-app.vercel.app", // Keep for live reload
    //cleartext: true,
  },
};

export default config;
