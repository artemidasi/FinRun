import { Variants } from 'framer-motion';
import { VariantModal } from '../type';

export const variants: Variants = {
  [VariantModal.open]: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
  [VariantModal.closed]: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
};
