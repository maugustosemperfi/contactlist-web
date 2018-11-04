import { Phone } from './phone.model';

export interface Contact {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  birthday: Date;
  phones: Phone[];
}
