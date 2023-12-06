import { PATHES } from '@/types';
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface IProps {
  isAuth: boolean;
}

const ProtectedRoute: React.FC<IProps> = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={PATHES.AUTH} />;
};

export default ProtectedRoute;
