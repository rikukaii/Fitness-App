import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/Fitness-App/", // Set this to your GitHub repo name
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "FitGenuity Tracker",
        short_name: "FitGenuity",
        description: "Track your fitness and diet easily!",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/Fitness-App/icon-192x192.png", // Adjusted for GitHub Pages
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/Fitness-App/icon-512x512.png", // Adjusted for GitHub Pages
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
