import { getResultOfGame } from '@/helpers/getResultOfGame.helper';
import {
  addPointCurrentUser,
  addPointOpponent,
  disconectedUser,
  restartGame,
  setGameResults,
  setGameStatus,
  setOpponentMadeChoice,
  setUsers,
} from '@/store/game/actions';
import { AppDispatch } from '@/store/types';
import { IGameFinishedSocketAction } from '@/types';
import { Socket } from 'socket.io-client';

export const socketHelperActions = (socket: Socket, dispatch: AppDispatch, currentUserName: string) => {
  socket.emit('get_players');
  socket.on('connected', (): void => {
    socket.emit('get_players');
  });
  socket.on('players_received', (users: string[]): void => {
    dispatch(setUsers(users));
  });
  socket.on('game_finished', ({ results }: IGameFinishedSocketAction): void => {
    dispatch(setGameResults(results));
    dispatch(setGameStatus('finished'));
    const gameResult = getResultOfGame(results, currentUserName);
    if (gameResult === 1) dispatch(addPointCurrentUser());
    if (gameResult === -1) dispatch(addPointOpponent());
  });
  socket.on('opponent_made_choice', () => {
    dispatch(setOpponentMadeChoice());
  });
  socket.on('start_game_again', () => {
    dispatch(restartGame());
  });
  socket.on('disconnected', ({ username }: { username: string }) => {
    dispatch(disconectedUser(username));
  });
};
