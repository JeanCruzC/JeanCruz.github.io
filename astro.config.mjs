// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jeancruz.github.io', // ← tu URL de GitHub Pages
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
