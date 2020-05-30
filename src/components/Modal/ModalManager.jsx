import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CropModal from "./CropModal";
import BecomePhotographerModal from "./BecomePhotographerModal";
import CreateAlbumModal from "./CreateAlbumModal";
import UpdateAlbumModal from "./UpdateAlbumModel";
import AddAlbumImages from "./AddAlbumImages";
import ImageGalleryModal from "./ImageGalleryModal"

const modalLookup = {
  CropModal,
  BecomePhotographerModal,
  CreateAlbumModal,
  UpdateAlbumModal,
  AddAlbumImages,
  ImageGalleryModal
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
