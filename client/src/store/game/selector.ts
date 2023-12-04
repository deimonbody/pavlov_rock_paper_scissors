import { RootState } from '@/store/types';

export const selectUserName = (state: RootState) => state.gameReducer.userName;
