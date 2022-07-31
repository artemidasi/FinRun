import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikProps,
  FormikValues,
} from 'formik';
import { FC, useEffect } from 'react';

import { FieldInformation } from 'types/schema';

import Button from 'ui-kit/button';
import { FormikInput } from 'ui-kit/input';
import Title from 'ui-kit/title';
import { ButtonVariant } from 'ui-kit/button/type';

import { useCustomRouter } from 'hooks/useCustomRouter.hook';

import { Links } from 'types/links';

import { authSchema } from './schema';
import { Values } from './type';

import styles from './auth.module.scss';
import { useTokenMutation } from 'store/api';

import { LocalKey, saveState } from 'utils/localStorage';

const Auth: FC = () => {
  const router = useCustomRouter();

  const [getToken, { isLoading, data }] = useTokenMutation();

  useEffect(() => {
    if (data) {
      const { access_token } = data;

      saveState(LocalKey.access_token, access_token);

      handleGo(Links.home)();
    }
  }, [data]);

  const initialValues: Values = {
    username: '',
    password: '',
  };

  const fields: FieldInformation<Values>[] = [
    {
      name: 'username',
      placeholder: 'Введите ваш логин',
      label: 'Логин',
    },
    {
      name: 'password',
      placeholder: 'Введите ваш пароль',
      label: 'Пароль',
    },
  ];

  const handleGo = (name: Links) => () => {
    router.push(name);
  };

  const handleAuthUser = (values: Values) => {
    getToken(values);
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
                <Button type="submit" disabled={!isValid || isLoading}>
                  Вход
                </Button>

                <Button
                  variant={ButtonVariant.text}
                  onClick={handleGo(Links.registration)}>
                  Регистрация
                </Button>

                <Button
                  disabled
                  variant={ButtonVariant.text}
                  onClick={handleGo(Links.drop_password)}>
                  Забыли пароль?
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
