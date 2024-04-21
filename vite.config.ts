import react from '@vitejs/plugin-react-swc';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { resolve } from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    optimizeDeps: {
      include: [],
      holdUntilCrawlEnd: false,
    },
    build: {
      outDir: 'build',
      minify: true,
      reportCompressedSize: false,
      sourcemap: false,
      // --> ["chrome79", "edge92", "firefox91", "safari13.1"]
      target: browserslistToEsbuild(['>0.2%', 'not dead', 'not op_mini all']),
      rollupOptions: { external: [] },
    },
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    base: '/',
    plugins: [
      splitVendorChunkPlugin(),
      react(),
      checker({
        overlay: { initialIsOpen: false },
        typescript: true,
      }),
      svgr({
        include: '**/*.svg?react',
      }),
    ],
    css: {
      preprocessorMaxWorkers: true as const,
    },
    server: {
      port: 3001,
      host: true,
      hmr: true,
      open: true,
      strictPort: true,
    },
    preview: {
      host: true,
      open: true,
      strictPort: true,
      port: 3001,
    },
  };
});
