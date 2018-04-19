export class User {
  id: string;
  email: string;
  password?: string;
  name: string;
  surname: string;
  phone?: string;
  avatar?: string;
  apt: string;
  latchId?: string;
  paired: boolean;
  role: string;

  static fromJson(user: User): User {
    return Object.assign(new User(), user);
  }

  asFormData(): FormData {
    const data = new FormData();
    data.append('name', this.name);
    data.append('surname', this.surname);
    data.append('apt', this.apt);
    data.append('phone', this.phone);
    data.append('avatar', this.avatar);

    return data;
  }

}
