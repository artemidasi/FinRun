import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useUnmount } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from './backdrop';

import { ModalProps, VariantModal } from './type';

import { variants } from './variants';

import CloseIcon from 'public/static/images/close.svg';

import { RootState } from 'store';
import { handleHideModal, ModalsState } from 'reducers/modals';

import styles from './modal.module.scss';
import Image from 'next/image';
import Title from 'ui-kit/title';

const Modal: FC<ModalProps> = ({ name, onClose, children, title }) => {
  useUnmount(() => {
    handleCloseModal();
  });

  const { modals } = useSelector<RootState, ModalsState>(
    ({ modals }) => modals,
  );

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(handleHideModal(name));

    if (onClose) {
      onClose();
    }
  };

  const isOpen = modals[name];

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={handleCloseModal}>
          <motion.div
            className={styles.modal}
            variants={variants}
            initial={VariantModal.closed}
            animate={VariantModal.open}
            exit={VariantModal.closed}>
            <div
              className={styles.content}
              onClick={(e) => e.stopPropagation()}>
              <button onClick={handleCloseModal} className={styles.icon_close}>
                <Image
                  src={CloseIcon}
                  alt="close_icon"
                  width={15}
                  height={15}
                  unoptimized
                />
              </button>
              <Title className={styles.title} variant="h2">
                {title}
              </Title>
              {children}
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
