import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { icons } from "react-icons";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          framerMotion: ["framer-motion"],
          icons: ["react-icons"],
          utils: ["moment"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react-icons"],
  },
});
