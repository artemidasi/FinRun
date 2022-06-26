import { FinanceItem } from './components/finance-list/type';

export interface FinanceContainerProps {
  buttonInformation: FinanceButtonInformation;
  items: FinanceItem[];
}

export interface FinanceButtonInformation {
  text: string;
  onClick: () => void;
}
