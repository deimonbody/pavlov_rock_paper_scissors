import { Button, TextField, styled } from '@mui/material';

export const AuthTitle = styled('h1')(() => ({
  fontSize: '1.6rem',
}));

export const AuthInput = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    fontFamily: 'Montserrat-Medium !important',
    fontSize: '1rem',
  },
}));

export const AuthButton = styled(Button)(() => ({
  width: '100%',
}));
