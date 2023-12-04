import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gameReducer } from '@/store/game';

export const reducer = combineReducers({ gameReducer });
export const store = configureStore({
  reducer,
});
