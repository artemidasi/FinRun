import { FC } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import randomColor from 'randomcolor';

import useModal from 'hooks/useModal.hook';

import { NamesModal } from 'types/modals';

import FinanceContainer from 'components/finance-container';
import { FinanceItem } from 'components/finance-container/components/finance-list/type';
import { FinanceButtonInformation } from 'components/finance-container/type';
import Title from 'ui-kit/title';

import styles from './expenses.module.scss';
import { priceFormatter } from 'utils/priceFormatter';

const Expenses: FC = () => {
  const { handleOpenModal } = useModal();

  const TEST_DATA: FinanceItem[] = [
    {
      title: 'Мобильный 1',
      status: 'связь',
      price: 600,
    },
    {
      title: 'Мобильный 2',
      status: 'связь',
      price: 600,
    },
    {
      title: 'Ипотека',
      status: 'квартира',
      price: 40_000,
    },
  ];

  const buttonInformation: FinanceButtonInformation = {
    text: 'Внести новый расход',
    onClick: handleOpenModal(NamesModal.add_expenses),
  };

  const colors = ['orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

  const data = [
    {
      name: 'Связь и интернет',
      value: 1_200,
      color: randomColor({
        hue: colors[Math.floor(Math.random() * colors.length)],
      }),
    },
    {
      name: 'Ипотека',
      value: 40_000,
      color: randomColor({
        hue: colors[Math.floor(Math.random() * colors.length)],
      }),
    },
    {
      name: 'Еда',
      value: 16_200,
      color: randomColor({
        hue: colors[Math.floor(Math.random() * colors.length)],
      }),
    },
    {
      name: 'Иррациональные',
      value: 16_200,
      color: 'var(--error-color)',
    },
  ];

  const summa = data.reduce((summa, item) => {
    return summa + item.value;
  }, 0);

  return (
    <section>
      <FinanceContainer
        items={TEST_DATA}
        buttonInformation={buttonInformation}
      />

      <section className={styles.spendingContainer}>
        <Title variant="h2">Траты по категориям</Title>

        <div className={styles.container}>
          <PieChart width={340} height={340}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}>
              {data.map(({ name, color }) => (
                <Cell key={name} fill={color} />
              ))}
            </Pie>
          </PieChart>
          <div></div>
          <Title variant="h2" className={styles.test}>
            {priceFormatter(summa)}
          </Title>
        </div>
      </section>
    </section>
  );
};

export default Expenses;
