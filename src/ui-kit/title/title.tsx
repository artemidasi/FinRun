import { FC } from 'react';
import cn from 'classnames';

import styles from './title.module.scss';
import { TitleProps } from './type';

const Title: FC<TitleProps> = (props) => {
  const { variant = 'h1', children, className } = props;

  const classes = cn(styles.title, styles[`title_${variant}`], className ?? '');

  return <p className={classes}>{children}</p>;
};

export default Title;
