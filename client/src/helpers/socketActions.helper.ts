import { Socket } from 'socket.io-client';

export const socketHelperActions = (socket: Socket<any, any>) => {
  socket.on('connected', (smth: any): void => {
    console.log(smth);
  });
};
