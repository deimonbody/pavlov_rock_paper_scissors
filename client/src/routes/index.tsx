import AuthPage from '@/pages/AuthPage';
import { PATHES } from '@/types';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={PATHES.AUTH} element={<AuthPage />}></Route>
    </Routes>
  );
};

export default Routing;
