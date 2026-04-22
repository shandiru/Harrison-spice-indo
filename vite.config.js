import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";

const siteHostname = "https://www.harrisonsspice.co.uk";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["chrome >= 64", "edge >= 79", "firefox >= 67", "safari >= 12"],
      renderModernChunks: false,
    }),
    react(),
    tailwindcss(),
    Sitemap({
      hostname: siteHostname,
      dynamicRoutes: ["/terms", "/privacy"],
    }),
  ],
});
