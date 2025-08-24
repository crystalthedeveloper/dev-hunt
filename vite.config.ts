import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600, // avoid warnings for large bundles
    rollupOptions: {
      output: {
        manualChunks(id) {
          // ✅ split vendor dependencies
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    host: true, // allows external access (useful for Vercel / testing)
    port: 5173, // default, can change if needed
  },
});
