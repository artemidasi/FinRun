import { FC } from 'react';

import { NamesModal } from 'types/modals';

import IncomeForm from 'components/income/components/income-form';
import ExpensesForm from 'components/expenses/components/expenses-form';

import Modal from 'ui-kit/modal';

const IncomeModals: FC = () => {
  return (
    <Modal title="Новый доход" name={NamesModal.add_income}>
      <IncomeForm />
    </Modal>
  );
};

const ExpensesModals: FC = () => {
  return (
    <Modal title="Новый расход" name={NamesModal.add_expenses}>
      <ExpensesForm />
    </Modal>
  );
};

const AllModals: FC = () => {
  return (
    <>
      <IncomeModals />
      <ExpensesModals />
    </>
  );
};

export default AllModals;
