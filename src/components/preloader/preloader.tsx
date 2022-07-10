import React, { FC } from 'react';

import cn from 'classnames';

import img from 'public/static/images/circle-preloader.svg';

import styles from './styles.module.scss';

const Preloader: FC = () => {
  return (
    <div className={cn(styles.wrapper)}>
      <img className={cn(styles.image)} src={img.src} alt="Загрузка" />
    </div>
  );
};

export default Preloader;
