import { User } from './user.model';

export class Message {
    senderId: string;
    receiverId: string;
    userName: string;
    body: string;
    date: number;
}
