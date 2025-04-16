import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico", "vite.svg"],
      manifest: {
        name: "Vite + React + TS",
        short_name: "MyApp",
        description: "My Awesome Vite App",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/svg",
          },
        ],
      },
    }),
  ],
});
