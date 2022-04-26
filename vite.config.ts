import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const pwaConfig = {
    includeAssets: [
      'favicon.svg',
      'favicon.ico',
      'robots.txt',
      'apple-touch-icon.png',
    ],
    manifest: {
      name: 'Vite App',
      short_name: 'Short Vite App',
      description: 'Your app description',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [vue(), VitePWA(pwaConfig)],
    server: {
      port: Number(process.env.VITE_PORT),
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: process.cwd() + '/src',
        },
      ],
    },
  });
};
