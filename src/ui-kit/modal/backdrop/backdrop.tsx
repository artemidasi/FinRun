import React from 'react';
import { motion } from 'framer-motion';
import { VariantModal } from '../type';

import { variants } from './variants';
import styles from './backdrop.module.scss';

type BackdropProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  children,
}: BackdropProps) => (
  <motion.div
    className={styles.backdrop}
    onClick={onClick}
    variants={variants}
    initial={VariantModal.closed}
    animate={VariantModal.open}
    exit={VariantModal.closed}>
    {children}
  </motion.div>
);

export default Backdrop;
