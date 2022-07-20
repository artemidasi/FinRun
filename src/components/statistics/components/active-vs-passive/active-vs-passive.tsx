import { FC } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

import Title from 'ui-kit/title';

import { priceFormatter } from 'utils/priceFormatter';

import styles from './active-vs-passive.module.scss';

const ActiveVsPassiveChart: FC = () => {
  const active = 270_432;
  const passive = 70_032;

  const data = [
    {
      name: 'active',
      value: active,
      fill: '#09111F',
    },
    {
      name: 'passive',
      value: passive,
      fill: 'var(--gray-light-color)',
    },
  ];

  return (
    <section className={styles.container}>
      <div>
        <PieChart width={205} height={205}>
          <Pie data={data} dataKey="value">
            {data.map(({ name, fill }) => (
              <Cell key={name} fill={fill} />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className={styles.legend}>
        <div className={styles.active}>
          <Title variant="h3">+{priceFormatter(active)}</Title>

          <Title variant="h5">Активные</Title>
        </div>
        <div className={styles.passive}>
          <Title variant="h3">+{priceFormatter(passive)}</Title>

          <Title variant="h5">Пассивные</Title>
        </div>
      </div>
    </section>
  );
};

export default ActiveVsPassiveChart;
