import React from "react";    
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      <AppRoutes />
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
