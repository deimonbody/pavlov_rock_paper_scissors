import {
  addPointCurrentUser,
  addPointOpponent,
  closeModalAction,
  disconectedUser,
  openModalAction,
  restartGame,
  setGameResults,
  setGameStatus,
  setOpponentMadeChoice,
  setUserMadeChoice,
  setUserName,
  setUsers,
} from '@/store/game/actions';
import { IInitialState } from '@/store/game/common';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

export const gameReducer = (builder: ActionReducerMapBuilder<IInitialState>) => {
  builder
    .addCase(setUsers, (state, actions) => {
      state.users = actions.payload;
    })
    .addCase(setUserName, (state, actions) => {
      state.userName = actions.payload;
    })
    .addCase(openModalAction, (state) => {
      state.isOpenModal = true;
    })
    .addCase(closeModalAction, (state) => {
      state.isOpenModal = false;
    })
    .addCase(setGameStatus, (state, actions) => {
      state.gameStatus = actions.payload;
    })
    .addCase(setGameResults, (state, actions) => {
      state.game = actions.payload;
    })
    .addCase(addPointCurrentUser, (state) => {
      state.userCount = state.userCount + 1;
    })
    .addCase(addPointOpponent, (state) => {
      state.opponentCount = state.opponentCount + 1;
    })
    .addCase(setOpponentMadeChoice, (state) => {
      state.isOpponentHasMadeChoice = true;
    })
    .addCase(setUserMadeChoice, (state) => {
      state.isHasMadeChoice = true;
    })
    .addCase(restartGame, (state) => {
      state.game = [];
      state.isHasMadeChoice = false;
      state.isOpponentHasMadeChoice = false;
      state.gameStatus = 'started';
    })
    .addCase(disconectedUser, (state, actions) => {
      state.game = [];
      state.opponentCount = 0;
      state.userCount = 0;
      state.users = state.users.filter((name) => name !== actions.payload);
      state.gameStatus = 'waiting';
      state.isHasMadeChoice = false;
      state.isOpponentHasMadeChoice = false;
      state.isOpenModal = false;
    });
};
