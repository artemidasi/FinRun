import { FC } from 'react';

import useModal from 'hooks/useModal.hook';

import { NamesModal } from 'types/modals';

import FinanceContainer from 'components/finance-container';
import { FinanceItem } from 'components/finance-container/components/finance-list/type';
import { FinanceButtonInformation } from 'components/finance-container/type';

// import styles from './income.module.scss';

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

  return (
    <section>
      <FinanceContainer
        items={TEST_DATA}
        buttonInformation={buttonInformation}
      />
    </section>
  );
};

export default Expenses;
