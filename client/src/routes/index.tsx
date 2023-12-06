import useAuth from '@/hooks/useAuth';
import AuthPage from '@/pages/AuthPage';
import MainPage from '@/pages/MainPage';
import AuthRoute from '@/routes/AuthRoute';
import ProtectedRoute from '@/routes/ProtectedRoute';
import { PATHES } from '@/types';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Routing: React.FC = () => {
  const isAuth = useAuth();

  return (
    <Routes>
      <Route element={<AuthRoute isAuth={isAuth} />}>
        <Route path={PATHES.AUTH} element={<AuthPage />}></Route>
      </Route>
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path={PATHES.MAIN} element={<MainPage />}></Route>
      </Route>
    </Routes>
  );
};

export default Routing;
