import { PATHES } from '@/types';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
  isAuth: boolean;
}

const AuthRoute: React.FC<IProps> = ({ isAuth }) => {
  return isAuth ? <Navigate to={PATHES.MAIN} /> : <Outlet />;
};

export default AuthRoute;
