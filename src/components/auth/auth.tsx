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

import Button from 'ui-kit/button';
import { FormikInput } from 'ui-kit/input';

import { authSchema } from './schema';
import { Values } from './type';

import styles from './auth.module.scss';
import { useCustomRouter } from 'hooks/useCustomRouter.hook';
import { Links } from 'types/links';
import Title from 'ui-kit/title';

const Auth: FC = () => {
  const router = useCustomRouter();

  const initialValues: Values = {
    username: '',
    password: '',
  };

  const fields: FieldInformation<Values>[] = [
    {
      name: 'username',
      placeholder: 'Введите ваш логин',
    },
    {
      name: 'password',
      placeholder: 'Введите ваш пароль',
    },
  ];

  const handleGo = (name: Links) => () => {
    router.push(name);
  };

  const handleAuthUser = (values: Values) => {
    // eslint-disable-next-line no-console
    console.log(values);

    handleGo(Links.home)();
  };

  return (
    <>
      <Title className={styles.title} variant="h2">
        Авторизация
      </Title>

      <Formik
        initialValues={initialValues}
        onSubmit={handleAuthUser}
        validationSchema={authSchema}
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

export default Auth;
