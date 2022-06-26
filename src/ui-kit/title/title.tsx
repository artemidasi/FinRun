import { FC } from 'react';
import cn from 'classnames';

import { TitleProps } from './type';

import styles from './title.module.scss';

const Title: FC<TitleProps> = (props) => {
  const { variant = 'h1', children, className, isNoBold = false } = props;

  const classes = cn(
    styles.title,
    styles[`title_${variant}`],
    className ?? '',
    {
      [styles.title_normal]: isNoBold,
    },
  );

  return <p className={classes}>{children}</p>;
};

export default Title;
