export class Service {
  id: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  location: {
    coordinates: Array<number>,
    type: string
  };
}
