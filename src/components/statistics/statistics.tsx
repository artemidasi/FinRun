import { FC } from 'react';

import Title from 'ui-kit/title';

import Card from 'components/card';

import IncomeAndExpensesChart from './components/income-and-expenses';

import { statistics, variantTitle } from './const';

import styles from './statistics.module.scss';

const Statistics: FC = () => {
  return (
    <section>
      <ul className={styles.list}>
        {statistics.map((statistics) => {
          const { title, chart } = statistics;

          return (
            <li key={title} className={styles.item}>
              <Card className={styles.card}>
                <Title className={styles.itemTitle} variant={variantTitle}>
                  {title}
                </Title>

                {chart}
              </Card>
            </li>
          );
        })}
      </ul>

      <Card>
        <Title className={styles.title} variant={variantTitle}>
          Доходы и расходы за год
        </Title>

        <IncomeAndExpensesChart />
      </Card>
    </section>
  );
};

export default Statistics;
