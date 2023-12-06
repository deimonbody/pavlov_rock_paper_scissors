import { RootState } from '@/store/types';

export const selectUserName = (state: RootState) => state.gameReducer.userName;
export const selectIsOpenModal = (state: RootState) => state.gameReducer.isOpenModal;
export const selectGameStatus = (state: RootState) => state.gameReducer.gameStatus;
export const selectGame = (state: RootState) => state.gameReducer.game;
