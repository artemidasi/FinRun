import { FC } from 'react';

import Achievements from './components/achievements';

import useModal from 'hooks/useModal.hook';

import { NamesModal } from 'types/modals';

import FinanceContainer from 'components/finance-container';
import { FinanceItem } from 'components/finance-container/components/finance-list/type';
import { FinanceButtonInformation } from 'components/finance-container/type';

const Income: FC = () => {
  const { handleOpenModal } = useModal();

  const TEST_DATA: FinanceItem[] = [
    {
      title: 'Зарплата',
      status: 'активный',
      price: 80_000,
    },
    {
      title: 'Девиденды',
      status: 'пассивный',
      price: 13_000,
    },
    {
      title: 'Подарок на др',
      status: 'пассивный',
      price: 2_000,
    },
  ];

  const buttonInformation: FinanceButtonInformation = {
    text: 'Внести новый доход',
    onClick: handleOpenModal(NamesModal.add_income),
  };

  return (
    <section>
      <FinanceContainer
        items={TEST_DATA}
        buttonInformation={buttonInformation}
      />

      <Achievements />
    </section>
  );
};

export default Income;
