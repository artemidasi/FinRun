import { useDispatch } from 'react-redux';
import {
  handleHideModal,
  handleShowModal,
  handleHideAllModals,
} from 'reducers/modals';

import { NamesModal } from 'types/modals';

const useModal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = (name: NamesModal) => () => {
    dispatch(handleHideModal(name));
  };

  const handleOpenModal = (name: NamesModal) => () => {
    dispatch(handleShowModal(name));
  };

  const handleCloseAllModals = () => {
    dispatch(handleHideAllModals());
  };

  return {
    handleCloseModal,
    handleOpenModal,
    handleCloseAllModals,
  };
};

export default useModal;
