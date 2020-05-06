import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CropModal from "./CropModal";
import BecomePhotographerModal from "./BecomePhotographerModal";

const modalLookup = {
  CropModal,
  BecomePhotographerModal
}

const ModalManager = props => {
  const { currentModal } = props;
  let renderedModal;

  if (currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />
  }

  return (
    <div>
      {renderedModal}
    </div>
  )
}

const mapStateToProps = state => ({
  currentModal: state.modal
})

ModalManager.propTypes = {
  currentModal: PropTypes.object
}

export default connect(mapStateToProps)(ModalManager);
