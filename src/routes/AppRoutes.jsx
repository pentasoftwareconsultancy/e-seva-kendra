import { Routes, Route } from "react-router-dom";
// import AboutusPage from "../pages/AboutusPage";
// import ContactPage from "../pages/ContactPage"; 
import React from "react";
// import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
// import AdminLogin from "../pages/admin/AdminLogin";
// import ProtectedRoute from "../components/common/ProtectedRoute";
// import AdminDashboard from "../pages/admin/AdminDashboard";
// import AdminOrders from "../pages/admin/AdminOrders";
// import AdminUsers from "../pages/admin/AdminUsers";
// import AdminPayments from "../pages/admin/AdminPayments";
// import AdminReports from "../pages/admin/AdminReports";
// import AdminSettings from "../pages/admin/AdminSettings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ServicePage />} />
      {/* { <Route path="/" element={<AboutusPage />} /> */}
     {/* <Route path="/" element={<ContactPage />} /> */}
       {/* <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/admin/orders" element={
        <ProtectedRoute>
          <AdminOrders />
        </ProtectedRoute>
      } />
      <Route path="/admin/users" element={
        <ProtectedRoute>
          <AdminUsers />
        </ProtectedRoute>
      } />
      <Route path="/admin/payments" element={
        <ProtectedRoute>
          <AdminPayments />
        </ProtectedRoute>
      } />
       <Route path="/admin/reports" element={
        <ProtectedRoute>
          <AdminReports />
        </ProtectedRoute>
      } />
       <Route path="/admin/settings" element={
        <ProtectedRoute>
          <AdminSettings />
        </ProtectedRoute>
      } />  */}
    </Routes>
  );
};

export default AppRoutes; 
