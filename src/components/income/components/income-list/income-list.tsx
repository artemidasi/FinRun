import { FC } from 'react';
import uuid from 'react-uuid';
import cn from 'classnames';

import { priceFormatter } from 'utils/priceFormatter';

import styles from './income-list.module.scss';

const IncomeList: FC = () => {
  const TEST_DATA = [
    {
      title: 'Зарплата',
      status: 'активный',
      price: 80_000,
    },
    {
      title: 'Зарплата',
      status: 'активный',
      price: 80_000,
    },
    {
      title: 'Зарплата',
      status: 'активный',
      price: 80_000,
    },
    {
      title: 'Зарплата',
      status: 'активный',
      price: 80_000,
    },
    {
      title: 'Зарплата',
      status: 'активный',
      price: 80_000,
    },
    {
      title: 'Зарплата',
      status: 'активный',
      price: 80_000,
    },
  ];

  return (
    <ul className={styles.list}>
      {TEST_DATA.map((income) => {
        const { title, status, price } = income;

        return (
          <li
            key={uuid()}
            className={cn(
              'flex-row flex-justify_sb flex-align_center',
              styles.item,
            )}>
            <div className={cn('flex-column', styles.itemInformation)}>
              <span className={styles.itemTitle}>{title}</span>
              <span className={styles.itemStatus}>{status}</span>
            </div>
            <span className={styles.itemPrice}>{priceFormatter(price)}</span>
          </li>
        );
      })}
      <li
        className={cn(
          'flex-row flex-justify_sb flex-align_center',
          styles.item,
        )}>
        <div className={cn('flex-column', styles.itemInformation)}>
          <span className={styles.itemTitle}>Зарплата</span>
          <span className={styles.itemStatus}>активный</span>
        </div>
        <span className={styles.itemPrice}>{priceFormatter(80_000)}</span>
      </li>

      <li
        className={cn(
          'flex-row flex-justify_sb flex-align_center',
          styles.item,
        )}>
        <div className={cn('flex-column', styles.itemInformation)}>
          <span className={styles.itemTitle}>Зарплата</span>
          <span className={styles.itemStatus}>активный</span>
        </div>
        <span className={styles.itemPrice}>{priceFormatter(80_000)}</span>
      </li>

      <li
        className={cn(
          'flex-row flex-justify_sb flex-align_center',
          styles.item,
        )}>
        <div className={cn('flex-column', styles.itemInformation)}>
          <span className={styles.itemTitle}>Зарплата</span>
          <span className={styles.itemStatus}>активный</span>
        </div>
        <span className={styles.itemPrice}>{priceFormatter(80_000)}</span>
      </li>
    </ul>
  );
};

export default IncomeList;
