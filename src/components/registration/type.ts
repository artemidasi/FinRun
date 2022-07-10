import { RegistrationBody } from 'types/registration';

export type Value = RegistrationBody & {
  password_check: string;
};
