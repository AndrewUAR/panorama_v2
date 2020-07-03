import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { closeModal } from '../../app/actions/modalActions';
import { updateMe } from '../../app/actions/userActions';
import Dropzone from '../Dropzone/Dropzone';
import Button from '../Button/CustomButton';

import styles from '../../assets/jss/components/modalStyle';
import CropPhoto from '../Cropper/CropPhoto';
import { apiEndPoint } from '../../config';

const buttonLoaderStyle = css`
  display: flex;
`;

const useStyles = makeStyles(styles);

const API_ENDPOINT = apiEndPoint();

const CropModal = (props) => {
  const socket = socketIOClient(API_ENDPOINT);
  const { closeModal, updateMe, loadingAsync } = props;

  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
  };

  const handleUploadImage = async () => {
    const form = new FormData();
    form.append('profilePhoto', image);
    await updateMe(form);
    socket.emit('refresh', {});
    handleCancelCrop();
    closeModal();
  };

  const classes = useStyles();

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
        <div className={classes.paperDropzone}>
          {_.isEmpty(files) && (
            <Dropzone
              multiple={false}
              setFile={setFiles}
              message="Drag&drop photo here, or click to select file"
            />
          )}
          {!_.isEmpty(files) && (
            <CropPhoto setImage={setImage} imagePreview={files[0].preview} />
          )}
          {!_.isEmpty(files) && (
            <div className={classes.imgPreview}>
              <div
                className="img-preview"
                style={{
                  minHeight: '200px',
                  minWidth: '200px',
                  overflow: 'hidden'
                }}
              />
              <div className={classes.buttonGroup}>
                <Button color="success" onClick={handleUploadImage}>
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
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loadingAsync: state.async.loading
});

const actions = {
  closeModal,
  updateMe
};

CropModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  updateMe: PropTypes.func.isRequired,
  loadingAsync: PropTypes.bool
};

export default connect(mapStateToProps, actions)(CropModal);
