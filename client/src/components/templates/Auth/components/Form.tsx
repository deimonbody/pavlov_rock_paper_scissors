import { AuthInput, AuthButton } from '@/components/styled';
import { setUserNameLS } from '@/helpers/userName.helper';
import { setUserName } from '@/store/game/actions';
import { useAppDispatch } from '@/store/hooks';
import { Stack, Box } from '@mui/material';
import React, { useState } from 'react';

const Form: React.FC = () => {
  const [inpValue, setInpValue] = useState('');
  const dispatch = useAppDispatch();

  const authHandler = () => {
    dispatch(setUserName(inpValue));
    setUserNameLS(inpValue);
  };

  return (
    <Stack sx={{ minWidth: '400px' }}>
      <AuthInput
        id="outlined-basic"
        label="Ваше ім'я"
        variant="outlined"
        value={inpValue}
        onChange={(e) => {
          setInpValue(e.target.value);
        }}
      />
      <Box mt={2}>
        <AuthButton variant="contained" disabled={inpValue.length === 0} onClick={authHandler}>
          Увійти
        </AuthButton>
      </Box>
    </Stack>
  );
};

export default Form;
