import { GAME_ACTIONS } from '@/store/game/common';
import { GameStatus, IGame } from '@/types';
import { createAction } from '@reduxjs/toolkit';

export const setUsers = createAction(GAME_ACTIONS.SET_USERS, (users: string[]) => ({ payload: users }));

export const setUserName = createAction(GAME_ACTIONS.SET_USER_NAME, (userName: string) => ({ payload: userName }));

export const openModalAction = createAction(GAME_ACTIONS.OPEN_MODAL);

export const closeModalAction = createAction(GAME_ACTIONS.CLOSE_MODAL);

export const setGameStatus = createAction(GAME_ACTIONS.SET_GAME_STATUS, (status: GameStatus) => ({ payload: status }));

export const setGameResults = createAction(GAME_ACTIONS.SET_GAME, (game: IGame[]) => ({ payload: game }));

export const addPointOpponent = createAction(GAME_ACTIONS.ADD_POINT_OPPONENT);

export const addPointCurrentUser = createAction(GAME_ACTIONS.ADD_POINT_CURRENT_USER);

export const setOpponentMadeChoice = createAction(GAME_ACTIONS.SET_OPPONENT_MADE_CHOICE);

export const setUserMadeChoice = createAction(GAME_ACTIONS.SET_USER_MADE_CHOICE);

export const restartGame = createAction(GAME_ACTIONS.RESTART_GAME);

export const disconectedUser = createAction(GAME_ACTIONS.USER_DISCONECTED, (username: string) => ({
  payload: username,
}));
