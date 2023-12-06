import ChoiceModal from '@/components/modules/ChoiceModal';
import { MainPageTitle } from '@/components/styled';
import { selectIsOpenModal } from '@/store/game/selector';
import { useAppSelector } from '@/store/hooks';
import { Stack } from '@mui/material';
import React from 'react';
import GamePart from '@/components/templates/Main/components/GamePart';

import { SocketContextProvider } from '@/context/Socket.context';

const MainPageTemplate: React.FC = () => {
  const isOpenModal = useAppSelector(selectIsOpenModal);

  return (
    <Stack flexGrow={1}>
      <MainPageTitle>Rock Paper Scissors</MainPageTitle>
      <SocketContextProvider>
        <GamePart />
        <ChoiceModal open={isOpenModal} />
      </SocketContextProvider>
    </Stack>
  );
};

export default MainPageTemplate;
