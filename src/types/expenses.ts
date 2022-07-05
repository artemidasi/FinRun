export type ExpenseInformation = {
  [k in ExpenseStatus]: ExpenseConfig;
};

export interface ExpenseConfig {
  name: string;
  value: number;
  status: ExpenseStatus | 'irrational';
  color: string;
  isIrrational?: boolean;
}

export interface ExpenseItem {
  title: string;
  status: ExpenseStatus;
  price: number;
}

export enum ExpenseStatus {
  communications = 'связь',
  hypothec = 'ипотека',
  food = 'еда',
}
