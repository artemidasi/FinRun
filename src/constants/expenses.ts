import randomColor from 'randomcolor';
import { ExpenseInformation, ExpenseStatus } from 'types/expenses';

export const ColorIrrational = 'var(--error-color)';

export const expensesInformation: ExpenseInformation = {
  [ExpenseStatus.communications]: {
    name: 'Связь и интернет',
    status: ExpenseStatus.communications,
    value: 0,
    color: randomColor({
      hue: 'blue',
    }),
  },
  [ExpenseStatus.hypothec]: {
    name: 'Ипотека',
    status: ExpenseStatus.hypothec,
    value: 0,
    color: randomColor({
      hue: 'yellow',
    }),
  },
  [ExpenseStatus.food]: {
    name: 'Еда',
    status: ExpenseStatus.food,
    value: 0,
    color: randomColor({
      hue: 'pink',
    }),
    isIrrational: true,
  },
};

export const expensesAllStatus: ExpenseStatus[] = [
  ExpenseStatus.communications,
  ExpenseStatus.hypothec,
  ExpenseStatus.food,
];
