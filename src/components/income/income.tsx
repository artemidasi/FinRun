import { FC } from 'react';

import DateInterval from 'ui-kit/date-interval';

import Title from 'ui-kit/title';

import IncomeList from './components/income-list';

import styles from './income.module.scss';

const Income: FC = () => {
  return (
    <div>
      <Title className={styles.title} variant="h2">
        Доходы
      </Title>

      <DateInterval />

      <IncomeList />
    </div>
  );
};

export default Income;
