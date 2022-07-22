import { FC } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

import Title from 'ui-kit/title';

import { priceFormatter } from 'utils/priceFormatter';

import styles from './rational-vs-irrational.module.scss';

const RationalVsIrrationalChart: FC = () => {
  const rational = 270_432;
  const irrational = 70_032;

  const data = [
    {
      name: 'rational',
      value: rational,
      fill: 'var(--blue-main-color)',
    },
    {
      name: 'irrational',
      value: irrational,
      fill: 'var(--error-color)',
    },
  ];

  return (
    <section className={styles.container}>
      <div>
        <PieChart width={205} height={205}>
          <Pie data={data} dataKey="value" nameKey="name">
            {data.map(({ name, fill }) => (
              <Cell key={name} fill={fill} />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className={styles.legend}>
        <div className={styles.irrational}>
          <Title variant="h3">-{priceFormatter(irrational)}</Title>

          <Title variant="h5">Иррациональные</Title>
        </div>

        <div className={styles.rational}>
          <Title variant="h3">-{priceFormatter(rational)}</Title>

          <Title variant="h5">Рациональные</Title>
        </div>
      </div>
    </section>
  );
};

export default RationalVsIrrationalChart;
