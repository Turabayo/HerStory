import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token'); // Check if user is logged in

    if (!isAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children;
};

export default ProtectedRoute;