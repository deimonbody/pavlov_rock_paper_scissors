import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './common';
import { gameReducer } from '@/store/game/reducer';

const initialState: IInitialState = {
  userName: null,
};

const { reducer } = createSlice({
  initialState,
  name: 'game-reducer',
  reducers: {},
  extraReducers: gameReducer,
});

export { reducer };
