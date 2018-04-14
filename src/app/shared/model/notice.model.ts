export class Notice {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  type: string;
  stored: Array<any>;
  storeNotice?: Boolean;
  checkedByAdmin: Boolean;
}
