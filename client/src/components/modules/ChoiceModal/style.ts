import { Stack, styled } from '@mui/material';

export const ChoiceModalTitle = styled('p')(() => ({
  fontSize: '1.5rem',
  alignSelf: 'center',
  marginBottom: '10px',
}));

export const ChoiceModalWrapper = styled('div')(() => ({
  height: '100%',
  position: 'relative',
}));

export const ChoiceModalBg = styled(Stack)(() => ({
  backgroundColor: '#fff',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '800px',
  margin: '0 auto',
  padding: '20px 10px',
}));

export const ChoicesList = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gap: '10px',
}));
