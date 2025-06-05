import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import { LocationProvider } from "./contexts/LocationContext.tsx";

import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <LocationProvider>
        <App />
      </LocationProvider>
    </ThemeProvider>
  </StrictMode>
);
