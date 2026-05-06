// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Check if user is authenticated
  // You can use localStorage, context, zustand, redux, etc.
  const isAuthenticated = !!localStorage.getItem('token');

  // If not authenticated → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated → show the protected content
  return <Outlet />;
};

export default ProtectedRoute;