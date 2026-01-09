import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import glsl from 'vite-plugin-glsl';

// Define __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    svelte(), 
    glsl({
      include: [                   // Glob pattern, or array of glob patterns to import
        '**/*.glsl', '**/*.wgsl',
        '**/*.vert', '**/*.frag',
        '**/*.vs', '**/*.fs'
      ],
      exclude: undefined,          // ensuring it doesn't default to excluding node_modules
    })
  ],
  build: {
    // Output to assets/dist so Jekyll can copy it
    outDir: 'assets/dist',
    emptyOutDir: true,
    manifest: true, 
    minify: 'esbuild', // Ensure minification is on
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.js'),
        // github entry removed as it is now served as a static asset in assets/js
      },
      output: {
        entryFileNames: '[name].js', 
        assetFileNames: 'bundle.[ext]',
        // manualChunks removed to ensure single bundle for reliability
        manualChunks: undefined
      }
    }
  },
  server: {
    // Proxy for dev mode if needed, though we run concurrently
    origin: 'http://localhost:5173',
    cors: true
  },
  optimizeDeps: {
    exclude: ['sheryjs']
  }
});
