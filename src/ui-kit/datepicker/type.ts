import { Nullable } from 'types';

export interface DatePickerProps {
  label: string;
  onChange: (date: Nullable<Date>) => void;
  value: Date;
}
