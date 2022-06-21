import { MouseEvent } from 'react';

export interface InputProps {
  type?: 'text' | 'number';
  value?: string;
  onClick?: (event: MouseEvent) => void;
  onChange?: (newValue: string) => void;
  errorText?: string;
}
