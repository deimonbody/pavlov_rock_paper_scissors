import { setUserName } from '@/store/game/actions';
import { IInitialState } from '@/store/game/common';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

export const gameReducer = (builder: ActionReducerMapBuilder<IInitialState>) => {
  builder.addCase(setUserName, (state, actions) => {
    state.userName = actions.payload;
  });
};
