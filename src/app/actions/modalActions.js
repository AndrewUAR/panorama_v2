import { MODAL_OPEN, MODAL_CLOSE } from '../constants/modal.js';

export const openModal = (modalType, modalProps) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};
