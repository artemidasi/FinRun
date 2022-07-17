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

import { registrationSchema } from './schema';

import Steps from 'components/steps';

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
      label: 'Имя',
    },
    {
      name: 'last_name',
      placeholder: 'Введите вашу фамилию',
      label: 'Фамилия',
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
      <Steps maximum_step={3} current_step={2} />

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
                const { name, placeholder, type = 'text', label } = field;

                return (
                  <Field key={name} name={name}>
                    {(fieldProps: FieldProps<FormikValues>) => {
                      return (
                        <FormikInput
                          label={label}
                          type={type}
                          placeholder={placeholder}
                          fieldProps={fieldProps}
                        />
                      );
                    }}
                  </Field>
                );
              })}

              <div className="flex-column flex-justify_sb">
                <Button
                  disabled={!isValid}
                  onClick={handleGo(Links.registration)}>
                  Зарегистрироваться
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
