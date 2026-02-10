import { Routes, Route } from "react-router-dom";

import Servicespage from "../pages/Servicespage";

const AppRoutes = () => {
  return (
    <Routes>


     <Route path="/" element={<Servicespage />} />
      
      
    </Routes>
  );
};

export default AppRoutes;
