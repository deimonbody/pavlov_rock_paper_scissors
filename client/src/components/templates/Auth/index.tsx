import { AuthTitle } from '@/components/styled';
import { Stack } from '@mui/material';
import React from 'react';
import Form from './components/Form';

const AuthPageTemplate: React.FC = () => {
  return (
    <Stack alignItems="center" justifyContent="center" flexGrow={1}>
      <AuthTitle>Введіть ваше ім'я</AuthTitle>
      <Form />
    </Stack>
  );
};

export default AuthPageTemplate;
