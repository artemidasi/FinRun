import Image from 'next/image';
import { FC } from 'react';
import cn from 'classnames';

import { today, getLocalTimeZone } from '@internationalized/date';

import CalendarIcon from 'public/static/images/calendar.svg';

import Title from 'ui-kit/title';

import { useCustomRouter } from 'hooks/useCustomRouter.hook';

import { dateConfig, defaultLanguage } from './const';

import { getCalendarString } from './helper';

import { CalendarProps } from './type';

import styles from './calendar.module.scss';

const Calendar: FC<CalendarProps> = (props) => {
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
  ).toLocaleString(defaultLanguage, dateConfig);

  const dayEnd = new Date(
    Number(year_end),
    Number(month_end),
    Number(day_end),
  ).toLocaleString(defaultLanguage, dateConfig);

  return (
    <section className={cn('pointer flex-row', styles.wrapper)}>
      <Image src={CalendarIcon} width={24} height={24} unoptimized />

      <Title variant="h5" className={styles.text}>
        {isOnlyYear
          ? `за ${year_start} год`
          : getCalendarString({
              dayEnd,
              dayStart,
            })}
      </Title>
    </section>
  );
};

export default Calendar;
