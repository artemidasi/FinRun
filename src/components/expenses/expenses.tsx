import { FC } from 'react';

import useModal from 'hooks/useModal.hook';

import { NamesModal } from 'types/modals';

import FinanceContainer from 'components/finance-container';
import { ExpenseItem, ExpenseStatus } from 'types/expenses';
import { FinanceButtonInformation } from 'components/finance-container/type';
import Diagram from './components/diagram';
import Title from 'ui-kit/title';

import styles from './expenses.module.scss';

import { getDiagramData } from './helper';

const Expenses: FC = () => {
  const { handleOpenModal } = useModal();

  const TEST_DATA: ExpenseItem[] = [
    {
      title: 'Мобильный 1',
      status: ExpenseStatus.communications,
      price: 600,
    },
    {
      title: 'Мобильный 2',
      status: ExpenseStatus.communications,
      price: 600,
    },
    {
      title: 'Ипотека',
      status: ExpenseStatus.hypothec,
      price: 40_000,
    },
    {
      title: 'Еда',
      status: ExpenseStatus.food,
      price: 16_200,
    },
  ];

  const buttonInformation: FinanceButtonInformation = {
    text: 'Внести новый расход',
    onClick: handleOpenModal(NamesModal.add_expenses),
  };

  return (
    <section>
      <FinanceContainer
        items={TEST_DATA}
        buttonInformation={buttonInformation}
      />

      <section className={styles.spendingContainer}>
        <Title variant="h2">Траты по категориям</Title>

        <Diagram expenses={getDiagramData(TEST_DATA)} />
      </section>
    </section>
  );
};

export default Expenses;
