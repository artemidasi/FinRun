import { Variants } from 'framer-motion';
import { VariantModal } from './type';

export const variants: Variants = {
  [VariantModal.open]: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
  [VariantModal.closed]: {
    scale: 0.8,
    y: '100%',
    transition: {
      duration: 0.6,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
};
