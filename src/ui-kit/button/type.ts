export interface ButtonProps {
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  type?: 'submit';
  disabled?: boolean;
}

export enum ButtonSize {
  S = 'S',
  M = 'M',
  L = 'L',
}

export enum ButtonVariant {
  contained = 'contained',
  text = 'text',
  outlined = 'outlined',
}
