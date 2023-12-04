import { Stack, styled } from '@mui/material';

export const MainLayoutWrapper = styled(Stack)(() => ({
  padding: '10px 15px',
  minHeight: '100vh',
}));

export const MainLayoutChildrenWrapper = styled('div')(() => ({
  flexGrow: 1,
}));
