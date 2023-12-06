import { GameStatus, UserStatus } from '@/types';

export const getUserStatus = (gameStatus: GameStatus, isMadeChoice: boolean): UserStatus => {
  if (gameStatus === 'finished' || gameStatus === 'waiting') {
    return 'waiting for game';
  }
  if (!isMadeChoice && gameStatus === 'started') {
    return 'choosing';
  }
  return 'choosed';
};
