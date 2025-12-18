import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // IMPORTANT: This matches your GitHub repository name
  base: "/SOLARSPARK/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  // Tells Vite that index.html is inside the client folder
  root: path.resolve(__dirname, "client"),
  build: {
    // Tells Vite to put the final website in a folder called 'dist' at the root
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
