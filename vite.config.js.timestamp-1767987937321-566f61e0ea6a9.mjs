// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/harsh/Desktop/BhaiFolio/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///mnt/c/Users/harsh/Desktop/BhaiFolio/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import glsl from "file:///mnt/c/Users/harsh/Desktop/BhaiFolio/node_modules/vite-plugin-glsl/src/index.js";
var __vite_injected_original_import_meta_url = "file:///mnt/c/Users/harsh/Desktop/BhaiFolio/vite.config.js";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    svelte(),
    glsl({
      include: [
        // Glob pattern, or array of glob patterns to import
        "**/*.glsl",
        "**/*.wgsl",
        "**/*.vert",
        "**/*.frag",
        "**/*.vs",
        "**/*.fs"
      ],
      exclude: void 0
      // ensuring it doesn't default to excluding node_modules
    })
  ],
  build: {
    // Output to assets/dist so Jekyll can copy it
    outDir: "assets/dist",
    emptyOutDir: true,
    manifest: true,
    minify: "esbuild",
    // Ensure minification is on
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.js")
        // github entry removed as it is now served as a static asset in assets/js
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "bundle.[ext]",
        // manualChunks removed to ensure single bundle for reliability
        manualChunks: void 0
      }
    }
  },
  server: {
    // Proxy for dev mode if needed, though we run concurrently
    origin: "http://localhost:5173",
    cors: true
  },
  optimizeDeps: {
    exclude: ["sheryjs"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvaGFyc2gvRGVza3RvcC9CaGFpRm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvYy9Vc2Vycy9oYXJzaC9EZXNrdG9wL0JoYWlGb2xpby92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2MvVXNlcnMvaGFyc2gvRGVza3RvcC9CaGFpRm9saW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSc7XHJcbmltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XHJcbmltcG9ydCBnbHNsIGZyb20gJ3ZpdGUtcGx1Z2luLWdsc2wnO1xyXG5cclxuLy8gRGVmaW5lIF9fZGlybmFtZSBmb3IgRVNNXHJcbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoX19maWxlbmFtZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHN2ZWx0ZSgpLCBcclxuICAgIGdsc2woe1xyXG4gICAgICBpbmNsdWRlOiBbICAgICAgICAgICAgICAgICAgIC8vIEdsb2IgcGF0dGVybiwgb3IgYXJyYXkgb2YgZ2xvYiBwYXR0ZXJucyB0byBpbXBvcnRcclxuICAgICAgICAnKiovKi5nbHNsJywgJyoqLyoud2dzbCcsXHJcbiAgICAgICAgJyoqLyoudmVydCcsICcqKi8qLmZyYWcnLFxyXG4gICAgICAgICcqKi8qLnZzJywgJyoqLyouZnMnXHJcbiAgICAgIF0sXHJcbiAgICAgIGV4Y2x1ZGU6IHVuZGVmaW5lZCwgICAgICAgICAgLy8gZW5zdXJpbmcgaXQgZG9lc24ndCBkZWZhdWx0IHRvIGV4Y2x1ZGluZyBub2RlX21vZHVsZXNcclxuICAgIH0pXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgLy8gT3V0cHV0IHRvIGFzc2V0cy9kaXN0IHNvIEpla3lsbCBjYW4gY29weSBpdFxyXG4gICAgb3V0RGlyOiAnYXNzZXRzL2Rpc3QnLFxyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICBtYW5pZmVzdDogdHJ1ZSwgXHJcbiAgICBtaW5pZnk6ICdlc2J1aWxkJywgLy8gRW5zdXJlIG1pbmlmaWNhdGlvbiBpcyBvblxyXG4gICAgY3NzTWluaWZ5OiB0cnVlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL21haW4uanMnKSxcclxuICAgICAgICAvLyBnaXRodWIgZW50cnkgcmVtb3ZlZCBhcyBpdCBpcyBub3cgc2VydmVkIGFzIGEgc3RhdGljIGFzc2V0IGluIGFzc2V0cy9qc1xyXG4gICAgICB9LFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsIFxyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYnVuZGxlLltleHRdJyxcclxuICAgICAgICAvLyBtYW51YWxDaHVua3MgcmVtb3ZlZCB0byBlbnN1cmUgc2luZ2xlIGJ1bmRsZSBmb3IgcmVsaWFiaWxpdHlcclxuICAgICAgICBtYW51YWxDaHVua3M6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIC8vIFByb3h5IGZvciBkZXYgbW9kZSBpZiBuZWVkZWQsIHRob3VnaCB3ZSBydW4gY29uY3VycmVudGx5XHJcbiAgICBvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjUxNzMnLFxyXG4gICAgY29yczogdHJ1ZVxyXG4gIH0sXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBleGNsdWRlOiBbJ3NoZXJ5anMnXVxyXG4gIH1cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFIsU0FBUyxvQkFBb0I7QUFDM1QsU0FBUyxjQUFjO0FBQ3ZCLFNBQVMsU0FBUyxlQUFlO0FBQ2pDLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sVUFBVTtBQUorSixJQUFNLDJDQUEyQztBQU9qTyxJQUFNLGFBQWEsY0FBYyx3Q0FBZTtBQUNoRCxJQUFNLFlBQVksUUFBUSxVQUFVO0FBRXBDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQTtBQUFBLFFBQ1A7QUFBQSxRQUFhO0FBQUEsUUFDYjtBQUFBLFFBQWE7QUFBQSxRQUNiO0FBQUEsUUFBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFNBQVM7QUFBQTtBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNLFFBQVEsV0FBVyxhQUFhO0FBQUE7QUFBQSxNQUV4QztBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUE7QUFBQSxRQUVoQixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUEsSUFFTixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFNBQVM7QUFBQSxFQUNyQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
