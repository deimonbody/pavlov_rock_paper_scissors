import { createContext, useContext, useEffect, useState } from 'react';
import { SocketTypeContext } from '@/types';
import { Socket, io } from 'socket.io-client';
import { socketHelperActions } from '@/helpers/socketActions.helper';
import { selectUserName } from '@/store/game/selector';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

interface IProps {
  children: React.ReactNode;
}
const SocketContext = createContext<SocketTypeContext>(null);

export const SocketContextProvider: React.FC<IProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const userName = useAppSelector(selectUserName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socketConnection = io(import.meta.env.VITE_SERVER_URL, {
      query: {
        username: userName || '',
      },
    });
    setSocket(socketConnection);
    socketHelperActions(socketConnection, dispatch, userName as string);
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  return context;
};
