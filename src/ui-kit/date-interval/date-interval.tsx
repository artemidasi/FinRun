import Image from 'next/image';
import { FC } from 'react';
import cn from 'classnames';

import { today, getLocalTimeZone } from '@internationalized/date';

import Calendar from 'public/static/images/calendar.svg';

import Title from 'ui-kit/title';

import { useCustomRouter } from 'hooks/useCustomRouter.hook';

import { DateIntervalProps } from './type';

import styles from './date-interval.module.scss';

const DateInterval: FC<DateIntervalProps> = (props) => {
  const { isOnlyYear } = props;

  const router = useCustomRouter();

  const { year, month } = today(getLocalTimeZone());

  const { query } = router;

  const {
    day_start = 1,
    month_start = month - 1,
    year_start = year,
    day_end = 0,
    month_end = month,
    year_end = year,
  } = query;

  const dayStart = new Date(
    Number(year_start),
    Number(month_start),
    Number(day_start),
  ).toLocaleString('ru', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });

  const dayEnd = new Date(
    Number(year_end),
    Number(month_end),
    Number(day_end),
  ).toLocaleString('ru', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });

  return (
    <section className={cn('pointer flex-row', styles.wrapper)}>
      <Image src={Calendar} width={24} height={24} unoptimized />

      <Title variant="h5" className={styles.text}>
        {isOnlyYear ? (
          <span>за {year_start} г.</span>
        ) : (
          <>
            {dayStart} - {dayEnd}
          </>
        )}
      </Title>
    </section>
  );
};

export default DateInterval;
