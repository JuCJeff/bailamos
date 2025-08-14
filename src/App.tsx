import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Footer } from "./components/layout";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import ErrorBoundary from "./components/utils/ErrorBoundary";
import { AuthProvider } from "./contexts";
import { Toaster } from "sonner";

import "./App.css";

// Lazy load pages for code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const OrganizerPage = lazy(() => import("./pages/OrganizerPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

// Loading component for better UX
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
      <p>Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Suspense fallback={<PageLoader />}>
            <Router basename="/">
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route 
                    path="/organizer" 
                    element={
                      <ProtectedRoute requireOrganizer={true}>
                        <OrganizerPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route path="/login" element={<LoginPage />} />
                </Routes>
              </div>
            </Router>

            <Footer />
            <Toaster className="text-start" position="top-center" richColors />
          </Suspense>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
