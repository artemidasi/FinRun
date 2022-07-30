import * as yup from 'yup';

import {
  DateSchema,
  EmailSchema,
  PasswordCheckSchema,
  PasswordSchema,
  RequiredSchema,
} from 'constants/schema';

import { Value } from './type';

export const registrationSchema: yup.SchemaOf<Value> = yup.object().shape({
  first_name: RequiredSchema,
  second_name: RequiredSchema,
  last_name: yup.string(),
  birth_date: DateSchema,
  email: EmailSchema,
  login: RequiredSchema,
  phone: RequiredSchema,
  password: PasswordSchema,
  password_check: PasswordCheckSchema,
});
