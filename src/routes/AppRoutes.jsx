import { Routes, Route } from "react-router-dom";
import Aboutpage from "../pages/Aboutpage";
import Contactpage from "../pages/Contactpage"; 
import React from "react";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

import Payment from "../pages/Payment";


import AdminLogin from "../pages/admin/AdminLogin";
import ProtectedRoute from "../components/common/ProtectedRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminOrders from "../pages/admin/AdminOrders";
import AdminUsers from "../pages/admin/AdminUsers";
import AdminPayments from "../pages/admin/AdminPayments";
import AdminReports from "../pages/admin/AdminReports";
import AdminSettings from "../pages/admin/AdminSettings";
import Service_navpage from "../pages/ServicePage_nav";
import Dynamic_form from "../pages/Dynamic_form";
import AdminMessages from "../pages/admin/AdminMessages";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/service" element={<Service_navpage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/apply/:serviceName" element={<Dynamic_form />} />  
   
      <Route path="/payment" element={<Payment />} />



      

        <Route path="/admin" element={<AdminLogin />} />
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
      <Route path="/admin/messages" element={
        <ProtectedRoute>
          <AdminMessages />
        </ProtectedRoute>
      } />
       <Route path="/admin/settings" element={
        <ProtectedRoute>
          <AdminSettings />
        </ProtectedRoute>
      } />  
    </Routes>
  );
};

export default AppRoutes; 
