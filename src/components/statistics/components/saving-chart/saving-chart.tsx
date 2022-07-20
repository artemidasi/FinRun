import { FC } from 'react';

import { Cell, RadialBar, RadialBarChart } from 'recharts';

import Title from 'ui-kit/title';

import { priceFormatter } from 'utils/priceFormatter';

import styles from './saving-chart.module.scss';

const SavingChart: FC = () => {
  const allMoney = 500_000;

  const savingMoney = 370_032;

  const data = [
    {
      name: 'all',
      money: allMoney,
      fill: 'var(--gray-light-color)',
    },
    {
      name: 'saving',
      money: savingMoney,
      fill: 'var(--blue-main-color)',
    },
  ];

  const percent = Math.round((savingMoney * 100) / allMoney);

  return (
    <div>
      <Title className={styles.title} variant="h3">
        {priceFormatter(savingMoney)}
      </Title>

      <div className={styles.chartContainer}>
        <RadialBarChart
          className={styles.chartElement}
          width={205}
          height={205}
          barSize={allMoney}
          innerRadius="100%"
          outerRadius="60%"
          data={data}
          startAngle={180}
          endAngle={0}>
          <RadialBar dataKey="money" background>
            {data.map(({ name, fill }) => (
              <Cell key={name} fill={fill} />
            ))}
          </RadialBar>
        </RadialBarChart>
        <Title variant="h1" className={styles.percent}>
          {percent}%
        </Title>
      </div>
    </div>
  );
};

export default SavingChart;
