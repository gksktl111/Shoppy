import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../Components/Context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }

  return children;
}