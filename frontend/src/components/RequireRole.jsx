import React from 'react'
import { Navigate } from 'react-router-dom'

const RequireRole = ({ role, children }) => {
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  if (!user || user.role !== role) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RequireRole;