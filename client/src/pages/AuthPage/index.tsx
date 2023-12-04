import MainLayout from '@/components/layouts/MainLayout';
import AuthPageTemplate from '@/components/templates/Auth';
import React from 'react';

const AuthPage: React.FC = () => {
  return (
    <MainLayout>
      <AuthPageTemplate />
    </MainLayout>
  );
};

export default AuthPage;
