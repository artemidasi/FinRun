export interface FinanceListProps {
  items: FinanceItem[];
}

export interface FinanceItem {
  title: string;
  status: string;
  price: number;
}
