export enum PATHES {
  AUTH = '/auth',
  MAIN = '/',
}

export type UserСhoice = 'rock' | 'paper' | 'scissors';
export type UserStatus = 'waiting for game' | 'choosing' | 'waiting';

export interface IUserPartProps {
  count: number;
  userName: string;
  choice: UserСhoice | null;
  userStatus: UserStatus;
}
