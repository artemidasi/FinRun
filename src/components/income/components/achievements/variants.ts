import { Variants } from 'framer-motion';
import { VarianAchievement } from './type';

export const variants: Variants = {
  [VarianAchievement.open]: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
  [VarianAchievement.closed]: {
    scale: 0.7,
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
};
