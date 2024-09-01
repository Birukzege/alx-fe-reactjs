// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Redirect them to the login page if not authenticated
        return <Navigate to="/login" />;
    }

    return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
