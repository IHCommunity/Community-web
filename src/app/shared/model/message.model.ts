import { User } from './user.model';

export class Message {
  userId?: User;
  userName: string;
  body: string;
  date?: number;
}
