import { Socket } from 'socket.io-client';

type UserСhoice = 'rock' | 'paper' | 'scissors';
type UserStatus = 'waiting for game' | 'choosing' | 'choosed';
type GameStatus = 'finished' | 'waiting' | 'started';
type SocketTypeContext = Socket | null;

export type { UserСhoice, UserStatus, GameStatus, SocketTypeContext };
