import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireOrganizer?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireOrganizer = false,
  redirectTo = '/login',
}) => {
  const { isAuthenticated, isOrganizer, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login page, but save the attempted location
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  if (requireOrganizer && !isOrganizer) {
    // User is authenticated but not an organizer
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
