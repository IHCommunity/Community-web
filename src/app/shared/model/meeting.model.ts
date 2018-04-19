import { Agreement } from './agreement.model';

export class Meeting {
  id: string;
  title: string;
  description: string;
  active: boolean;
  startDate: Date;
  deadLine: Date;
  agreements: Array<Agreement>;
}
