import { Button, Stack, styled } from '@mui/material';

export const MainPageTitle = styled('h1')(() => ({
  fontSize: '2.2rem',
  alignSelf: 'center',
}));

export const MainPageUserTitle = styled('p')(() => ({
  fontSize: '1.6rem',
}));

export const MainPageUserSubTitle = styled('p')(() => ({
  fontSize: '1.3rem',
  fontFamily: 'Montserrat-Medium',
}));

export const RestartButton = styled(Button)(() => ({
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  minWidth: 'auto',
}));

export const MainPartWrapper = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '100px',
  flexGrow: 1,
  maxHeight: '500px',
}));
