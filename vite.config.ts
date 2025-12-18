import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/SOLARSPARK/", 
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client/src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // We are simplifying this to just 'dist' for GitHub compatibility
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});