export interface RegistrationBody {
  first_name: string;
  second_name: string;
  last_name?: string;
  birth_date: string | Date;
  email: string;
  login: string;
  password: string;
  phone: string;
}

export interface RegistrationResponse extends RegistrationBody {
  id: string;
  fingram_id: string;
  emailConfirmed: boolean;
}
