import { FieldProps } from 'formik';
import { MouseEvent } from 'react';

export interface InputProps {
  type?: InputType;
  placeholder?: string;
  value?: string;
  onClick?: (event: MouseEvent) => void;
  onChange?: (newValue: string) => void;
  errorText?: string;
}

export interface FieldInputProps {
  fieldProps: FieldProps;
  placeholder?: string;
  type?: InputType;
}

export type InputType = 'text' | 'number';
