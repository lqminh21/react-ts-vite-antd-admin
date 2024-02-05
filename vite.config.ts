import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // additionalData: '@import "./src/themes/"',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '/src/',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      }
    ]
  }
})
