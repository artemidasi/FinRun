import { FC } from 'react';

import { NamesModal } from 'types/modals';

import IncomeForm from 'components/income/components/income-form';
import ExpensesForm from 'components/expenses/components/expenses-form';

import Modal from 'ui-kit/modal';
import { ModalProps } from './type';

const IncomeModal: FC<ModalProps> = (props) => {
  const { name } = props;

  return (
    <Modal title="Новый доход" name={name}>
      <IncomeForm name={name} />
    </Modal>
  );
};

const ExpensesModal: FC<ModalProps> = (props) => {
  const { name } = props;
  return (
    <Modal title="Новый расход" name={name}>
      <ExpensesForm name={name} />
    </Modal>
  );
};

const AllModals: FC = () => {
  return (
    <>
      <IncomeModal name={NamesModal.add_income} />
      <ExpensesModal name={NamesModal.add_expenses} />
    </>
  );
};

export default AllModals;
