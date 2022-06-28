export interface ButtonProps {
  onClick?: () => void;
  size?: ButtonSize;
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
