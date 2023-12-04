import { AuthInput, AuthButton } from '@/components/styled';
import { Stack, Box } from '@mui/material';
import React, { useState } from 'react';

const Form: React.FC = () => {
  const [inpValue, setInpValue] = useState('');

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
        <AuthButton variant="contained" disabled={inpValue.length === 0}>
          Увійти
        </AuthButton>
      </Box>
    </Stack>
  );
};

export default Form;
