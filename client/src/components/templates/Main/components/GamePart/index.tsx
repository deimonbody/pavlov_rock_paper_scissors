import { MainPartWrapper, MainPageUserTitle } from '@/components/styled';
import UserPart from '@/components/modules/UserPart';
import { getCurrentUserAndOpponent } from '@/helpers/getCurrentUserAndOpponent.helper';
import { selectUserName, selectGameStatus } from '@/store/game/selector';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Stack } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { setGameStatus, openModalAction, closeModalAction } from '@/store/game/actions';
import RestartGame from '@/components/modules/RestartGame';
import { useSocketContext } from '@/context/Socket.context';

const GamePart: React.FC = () => {
  const socket = useSocketContext();
  const { game, userCount, opponentCount, users, isHasMadeChoice, isOpponentHasMadeChoice } = useAppSelector(
    (state) => state.gameReducer
  );
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const gameStatus = useAppSelector(selectGameStatus);

  const [currentUser, opponent] = useMemo(
    () =>
      getCurrentUserAndOpponent({
        userCount,
        opponentCount,
        userName: userName || '',
        gameStatus,
        game,
        users,
        isCurrentUserMadeChoice: isHasMadeChoice,
        isOpponentMadeChoice: isOpponentHasMadeChoice,
      }),
    [userCount, opponentCount, userName, gameStatus, game, users, isHasMadeChoice, isOpponentHasMadeChoice]
  );

  useEffect(() => {
    if (currentUser.userName && opponent.userName) {
      dispatch(setGameStatus('started'));
    }
  }, [users]);

  useEffect(() => {
    if (gameStatus === 'started') {
      dispatch(openModalAction());
    }
    if (gameStatus === 'finished') {
      dispatch(closeModalAction());
    }
  }, [gameStatus]);

  return (
    <MainPartWrapper>
      <UserPart userProps={currentUser} />
      <Stack gap={1} alignSelf="center">
        <MainPageUserTitle sx={{ alignSelf: 'center' }}>VS</MainPageUserTitle>
        <RestartGame socket={socket} />
      </Stack>
      <UserPart userProps={opponent} />
    </MainPartWrapper>
  );
};

export default GamePart;
