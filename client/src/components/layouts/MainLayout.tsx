import { MainLayoutWrapper } from '@/components/styled';

import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
};

export default MainLayout;
