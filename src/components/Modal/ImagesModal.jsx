import React from 'react';
import { connect } from 'react-redux';
import './ImageGallery.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { closeModal, openModal } from '../../app/actions/modalActions';
import styles from '../../assets/jss/components/modalStyle';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import { GridLoader } from 'react-spinners';

const useStyles = makeStyles(styles);

const ImagesModal = (props) => {
  const { album, loading, openModal, closeModal } = props;

  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalContainer}
      open
      disableScrollLock={false}
      onClose={() => closeModal()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <div>
        <GridContainer classes={{root: classes.images}}>
          {loading ? (
            <GridLoader loading color="#fff" />
          ) : (
            <>
              {album.images.map((image, index) => (
                <GridItem xs={6} sm={4} md={4} lg={3} key={index}>
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.albumImage}
                      src={image}
                      onClick={() => openModal('ImageGalleryModal', index)}
                      alt=""
                    />
                  </div>
                </GridItem>
              ))}
            </>
          )}
        </GridContainer>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  album: state.albums.selectedAlbum,
  loading: state.async.fetching
});

const actions = {
  openModal,
  closeModal
}

ImagesModal.propTypes = {
  albums: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(ImagesModal);
