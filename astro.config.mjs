import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jeancruzc.github.io',   // user site (no subcarpeta)
  base: '/',                              // base raíz para user repo
  prefetch: true,
  outDir: 'dist'
});
