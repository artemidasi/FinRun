import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikProps,
  FormikValues,
} from 'formik';
import { FC, useEffect } from 'react';

import { Links } from 'types/links';

import Button from 'ui-kit/button';
import { FormikInput } from 'ui-kit/input';

import { registrationSchema } from './schema';

import Steps from 'components/steps';

import {
  AlertStatus,
  SectionName,
  useCustomRouter,
} from 'hooks/useCustomRouter.hook';

import styles from './registration.module.scss';

import { Value } from './type';
import { useRegistrationMutation } from 'store/api';
import { ButtonVariant } from 'ui-kit/button/type';
import { fields, initialValues } from './const';

const Registration: FC = () => {
  const router = useCustomRouter();

  const [fetchRegistration, { data, isError }] = useRegistrationMutation();

  const section_name = SectionName.registration;

  useEffect(() => {
    if (data) {
      const { email } = data;

      handleGo(Links.alert, {
        email,
        section_name,
        alert_status: AlertStatus.success,
      })();
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      handleGo(Links.alert, {
        section_name,
        alert_status: AlertStatus.error,
      })();
    }
  }, [isError]);

  const handleGo = (pathname: Links, query?: Record<string, string>) => () => {
    router.push({
      pathname,
      query,
    });
  };

  const handleRegistration = (values: Value) => {
    delete values.password_check;

    fetchRegistration(values);
  };

  return (
    <>
      <Steps maximum_step={3} current_step={2} />

      <Formik
        initialValues={initialValues}
        onSubmit={handleRegistration}
        validationSchema={registrationSchema}
        validateOnChange
        validateOnBlur>
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
                <Button
                  variant={ButtonVariant.text}
                  onClick={handleGo(Links.auth)}>
                  Уже регестрировались?
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
