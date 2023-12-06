import MainLayout from '@/components/layouts/MainLayout';
import MainPageTemplate from '@/components/templates/Main';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <MainLayout>
      <MainPageTemplate />
    </MainLayout>
  );
};

export default MainPage;
