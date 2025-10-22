// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jeancruzc.github.io",   // ← tu URL de GitHub Pages
  vite: {
    plugins: [tailwindcss()],
  },
});

