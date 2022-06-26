import { FC } from 'react';
import uuid from 'react-uuid';
import cn from 'classnames';

import { priceFormatter } from 'utils/priceFormatter';

import styles from './finance-list.module.scss';
import { FinanceListProps } from './type';
import Title from 'ui-kit/title';

const FinanceList: FC<FinanceListProps> = (props) => {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((income) => {
        const { title, status, price } = income;

        return (
          <li
            key={uuid()}
            className={cn(
              'flex-row flex-justify_sb flex-align_center',
              styles.item,
            )}>
            <div className={cn('flex-column', styles.itemInformation)}>
              <Title variant="h5">{title}</Title>
              <Title variant="h6">{status}</Title>
            </div>
            <Title variant="h5">{priceFormatter(price)}</Title>
          </li>
        );
      })}
    </ul>
  );
};

export default FinanceList;
