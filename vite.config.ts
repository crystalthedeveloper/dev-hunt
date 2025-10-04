import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;

          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react")) {
            return "vendor-react";
          }

          if (id.includes("node_modules/three")) {
            return "vendor-three";
          }

          if (id.includes("node_modules/@react-three")) {
            return "vendor-r3f";
          }

          if (id.includes("node_modules/@react-three/cannon") || id.includes("node_modules/@react-three/rapier") || id.includes("node_modules/@dimforge/rapier")) {
            return "vendor-physics";
          }

          if (id.includes("node_modules/zustand")) {
            return "vendor-state";
          }

          return "vendor-misc";
        },
      },
    },
  },
  server: {
    host: true, // allows external access (useful for Vercel / testing)
    port: 5173, // default, can change if needed
  },
});
