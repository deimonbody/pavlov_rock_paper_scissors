import { selectUserName } from '@/store/game/selector';
import { useAppSelector } from '@/store/hooks';

const useAuth = () => {
  const userName = useAppSelector(selectUserName);
  return !!userName;
};

export default useAuth;
