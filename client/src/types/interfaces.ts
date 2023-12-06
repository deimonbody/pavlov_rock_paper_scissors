import { UserСhoice, UserStatus } from './type';

interface IUserPartProps {
  count: number;
  userName: string;
  choice: UserСhoice | null;
  userStatus: UserStatus;
}

interface IGame {
  username: string;
  choice: UserСhoice;
}

interface IConnectedSocketAction {
  username: string;
}

interface IGameFinishedSocketAction {
  results: IGame[];
}

export type { IUserPartProps, IConnectedSocketAction, IGame, IGameFinishedSocketAction };
