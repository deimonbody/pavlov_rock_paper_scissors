import { GameStatus, IGame } from '@/types';

export interface IInitialState {
  userName: string | null;
  game: IGame[];
  userCount: number;
  opponentCount: number;
  gameStatus: GameStatus;
  users: string[];
  isOpenModal: boolean;
  isHasMadeChoice: boolean;
  isOpponentHasMadeChoice: boolean;
}

export enum GAME_ACTIONS {
  SET_USERS = 'set_users',
  SET_USER_NAME = 'set_user_name',
  OPEN_MODAL = 'open_modal',
  CLOSE_MODAL = 'close_modal',
  SET_GAME_STATUS = 'set_game_status',
  SET_GAME = 'set_game',
  ADD_POINT_OPPONENT = 'add_point_opponent',
  ADD_POINT_CURRENT_USER = 'add_point_current_user',
  SET_OPPONENT_MADE_CHOICE = 'set_opponent_made_choice',
  SET_USER_MADE_CHOICE = 'set_user_made_choice',
  RESTART_GAME = 'restart_game',
  USER_DISCONECTED = 'user_disconected',
}
