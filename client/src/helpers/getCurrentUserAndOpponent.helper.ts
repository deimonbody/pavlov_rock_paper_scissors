import { getUserChoice } from '@/helpers/getUserChoise.helper';
import { getUserStatus } from '@/helpers/getUserStatus.helper';
import { GameStatus, IGame, IUserPartProps } from '@/types';

interface IProps {
  userCount: number;
  opponentCount: number;
  userName: string;
  gameStatus: GameStatus;
  game: IGame[];
  users: string[];
  isCurrentUserMadeChoice: boolean;
  isOpponentMadeChoice: boolean;
}

export const getCurrentUserAndOpponent = ({
  userCount,
  opponentCount,
  userName,
  gameStatus,
  game,
  users,
  isCurrentUserMadeChoice,
  isOpponentMadeChoice,
}: IProps) => {
  let currentUser: IUserPartProps = {
    count: userCount,
    userName: '',
    choice: null,
    userStatus: 'waiting for game',
  };

  let opponent: IUserPartProps = {
    count: opponentCount,
    userName: '',
    choice: null,
    userStatus: 'waiting for game',
  };

  if (userName) {
    currentUser.userName = userName;
    currentUser.choice = getUserChoice(game, userName);
    currentUser.userStatus = getUserStatus(gameStatus, isCurrentUserMadeChoice);
  }

  if (users.length > 1) {
    const opponentName = users.filter((el) => el !== userName)[0]; //GET OPPONENT NAME;
    opponent.userName = opponentName;
    opponent.choice = getUserChoice(game, opponentName);
    opponent.userStatus = getUserStatus(gameStatus, isOpponentMadeChoice);
  }

  return [currentUser, opponent];
};
