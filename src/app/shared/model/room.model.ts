import { Message } from './message.model';

export class Room {
  users: Array<string>;
  messages?: Array<Message>;
}
