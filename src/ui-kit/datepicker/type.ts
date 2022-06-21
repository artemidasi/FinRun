import { Nullable } from 'types';

export interface DatePickerProps {
  onChange: (date: Nullable<Date>) => void;
  value: Date;
}
