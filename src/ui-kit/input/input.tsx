import { ChangeEvent, FC, forwardRef } from 'react';
import cn from 'classnames';

import styles from './input.module.scss';

import { FieldInputProps, InputProps } from './type';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type = 'text', onChange, value, errorText, onClick } = props;

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
        onChange={handleChangeValue}
        className={styles.input}
        onClick={onClick}
        type={type}
        value={value}
      />
      {errorText && <span>{errorText}</span>}
    </div>
  );
});

const FormikInput: FC<FieldInputProps> = (props) => {
  const { fieldProps, ...inputProps } = props;

  const { field, meta } = fieldProps;

  const { touched, error } = meta;

  return (
    <div className={cn('flex-column full-width', styles.wrapper)}>
      <input
        className={cn(styles.input, {
          [styles.input_error]: error,
          [styles.input_checked]: !error && touched,
        })}
        {...field}
        {...inputProps}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

Input.displayName = 'Input';

export { Input, FormikInput };
