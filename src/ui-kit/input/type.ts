import { FieldProps } from 'formik';
import { MouseEvent } from 'react';

export interface InputProps {
  type?: InputType;
  label: string;
  placeholder?: string;
  value?: string;
  onClick?: (event: MouseEvent) => void;
  onChange?: (newValue: string) => void;
  errorText?: string;
}

export interface FieldInputProps {
  fieldProps: FieldProps;
  label: string;
  placeholder?: string;
  type?: InputType;
}

export type InputType = 'text' | 'number' | 'email' | 'date' | 'password';
