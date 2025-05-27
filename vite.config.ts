import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteSingleFile } from "vite-plugin-singlefile"

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
  //   lib: {
  //     entry: './src/main.ts',
  //     name: 'Widget',
  //     fileName: 'widget',
  //     formats: ['es']
  //   }
  // },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});
