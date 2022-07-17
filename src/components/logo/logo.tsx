import { FC } from 'react';

import cn from 'classnames';

import Title from 'ui-kit/title';

import { LogoProps } from './type';

import styles from './logo.module.scss';

const Logo: FC<LogoProps> = (props) => {
  const { className } = props;

  const classes = cn(styles.logo, className);

  return <Title className={classes}>FinRun</Title>;
};

export default Logo;
