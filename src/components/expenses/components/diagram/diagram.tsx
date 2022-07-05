import { ColorIrrational } from 'constants/expenses';
import { CSSProperties, FC } from 'react';

import cn from 'classnames';

import { PieChart, Pie, Cell } from 'recharts';
import { ExpenseConfig } from 'types/expenses';
import Title from 'ui-kit/title';
import { priceFormatter } from 'utils/priceFormatter';

import styles from './diagram.module.scss';
import { DiagramProps } from './type';

const Diagram: FC<DiagramProps> = (props) => {
  const { expenses } = props;

  const summa = expenses.reduce((summa, { value }) => {
    return summa + value;
  }, 0);

  const irrationalItem: ExpenseConfig = {
    name: 'Ирациональные',
    status: 'irrational',
    value: expenses.reduce((summa, { value, isIrrational }) => {
      return isIrrational ? summa + value : summa;
    }, 0),
    color: ColorIrrational,
  };

  const information: ExpenseConfig[] = [...expenses, irrationalItem];

  const getIrrationalItem = (irrationalItem: ExpenseConfig) => {
    const { name, color, value } = irrationalItem;

    const style: CSSProperties = {
      backgroundColor: color,
    };

    return (
      <li className={cn('flex-row flex-align_center', styles.irrationalItem)}>
        <div className="flex-row flex-align_center">
          <div style={style} className={styles.legendPoint} />

          <Title isNoBold variant="h5">
            {name}
          </Title>
        </div>

        <Title className={styles.legendPrice} variant="h5">
          {priceFormatter(value)}
        </Title>
      </li>
    );
  };

  return (
    <section className={cn('flex-align_center', styles.container)}>
      <div className={styles.diagramContainer}>
        <PieChart width={280} height={280}>
          <Pie
            data={information}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}>
            {information.map(({ name, color }) => (
              <Cell key={name} fill={color} />
            ))}
          </Pie>
        </PieChart>
        <div className={cn('flex-column', styles.diagramText)}>
          <Title isNoBold variant="h5" className={styles.diagramDate}>
            за апрель
          </Title>
          <Title variant="h2">{priceFormatter(summa)}</Title>
        </div>
      </div>

      <ul className={styles.legendList}>
        {information
          .filter((item) => item.status !== 'irrational')
          .map((expense) => {
            const { name, status, color, value } = expense;

            const style: CSSProperties = {
              backgroundColor: color,
            };

            return (
              <li
                key={status}
                className={cn('flex-row flex-align_center', styles.legendItem)}>
                <div className="flex-row flex-align_center">
                  <div style={style} className={styles.legendPoint} />
                  <Title isNoBold variant="h5">
                    {name}
                  </Title>
                </div>

                <Title className={styles.legendPrice} variant="h5">
                  {priceFormatter(value)}
                </Title>
              </li>
            );
          })}

        {getIrrationalItem(irrationalItem)}
      </ul>
    </section>
  );
};

export default Diagram;
