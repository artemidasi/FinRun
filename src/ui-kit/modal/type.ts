import { NamesModal } from 'types/modals';

export interface ModalProps {
  onClose?: () => void;
  children?: React.ReactNode;
  name: NamesModal;
  title: string;
}

export enum VariantModal {
  open = 'open',
  closed = 'closed',
}
