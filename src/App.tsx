import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Footer } from "./components/layout";

import { Toaster } from "sonner";

import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const OrganizerPage = lazy(() => import("./pages/OrganizerPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/organizer" element={<OrganizerPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>

        <Footer />
        <Toaster className="text-start" position="top-center" richColors />
      </Suspense>
    </div>
  );
}

export default App;
