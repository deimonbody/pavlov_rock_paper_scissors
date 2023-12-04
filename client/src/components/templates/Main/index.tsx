import { selectUserName } from '@/store/game/selector';
import { useAppSelector } from '@/store/hooks';
import React, { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

const MainPageTemplate: React.FC = () => {
  const [socket, setSocket] = useState<Socket<any, any> | null>(null);
  const userName = useAppSelector(selectUserName);

  useEffect(() => {
    const socketConnection = io(import.meta.env.VITE_SERVER_URL, {
      query: {
        username: userName || '',
      },
    });
    setSocket(socketConnection);
  }, []);

  return <div>main page</div>;
};

export default MainPageTemplate;
