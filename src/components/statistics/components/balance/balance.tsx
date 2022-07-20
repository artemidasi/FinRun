import { FC } from 'react';

import cn from 'classnames';

import Title from 'ui-kit/title';

import { priceFormatter } from 'utils/priceFormatter';

import styles from './balance.module.scss';

const BalanceChart: FC = () => {
  const incomes = 1_870_032;
  const expenses = -570_032;

  const incomesAbsolute = Math.abs(incomes);
  const expensesAbsolute = Math.abs(expenses);

  const fullMoney = incomesAbsolute + expensesAbsolute;

  const incomesPercent = Math.round((incomesAbsolute * 100) / fullMoney);
  const expensesPercent = Math.round((expensesAbsolute * 100) / fullMoney);

  const classesRow = cn('flex-row flex-justify_sb', styles.row);

  return (
    <div>
      <div className={classesRow}>
        <Title variant="h3">{priceFormatter(incomes)}</Title>

        <Title variant="h3">{priceFormatter(expenses)}</Title>
      </div>

      <div className={classesRow}>
        <Title className={styles.itemTitle} variant="h6">
          {incomesPercent}%
        </Title>

        <Title className={styles.itemTitle} variant="h6">
          {expensesPercent}%
        </Title>
      </div>

      <div className={cn(classesRow, styles.chart)}>
        <div
          style={{
            width: `${incomesPercent}%`,
          }}
          className={cn('full-height', styles.incomeValue)}
        />

        <div
          style={{
            width: `${expensesPercent}%`,
          }}
          className={cn('full-height', styles.expensesValue)}
        />
      </div>

      <div className={classesRow}>
        <div className={cn('flex-row flex-align_center', styles.incomeText)}>
          <div className={styles.point} />

          <Title variant="h6">Доходы</Title>
        </div>

        <div className={cn('flex-row flex-align_center', styles.expensesText)}>
          <div className={styles.point} />

          <Title variant="h6">Расходы</Title>
        </div>
      </div>
    </div>
  );
};

export default BalanceChart;
