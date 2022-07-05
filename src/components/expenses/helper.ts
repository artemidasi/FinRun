import { expensesAllStatus, expensesInformation } from 'constants/expenses';
import { ExpenseConfig, ExpenseItem } from 'types/expenses';

export const getDiagramData = (items: ExpenseItem[]): ExpenseConfig[] => {
  return expensesAllStatus.map((status) => {
    return {
      ...expensesInformation[status],
      value: items
        .filter((item) => item.status === status)
        .reduce<number>((summa, item) => {
          return summa + item.price;
        }, 0),
    };
  });
};
