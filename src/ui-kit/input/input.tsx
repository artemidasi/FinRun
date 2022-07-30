import { ChangeEvent, FC, forwardRef, useState } from 'react';
import Image from 'next/image';

import eyeCloseIcon from 'public/static/images/lk-close-eye.svg';
import eyeIcon from 'public/static/images/lk-eye.svg';

import cn from 'classnames';

import styles from './input.module.scss';

import { FieldInputProps, InputProps } from './type';
import { Nullable } from 'types';
import Title from '../title';

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
  const { fieldProps, type, label, ...inputProps } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleToggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const { field, meta } = fieldProps;

  const { value, error } = meta;

  const { name } = field;

  const isPassword = type === 'password';

  const iconPassword: JSX.Element = (
    <button className={styles.buttonIcon} onClick={handleToggleShowPassword}>
      <Image
        src={showPassword ? eyeIcon : eyeCloseIcon}
        unoptimized
        width={20}
        height={20}
      />
    </button>
  );

  const getRightIcon = (): Nullable<JSX.Element> => {
    if (isPassword) {
      return iconPassword;
    }

    return null;
  };

  const getTypeInput = (): 'text' | 'password' =>
    showPassword ? 'text' : 'password';

  const isChecked = !error && value;

  const getInput = () => (
    <input
      id={name}
      className={cn(styles.input, {
        [styles.inputError]: error,
        [styles.inputChecked]: isChecked,
      })}
      type={isPassword ? getTypeInput() : type}
      {...field}
      {...inputProps}
    />
  );

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

      {isPassword ? (
        <div className={cn(styles.wrapperPassword, styles.wrapper)}>
          {getInput()}

          <div
            className={cn(styles.iconRight, styles.icon, {
              [styles.iconPadding]: !isPassword,
            })}>
            {getRightIcon()}
          </div>
        </div>
      ) : (
        getInput()
      )}
      {error && (
        <Title variant="h6" className={styles.error}>
          {error}
        </Title>
      )}
    </div>
  );
};

Input.displayName = 'Input';

export { Input, FormikInput };
