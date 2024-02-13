import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
    alias: {
      'source-map-js': 'source-map',
  },
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (path === '/api/redirect' || path === '/api/sitemap.xml') {
          return;
        }
        console.error(`Error during prerendering: ${message}`);
        console.error(`Path: ${path}`);

      }
    }

  },
};

export default config;
// prerender: {
//   handleHttpError: "warn",
// }
