import Image from 'next/image';
import { FC } from 'react';
import cn from 'classnames';

import Calendar from '../../../public/static/images/calendar.svg';

import { DateIntervalProps } from './type';

import styles from './date-interval.module.scss';

const DateInterval: FC<DateIntervalProps> = (props) => {
  const {} = props;

  return (
    <section className={cn('pointer flex-row', styles.wrapper)}>
      <Image src={Calendar} width={24} height={24} unoptimized />
      <span className={styles.text}>1 апр 22 - 31 апр 22</span>
    </section>
  );
};

export default DateInterval;
