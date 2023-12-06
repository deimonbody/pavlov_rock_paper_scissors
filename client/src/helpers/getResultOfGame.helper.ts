import { IGame, UserСhoice } from '@/types';
import { toast } from 'react-toastify';

export const getResultOfGame = (result: IGame[], currentUserName: string) => {
  const currentUserChoice = result.find((el) => el.username === currentUserName)?.choice as UserСhoice;
  const opponentChoice = result.find((el) => el.username !== currentUserName)?.choice as UserСhoice;

  console.log(currentUserChoice, opponentChoice);
  if (
    (currentUserChoice === 'rock' && opponentChoice === 'scissors') ||
    (currentUserChoice === 'scissors' && opponentChoice === 'paper') ||
    (currentUserChoice === 'paper' && opponentChoice === 'rock')
  ) {
    toast.success('Ви виграли!');
    return 1; // CURRENT USER WON
  }

  if (
    (currentUserChoice === 'rock' && opponentChoice === 'rock') ||
    (currentUserChoice === 'paper' && opponentChoice === 'paper') ||
    (currentUserChoice === 'scissors' && opponentChoice === 'scissors')
  ) {
    toast.info('Нічия');
    return 0; // IT`S DRAW
  }
  toast.error('Ви програли');
  return -1; // CURRENT USER LOST
};
