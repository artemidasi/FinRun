import { InputType } from 'ui-kit/input/type';
import { Option } from 'ui-kit/select/type';

export interface FieldInformation<T> {
  name: keyof T;
  type?: InputType;
  placeholder?: string;
  options?: Option[];
}
