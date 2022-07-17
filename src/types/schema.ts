import { InputType } from 'ui-kit/input/type';
import { Option } from 'ui-kit/select/type';

export interface FieldInformation<T> {
  name: keyof T;
  label: string;
  type?: InputType;
  placeholder?: string;
  options?: Option[];
}
