import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikProps,
  FormikValues,
} from 'formik';
import { FC } from 'react';

import { FieldInformation } from 'types/schema';
import { Links } from 'types/links';

import Button from 'ui-kit/button';
import { FormikInput } from 'ui-kit/input';
import Title from 'ui-kit/title';

import { registrationSchema } from './schema';

import { useCustomRouter } from 'hooks/useCustomRouter.hook';

import styles from './registration.module.scss';
import { RegistrationBody } from 'types/registration';
import { Value } from './type';

const Registration: FC = () => {
  const router = useCustomRouter();

  const initialValues: Value = {
    first_name: '',
    last_name: '',
    birth_date: '',
    email: '',
    login: '',
    phone: '',
    password: '',
    password_check: '',
  };

  const fields: FieldInformation<Value>[] = [
    {
      name: 'first_name',
      placeholder: 'Введите ваше имя',
    },
    {
      name: 'last_name',
      placeholder: 'Введите вашу фамилию',
    },
    {
      name: 'birth_date',
      placeholder: 'Введите вашу дату рождения',
      type: 'date',
    },
    {
      name: 'email',
      placeholder: 'Введите вашу почту',
      type: 'email',
    },
    {
      name: 'login',
      placeholder: 'Введите ваш логин',
    },
    {
      name: 'phone',
      placeholder: 'Введите ваш телефон',
    },
    {
      name: 'password',
      placeholder: 'Придумайте пароль',
      type: 'password',
    },
    {
      name: 'password_check',
      placeholder: 'Повторите пароль',
      type: 'password',
    },
  ];

  const handleGo = (name: Links) => () => {
    router.push(name);
  };

  const handleAuthUser = (values: RegistrationBody) => {
    // eslint-disable-next-line no-console
    console.log(values);

    handleGo(Links.home)();
  };

  return (
    <>
      <Title className={styles.title} variant="h2">
        Регистрация
      </Title>

      <Formik
        initialValues={initialValues}
        onSubmit={handleAuthUser}
        validationSchema={registrationSchema}
        validateOnChange>
        {(props: FormikProps<FormikValues>) => {
          const { isValid } = props;

          return (
            <Form className={styles.form}>
              {fields.map((field) => {
                const { name, placeholder, type = 'text' } = field;

                return (
                  <Field key={name} name={name}>
                    {(fieldProps: FieldProps<FormikValues>) => {
                      return (
                        <FormikInput
                          type={type}
                          placeholder={placeholder}
                          fieldProps={fieldProps}
                        />
                      );
                    }}
                  </Field>
                );
              })}

              <div className="flex-row flex-justify_sb">
                <Button onClick={handleGo(Links.registration)}>
                  Регистрация
                </Button>
                <Button onClick={handleGo(Links.drop_password)}>
                  Забыли пароль?
                </Button>
                <Button type="submit" disabled={!isValid}>
                  Вход
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Registration;
