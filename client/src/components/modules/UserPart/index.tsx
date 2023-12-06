import UserChoiceCard from '@/components/modules/UserChoiceCard';
import { MainPageUserSubTitle, MainPageUserTitle } from '@/components/styled';
import useReselect from '@/hooks/useReselect';
import { openModalAction } from '@/store/game/actions';
import { useAppDispatch } from '@/store/hooks';
import { IUserPartProps } from '@/types';
import { Button, Stack } from '@mui/material';
import React from 'react';

interface IProps {
  userProps: IUserPartProps;
}

const UserPart: React.FC<IProps> = ({ userProps }) => {
  const isCanReselect = useReselect(userProps.userName);
  const dispatch = useAppDispatch();

  return (
    <Stack alignItems="center">
      <MainPageUserTitle sx={{ mb: 1 }}>{userProps.count}</MainPageUserTitle>
      <MainPageUserTitle sx={{ mb: 1 }}>{userProps.userName}</MainPageUserTitle>
      <MainPageUserSubTitle sx={{ mb: 1 }}>{userProps.userStatus}</MainPageUserSubTitle>
      {isCanReselect ? (
        <Button variant="contained" onClick={() => dispatch(openModalAction())}>
          Обрати ще раз
        </Button>
      ) : null}
      <UserChoiceCard choice={userProps.choice} height="220" styles={{ minWidth: '330px', marginTop: 'auto' }} />
    </Stack>
  );
};

export default UserPart;
