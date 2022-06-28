import { FC } from 'react';
import cn from 'classnames';

import { ButtonProps, ButtonSize } from './type';

import styles from './button.module.scss';
import Title from 'ui-kit/title';

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    size = ButtonSize.M,
    iconLeft,
    iconRight,
    ...buttonProps
  } = props;

  const classes = cn(
    'flex-row flex-align_center flex-justify_center',
    styles.button,
    styles[`button_size__${size}`],
    className,
  );

  return (
    <button className={classes} {...buttonProps}>
      {iconLeft && (
        <div className={cn(styles.icon, styles.icon_left)}>{iconLeft}</div>
      )}
      <Title variant="h5"> {children}</Title>
      {iconRight && (
        <div className={cn(styles.icon, styles.icon_right)}>{iconRight}</div>
      )}
    </button>
  );
};

export default Button;
