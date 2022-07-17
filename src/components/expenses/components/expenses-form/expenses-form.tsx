import { Formik, Form, Field, FormikProps, FieldProps } from 'formik';
import { FC } from 'react';
import cn from 'classnames';

import { FieldInformation } from 'types/schema';

import Button from 'ui-kit/button';
import { FormikInput } from 'ui-kit/input';
import { FormikSelect } from 'ui-kit/select';

import useModal from 'hooks/useModal.hook';

import { ExpensesSchema } from './schema';

import { ExpensesFormProps, FormikValues } from './type';

import styles from './expenses-form.module.scss';

const ExpensesForm: FC<ExpensesFormProps> = (props) => {
  const { name } = props;

  const { handleCloseModal } = useModal();
  const onSubmit = (values: FormikValues) => {
    // eslint-disable-next-line no-console
    console.log(values);

    handleCloseModal(name)();
  };

  const initialValues: FormikValues = {
    name: '',
    category: '',
    summa: '',
  };

  const fields: FieldInformation<FormikValues>[] = [
    {
      name: 'name',
      placeholder: 'Наименование',
      label: 'Название',
    },
    {
      name: 'category',
      placeholder: 'Категория',
      label: 'Категория',
    },
    {
      name: 'summa',
      type: 'number',
      placeholder: 'Сумма в рублях',
      label: 'Сумма',
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ExpensesSchema}
      validateOnChange>
      {(props: FormikProps<FormikValues>) => {
        const { isValid } = props;

        return (
          <Form className={styles.form}>
            {fields.map((field) => {
              const {
                name,
                placeholder,
                type = 'text',
                options,
                label,
              } = field;

              return (
                <Field key={name} name={name}>
                  {(fieldProps: FieldProps<FormikValues>) => {
                    if (options) {
                      return (
                        <FormikSelect
                          label={label}
                          placeholder="Cтатус"
                          options={options}
                          fieldProps={fieldProps}
                        />
                      );
                    }

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
            <Button
              className={cn('full-width', styles.button_submit)}
              type="submit"
              disabled={!isValid}>
              Добавить
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ExpensesForm;
