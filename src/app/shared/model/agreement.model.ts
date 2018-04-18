import { Meeting } from './meeting.model';
import { User } from './user.model';

export class Agreement {
  id: string;
  title: string;
  description: string;
  meeting: Meeting;
  agree: Array<User>;
  disagree: Array<User>;
  agreeWidth?: string;
  disagreeWidth?: string;
}
