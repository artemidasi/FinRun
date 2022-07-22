import { FC } from 'react';

import cn from 'classnames';

import { CardProps, CardSize } from './type';

import styles from './card.module.scss';

export const Card: FC<CardProps> = (props) => {
  const { children, className, size = CardSize.m } = props;

  const classes = cn(styles.card, styles[`card_size__${size}`], className);

  return <div className={classes}>{children}</div>;
};

export default Card;
