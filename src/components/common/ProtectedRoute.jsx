import { Navigate } from 'react-router-dom';
import React from 'react';
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminAuth');
  
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
