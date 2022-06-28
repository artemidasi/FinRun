import { FieldProps } from 'formik';

export interface Option {
  value: string;
  label: string;
}

export interface FormikSelectProps {
  fieldProps: FieldProps;
  options: Option[];
  placeholder?: string;
}
