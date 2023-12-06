import { selectGameStatus, selectUserName } from '@/store/game/selector';
import { useAppSelector } from '@/store/hooks';

const useReselect = (currentUserName: string) => {
  const userName = useAppSelector(selectUserName);
  const gameStatus = useAppSelector(selectGameStatus);

  //WE ADD RESELECT BUTTON ONLY IF GAME HAS STARTED,FOR CURRENT USER
  return userName === currentUserName && gameStatus === 'started';
};

export default useReselect;
