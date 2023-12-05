import { MainPageTitle, MainPageUserTitle } from '@/components/styled';
import UserPart from '@/components/templates/Main/components/UserPart';
import { selectUserName } from '@/store/game/selector';
import { useAppSelector } from '@/store/hooks';
import { IUserPartProps } from '@/types';
import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

//TODO:DELETE THIS AFTER REAL DATA;
const mockData: IUserPartProps[] = [
  {
    count: 0,
    userName: 'Dima',
    choice: 'paper',
    userStatus: 'waiting for game',
  },
  {
    count: 0,
    userName: 'Sasha',
    choice: 'scissors',
    userStatus: 'waiting for game',
  },
];

const MainPageTemplate: React.FC = () => {
  const [socket, setSocket] = useState<Socket<any, any> | null>(null);
  const userName = useAppSelector(selectUserName);

  useEffect(() => {
    const socketConnection = io(import.meta.env.VITE_SERVER_URL, {
      query: {
        username: userName || '',
      },
    });
    setSocket(socketConnection);
  }, []);

  return (
    <Stack flexGrow={1}>
      <MainPageTitle>Rock Paper Scissors</MainPageTitle>
      <Stack direction="row" justifyContent="space-between" mt={10} flexGrow={1} alignItems="center">
        <UserPart userProps={mockData[0]} />
        <MainPageUserTitle sx={{ alignSelf: 'center' }}>VS</MainPageUserTitle>
        <UserPart userProps={mockData[1]} />
      </Stack>
    </Stack>
  );
};

export default MainPageTemplate;
