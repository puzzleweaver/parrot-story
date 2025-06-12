import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteSingleFile } from "vite-plugin-singlefile"
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // developer: resolve(__dirname, 'developer/index.html'),
      },
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
});
