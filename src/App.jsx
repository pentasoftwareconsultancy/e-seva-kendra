import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Hide Header & Footer for admin and customer dashboard areas
  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/customer");

  return (
    <>
      <ScrollToTop />

      {/* Show Header only on public pages */}
      {!hideLayout && <Header />}

      <AppRoutes />

      {/* Show Footer only on public pages */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;