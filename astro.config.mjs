import { defineConfig } from 'astro/config';

// Static output — ideal for Cloudflare Pages.
// Build command: npm run build | Output directory: dist
export default defineConfig({
  site: 'https://force1trainingfacility.com',
  output: 'static',
});
