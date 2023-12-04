import { GAME_ACTIONS } from '@/store/game/common';
import { createAction } from '@reduxjs/toolkit';

export const setUserName = createAction(GAME_ACTIONS.SET_USER_NAME, (username: string) => ({ payload: username }));
