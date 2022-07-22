import { FC } from 'react';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const IncomeAndExpensesChart: FC = () => {
  const data = [
    {
      name: 'янв',
      income: 4000,
      expenses: 2400,
    },
    {
      name: 'фев',
      income: 3000,
      expenses: 1398,
    },
    {
      name: 'март',
      income: 2000,
      expenses: 9800,
    },
    {
      name: 'апр',
      income: 2780,
      expenses: 3908,
    },
    {
      name: 'май',
      income: 1890,
      expenses: 4800,
    },
    {
      name: 'июн',
      income: 2390,
      expenses: 3800,
    },
    {
      name: 'июл',
      income: 3490,
      expenses: 4300,
    },
    {
      name: 'авг',
      income: 3490,
      expenses: 4300,
    },
    {
      name: 'сен',
      income: 3490,
      expenses: 4300,
    },
    {
      name: 'окт',
      income: 3490,
      expenses: 4300,
    },
  ];

  return (
    <section>
      <BarChart width={770} height={250} data={data}>
        <CartesianGrid vertical={false} />
        <XAxis tick={{ stroke: 'var(--gray-light-color)' }} dataKey="name" />
        <YAxis tick={{ stroke: 'black' }} />
        <Bar dataKey="income" fill="var(--blue-main-color)" />
        <Bar dataKey="expenses" fill="var(--error-color)" />
      </BarChart>
    </section>
  );
};

export default IncomeAndExpensesChart;
