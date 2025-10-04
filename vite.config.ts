import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {},
  },
  server: {
    host: true, // allows external access (useful for Vercel / testing)
    port: 5173, // default, can change if needed
  },
});
