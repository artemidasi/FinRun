export interface RegistrationBody {
  first_name: string;
  last_name: string;
  birth_date: string | Date;
  email: string;
  login: string;
  password: string;
  phone: string;
}
