import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
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
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'firebase-vendor': ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-slot',
            '@radix-ui/react-label',
            '@radix-ui/react-icons'
          ],
          'maps-vendor': ['@react-google-maps/api'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'utils-vendor': ['date-fns', 'lodash', 'clsx', 'class-variance-authority', 'tailwind-merge']
        }
      },
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1MB
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './jest.setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
});
