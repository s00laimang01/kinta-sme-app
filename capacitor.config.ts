import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "data-sme",
  webDir: "out",
  server: {
    allowNavigation: ["kinta-sme-server.vercel.app"], // Remove https://
    url: "http://localhost:3000", // Keep for live reload
    //cleartext: true,
  },
};

export default config;
