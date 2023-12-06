import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './common';
import { gameReducer } from '@/store/game/reducer';

const initialState: IInitialState = {
  userName: null,
  userCount: 0,
  opponentCount: 0,
  gameStatus: 'waiting',
  game: [],
  users: [],
  isOpenModal: false,
  isHasMadeChoice: false,
  isOpponentHasMadeChoice: false,
};

const { reducer } = createSlice({
  initialState,
  name: 'game-reducer',
  reducers: {},
  extraReducers: gameReducer,
});

export { reducer };
