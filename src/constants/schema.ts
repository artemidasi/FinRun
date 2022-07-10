import * as yup from 'yup';

const ERROR_MESSAGES = {
  REQUIRED: 'Обязательное поле для заполнения',
  INVALID_EMAIL: 'Неверная почта',
  PASSWORD_CHECK: 'Пароли должны совпадать',
};

export const RequiredSchema = yup.string().required(ERROR_MESSAGES.REQUIRED);

export const DateSchema = yup.date().required(ERROR_MESSAGES.REQUIRED);

export const PasswordSchema = yup.string().required(ERROR_MESSAGES.REQUIRED);
export const PasswordCheckSchema = yup
  .string()
  .equals([yup.ref('password')], ERROR_MESSAGES.PASSWORD_CHECK);

export const EmailSchema = yup
  .string()
  .email(ERROR_MESSAGES.INVALID_EMAIL)
  .required(ERROR_MESSAGES.REQUIRED);
