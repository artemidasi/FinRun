import { FieldProps } from 'formik';

export interface Option {
  value: string;
  label: string;
}

export interface FormikSelectProps {
  label: string;
  fieldProps: FieldProps;
  options: Option[];
  placeholder?: string;
}
