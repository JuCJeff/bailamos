import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const OrganizerPage = lazy(() => import("./pages/OrganizerPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Router basename="/bailamos">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/organizer" element={<OrganizerPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
