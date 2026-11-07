
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const base = mode === "development" ? "/" : "/Birthday_Special/";

  return {
    base,

    plugins: [
      react(),

      VitePWA({
        registerType: "autoUpdate",

        includeAssets: ["favicon.png"],

        manifest: {
          name: "Birthday Special - Aditya",
          short_name: "Birthday",
          description: "Birthday Special Celebration",
          theme_color: "#000000",
          background_color: "#000000",
          display: "standalone",
          start_url: base,
          scope: base,

          icons: [
            {
              src: `${base}icons/icon-192.png`,
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: `${base}icons/icon-512.png`,
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  };
});
