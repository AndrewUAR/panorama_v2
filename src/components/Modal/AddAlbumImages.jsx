import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PulseLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { closeModal } from '../../app/actions/modalActions';
import { uploadAlbumImages } from '../../app/actions/albumActions';
import Dropzone from '../Dropzone/Dropzone';
import Button from '../Button/CustomButton';
import styles from '../../assets/jss/components/modalStyle';

const buttonLoaderStyle = css`
  display: flex;
`;

const useStyles = makeStyles(styles);

const AddAlbumImages = (props) => {
  // const socket = socketIOClient(API_ENDPOINT);
  const { closeModal, uploadAlbumImages, loadingAsync, selectedAlbum } = props;

  const [files, setFiles] = useState([]);

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleCancelCrop = () => {
    setFiles([]);
  };

  const handleUploadImages = async () => {
    const form = new FormData();
    _.forEach(files, (file) => {
      form.append('images', file);
    });
    // form.append("images", files);
    await uploadAlbumImages(form, selectedAlbum._id);
    // socket.emit('refresh', {my: 'data'});
    handleCancelCrop();
    closeModal();
  };
  const classes = useStyles();

  const dropzoneStyles = classNames({
    [classes.paperDropzone]: true,
    [classes.albumDropzone]: true
  });

  const buttonGroupStyles = classNames({
    [classes.buttonGroup]: true,
    [classes.albumButtons]: true
  });

  const deleteImg = (name) => {
    const updated = files.filter((file) => file.name !== name);
    setFiles(updated);
  };

  const thumbs = files.map((file) => (
    <div
      className={classes.thumb}
      key={file.name}
      onClick={() => deleteImg(file.name)}
    >
      <div className={classes.thumbInner}>
        <img src={file.preview} className={classes.img} alt="" />
      </div>
    </div>
  ));

  return (
    <div>
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
        <div className={dropzoneStyles}>
          <Dropzone
            multiple
            setFile={setFiles}
            message="Drag&drop photos here, or click to select files. Maximum 10 photos per one upload."
          />
          <div className={classes.thumbsContainer}>{thumbs}</div>
          {!_.isEmpty(files) && (
            <>
              <div className={buttonGroupStyles}>
                <Button color="success" onClick={handleUploadImages}>
                  {loadingAsync ? (
                    <PulseLoader
                      color="#fff"
                      css={buttonLoaderStyle}
                      loading
                      margin={2}
                    />
                  ) : (
                    <>Upload</>
                  )}
                </Button>
                <Button color="danger" onClick={() => closeModal()}>
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loadingAsync: state.async.loading,
  selectedAlbum: state.selectedAlbum
});

const actions = {
  closeModal,
  uploadAlbumImages
};

AddAlbumImages.propTypes = {
  closeModal: PropTypes.func.isRequired,
  uploadAlbumImages: PropTypes.func.isRequired,
  loadingAsync: PropTypes.bool,
  selectedAlbum: PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(AddAlbumImages);
