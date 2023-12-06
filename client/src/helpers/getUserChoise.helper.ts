import { IGame, UserСhoice } from '@/types';

export const getUserChoice = (game: IGame[], userName: string): UserСhoice | null => {
  return game.find((el) => el.username === userName)?.choice || null;
};
