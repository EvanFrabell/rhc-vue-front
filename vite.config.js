import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),

      quasar({
        sassVariables: 'src/quasar-variables.sass',
      }),
    ],
    resolve: {
      alias: {
        //'@': path.resolve(__dirname, 'resources/js'),
        '@': path.resolve(__dirname, 'src'),
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.NODE_ENV),
    },
  };
});
