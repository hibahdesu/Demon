import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

// 🧠 This handles the refresh once per session
const RouteRefreshHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/analysis") {
      const alreadyReloaded = sessionStorage.getItem("analysisReloaded");
      if (!alreadyReloaded) {
        sessionStorage.setItem("analysisReloaded", "true");
        window.location.href = location.pathname; // full reload
      }
    } else {
      // Reset flag when you go back to other pages
      sessionStorage.removeItem("analysisReloaded");
    }
  }, [location]);

  return null;
};

const App = () => (
  <Router>
    <RouteRefreshHandler />
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/analysis" element={<Layout><Analysis /></Layout>} />
    </Routes>
  </Router>
);

export default App;
