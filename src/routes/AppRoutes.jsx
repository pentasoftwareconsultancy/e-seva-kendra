import { Routes, Route } from "react-router-dom";
import AboutusPage from "../pages/AboutusPage";
// import ContactPage from "../pages/ContactPage"; // <-- Add this

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutusPage />} />
      {/* <Route path="/" element={<ContactPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
