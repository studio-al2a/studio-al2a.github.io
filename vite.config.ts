/// <reference types="vitest/config" />

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  base: '/client-al2a/',
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react(), tailwindcss()],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@app': path.resolve(dirname, 'src/app'),
      '@features': path.resolve(dirname, 'src/features'),
      '@entities': path.resolve(dirname, 'src/entities'),
      '@shared': path.resolve(dirname, 'src/shared'),
      '@widgets': path.resolve(dirname, 'src/widgets'),
      '@pages': path.resolve(dirname, 'src/pages'),
      '@layouts': path.resolve(dirname, 'src/layouts'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['.storybook/vitest.setup.ts'],
  },
});
