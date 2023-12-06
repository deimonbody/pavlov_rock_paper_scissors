import { RestartButton } from '@/components/styled';
import { selectGameStatus } from '@/store/game/selector';
import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { Socket } from 'socket.io-client';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface IProps {
  socket: Socket | null;
}

const RestartGame: React.FC<IProps> = ({ socket }) => {
  const gameStatus = useAppSelector(selectGameStatus);
  const restartHandler = () => {
    socket?.emit('restart_game');
  };

  return (
    gameStatus === 'finished' && (
      <RestartButton variant="contained" onClick={restartHandler}>
        <RestartAltIcon />
      </RestartButton>
    )
  );
};

export default RestartGame;
