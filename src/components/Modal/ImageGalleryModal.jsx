import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { closeModal } from '../../app/actions/modalActions';

import styles from '../../assets/jss/components/modalStyle';

import ImageGallery from 'react-image-gallery';
import { DialogContent } from '@material-ui/core';

const useStyles = makeStyles(styles);

const ImageGalleryModel = (props) => {
  const { selectedAlbum, closeModal } = props;
  const [images, setImages] = useState('');

  useEffect(() => {
    const imagesOriginal = _.map(selectedAlbum.images, function (img) {
      return { original: img, thumbnail: img };
    });
    setImages(imagesOriginal);
  }, [selectedAlbum.images]);

  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalContainer}
      open={true}
      disableScrollLock={false}
      onClose={() => closeModal()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <DialogContent style={{ maxHeight: '100%', width: '80%' }}>
        <ImageGallery
          style={{ maxHeight: '100%' }}
          items={images}
          useBrowserFullscreen={false}
        />
      </DialogContent>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  selectedAlbum: state.selectedAlbum
});

const actions = {
  closeModal
};

ImageGalleryModel.propTypes = {};

export default connect(mapStateToProps, actions)(ImageGalleryModel);
