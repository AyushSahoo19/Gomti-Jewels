import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        heritage: resolve(__dirname, 'heritage.html'),
        collections: resolve(__dirname, 'collections.html'),
        necklaces: resolve(__dirname, 'necklaces.html'),
        earrings: resolve(__dirname, 'earrings.html'),
        bangles: resolve(__dirname, 'bangles.html'),
        bridal: resolve(__dirname, 'bridal.html'),
        emeralds: resolve(__dirname, 'emeralds.html')
      }
    }
  }
});
