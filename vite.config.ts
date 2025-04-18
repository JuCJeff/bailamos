import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@react-google-maps")) {
              return "google-maps"; // Separate Google Maps
            }
            if (id.includes("firebase")) {
              return "firebase"; // Separate Firebase
            }
            if (id.includes("react")) {
              return "react"; // Separate React & React-DOM
            }
            if (id.includes("shadcn") || id.includes("@radix-ui")) {
              return "shadcn-ui"; // Separate ShadCN UI components
            }
            return "vendor"; // Other third-party libraries
          }
        },
      },
    },
  },
});
