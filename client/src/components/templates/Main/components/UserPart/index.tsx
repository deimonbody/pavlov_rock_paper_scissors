import UserChoiceCard from '@/components/modules/UserChoiceCard';
import { MainPageUserSubTitle, MainPageUserTitle } from '@/components/styled';
import { IUserPartProps } from '@/types';
import { Stack } from '@mui/material';
import React from 'react';

interface IProps {
  userProps: IUserPartProps;
}
const UserPart: React.FC<IProps> = ({ userProps }) => {
  return (
    <Stack alignItems="center">
      <MainPageUserTitle sx={{ mb: 1 }}>{userProps.count}</MainPageUserTitle>
      <MainPageUserTitle sx={{ mb: 1 }}>{userProps.userName}</MainPageUserTitle>
      <MainPageUserSubTitle sx={{ mb: 3 }}>{userProps.userStatus}</MainPageUserSubTitle>
      <UserChoiceCard choice={userProps.choice} />
    </Stack>
  );
};

export default UserPart;
