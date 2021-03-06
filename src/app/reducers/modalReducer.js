import { createReducer } from '../helper/reducerUtils';
import { MODAL_OPEN, MODAL_CLOSE } from '../constants/modal.js';

const initialState = null;

const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

const closeModal = (state) => null;

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
