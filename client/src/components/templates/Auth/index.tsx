import { AuthTitle } from '@/components/styled';
import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import Form from './components/Form';
import { getUserNameFromLS } from '@/helpers/userName.helper';
import { useAppDispatch } from '@/store/hooks';
import { setUserName } from '@/store/game/actions';

const AuthPageTemplate: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userName = getUserNameFromLS();
    if (userName) {
      dispatch(setUserName(userName));
    }
  }, []);

  return (
    <Stack alignItems="center" justifyContent="center" flexGrow={1}>
      <AuthTitle>Введіть ваше ім'я</AuthTitle>
      <Form />
    </Stack>
  );
};

export default AuthPageTemplate;
