import { FC } from 'react';
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select';

import cn from 'classnames';

import { FormikSelectProps, Option } from './type';

import styles from 'ui-kit/input/input.module.scss';
import Title from 'ui-kit/title';

import CustomControl from './components/control';

const customStyles: StylesConfig<Option> = {
  control: (provided, state) => {
    const { className } = state;

    const isChecked = className === styles.inputChecked;
    const isError = className === styles.inputError;

    let color = 'var(--gray-light-color)';

    if (isError) color = 'var(--error-color)';

    if (isChecked) color = 'var(--blue-main-color)';

    const boxShadow = `0 0 0 1px ${color}`;

    return {
      ...provided,
      border: 'none',
      boxShadow,
      borderRadius: 'var(--border-radius-l)',
      fontSize: 'var(--font-size-s)',
      padding: 16,
      marginBottom: 34,
      cursor: 'pointer',
      ':hover': {
        // borderColor: color,
      },
    };
  },
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    '>:first-of-type': {
      margin: 0,
      padding: 0,
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,
    top: 60,
    margin: 0,
    padding: 0,

    borderRadius: 'var(--border-radius-l)',
  }),
  menuList: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    fontSize: 'var(--font-size-s)',

    '>:first-child': {
      borderTopLeftRadius: 'var(--border-radius-l)',
      borderTopRightRadius: 'var(--border-radius-l)',
    },
    '>:last-child': {
      borderBottomLeftRadius: 'var(--border-radius-l)',
      borderBottomRightRadius: 'var(--border-radius-l)',
    },
  }),
};

export const FormikSelect: FC<FormikSelectProps> = (props) => {
  const { options, fieldProps, placeholder, label } = props;

  const { field, meta, form } = fieldProps;

  const { name } = field;

  const { setFieldValue } = form;

  const { error } = meta;

  const onChange = (newValue: SingleValue<Option> | MultiValue<Option>) => {
    const value = newValue as SingleValue<Option>;

    setFieldValue(name, value?.value);
  };

  const isChecked = !error && options.length;

  return (
    <div className={cn('flex-column full-width', styles.wrapper)}>
      <label
        className={cn(styles.label, {
          [styles.labelError]: error,
          [styles.labelChecked]: isChecked,
        })}
        htmlFor={name}>
        <Title variant="h5">{label}</Title>
      </label>

      <Select
        defaultValue={options[0]}
        styles={customStyles}
        placeholder={placeholder}
        onChange={onChange}
        options={options}
        components={{
          Control: (props) => {
            return (
              <CustomControl
                className={cn({
                  [styles.inputError]: error,
                  [styles.inputChecked]: !error,
                })}
                {...props}
              />
            );
          },
          IndicatorSeparator: null,
        }}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
