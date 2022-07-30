import { FieldInformation } from 'types/schema';
import { Value } from './type';

export const initialValues: Value = {
  first_name: '',
  second_name: '',
  last_name: '',
  birth_date: '',
  email: '',
  login: '',
  phone: '',
  password: '',
  password_check: '',
};

export const fields: FieldInformation<Value>[] = [
  {
    name: 'first_name',
    placeholder: 'Введите ваше имя',
    label: 'Имя',
  },
  {
    name: 'second_name',
    placeholder: 'Введите вашу фамилию',
    label: 'Фамилия',
  },
  {
    name: 'last_name',
    placeholder: 'Введите ваше отчество',
    label: 'Отчество',
  },
  {
    name: 'birth_date',
    placeholder: 'Введите вашу дату рождения',
    type: 'date',
    label: 'Дата рождения',
  },
  {
    name: 'email',
    placeholder: 'Введите вашу почту',
    type: 'email',
    label: 'Почта',
  },
  {
    name: 'login',
    placeholder: 'Введите ваш логин',
    label: 'Логин',
  },
  {
    name: 'phone',
    placeholder: 'Введите ваш телефон',
    label: 'Телефон',
  },
  {
    name: 'password',
    placeholder: 'Придумайте пароль',
    type: 'password',
    label: 'Пароль',
  },
  {
    name: 'password_check',
    placeholder: 'Повторите пароль',
    type: 'password',
    label: 'Подтверждение пароля',
  },
];
