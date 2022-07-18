import { FC } from 'react';

import Title from 'ui-kit/title';

import Card from 'components/card';

import BalanceChart from './components/balance';

import styles from './statistics.module.scss';

const Statistics: FC = () => {
  const statistics = [
    {
      title: 'Баланc доходов и расходов',
      chart: <BalanceChart incomes={1_870_032} expenses={-570_032} />,
    },
    {
      title: 'Сэкономлено всего',
      chart: null,
    },
    {
      title: 'Рационнальные vs. иррациональные расходы',
      chart: null,
    },
    {
      title: 'Активные vs. пассивные доходы',
      chart: null,
    },
  ];

  return (
    <section>
      <ul className={styles.list}>
        {statistics.map((statistics) => {
          const { title, chart } = statistics;

          return (
            <li key={title} className={styles.item}>
              <Card className={styles.card}>
                <Title className={styles.itemTitle} variant="h6">
                  {title}
                </Title>

                {chart}
              </Card>
            </li>
          );
        })}
      </ul>

      <Card>
        <Title variant="h3">Доходы и расходы за год</Title>
      </Card>
    </section>
  );
};

export default Statistics;
