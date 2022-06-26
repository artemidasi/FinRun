export interface ButtonProps {
  onClick: () => void;
  size?: ButtonSize;
  className?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
}

export enum ButtonSize {
  S = 'S',
  M = 'M',
  L = 'L',
}
