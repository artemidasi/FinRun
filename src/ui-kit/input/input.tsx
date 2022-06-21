import { ChangeEvent, forwardRef } from 'react';

import styles from './input.module.scss';
import { InputProps } from './type';

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

Input.displayName = 'Input';

export default Input;
