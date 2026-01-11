import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children, isLogin}) => {
  const isLoggedIn = isLogin;

  if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
  
    return children;
}
