import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import { resolve } from 'path';

//ts-ignore
const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: { '*/': 'http://127.0.0.1:3000' },
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      components: resolve(root, 'components'),
      types: resolve(root, 'types'),
      utils: resolve(root, 'utils'),
      data: resolve(root, 'data'),
      asests: resolve(root, 'asests'),
    },
  },
});
