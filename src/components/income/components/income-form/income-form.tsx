import { Formik, Form, Field, FormikProps, FieldProps } from 'formik';
import { FC } from 'react';
import cn from 'classnames';

import { FieldInformation } from 'types/schema';

import Button from 'ui-kit/button';
import { FormikInput } from 'ui-kit/input';
import { FormikSelect } from 'ui-kit/select';
import { Option } from 'ui-kit/select/type';

import { IncomeSchema } from './schema';

import { FormikValues, IncomeFormProps } from './type';

import styles from './income-form.module.scss';
import useModal from 'hooks/useModal.hook';

const IncomeForm: FC<IncomeFormProps> = (props) => {
  const { name } = props;

  const { handleCloseModal } = useModal();
  const onSubmit = (values: FormikValues) => {
    // eslint-disable-next-line no-console
    console.log(values);

    handleCloseModal(name)();
  };

  const categoryOptions: Option[] = [
    {
      value: 'active',
      label: 'активный',
    },
    {
      value: 'passive',
      label: 'пасивный',
    },
  ];

  const initialValues: FormikValues = {
    name: '',
    category: categoryOptions[0].value,
    summa: '',
  };

  const fields: FieldInformation<FormikValues>[] = [
    {
      name: 'name',
      placeholder: 'Наименование',
    },
    {
      name: 'category',
      placeholder: 'Категория',
      options: categoryOptions,
    },
    {
      name: 'summa',
      type: 'number',
      placeholder: 'Сумма в рублях',
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={IncomeSchema}
      validateOnChange>
      {(props: FormikProps<FormikValues>) => {
        const { isValid } = props;

        return (
          <Form className={styles.form}>
            {fields.map((field) => {
              const { name, placeholder, type = 'text', options } = field;

              return (
                <Field key={name} name={name}>
                  {(fieldProps: FieldProps<FormikValues>) => {
                    if (options) {
                      return (
                        <FormikSelect
                          placeholder="Cтатус"
                          options={options}
                          fieldProps={fieldProps}
                        />
                      );
                    }

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

export default IncomeForm;
