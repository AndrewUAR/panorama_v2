import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import FormInput from '../FormInput/FormInput';
import Button from '../../components/Button/CustomButton';
import { closeModal } from '../../app/actions/modalActions';
import { updateAlbum } from '../../app/actions/albumActions';
import styles from '../../assets/jss/components/modalStyle';
import { apiEndPoint } from '../../config';

const useStyles = makeStyles(styles);

const API_ENDPOINT = apiEndPoint();

const UpdateAlbumModal = (props) => {
  const socket = socketIOClient(API_ENDPOINT);
  const { closeModal, updateAlbum, selectedAlbum } = props;

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (selectedAlbum) {
      setTitle(selectedAlbum.title);
    }
  }, [selectedAlbum]);

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateAlbum({ title }, selectedAlbum._id);
    socket.emit('refresh', {});
    closeModal();
  };

  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      disableScrollLock={false}
      open={true}
      onClose={() => closeModal()}
      className={classes.modalContainer}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <div className={classes.modalBox}>
        <form onSubmit={onSubmit} className={classes.createAlbumForm}>
          <FormInput
            id="title"
            labelText="Album Title"
            underlineColor="underlineTeal"
            inputProps={{
              placeholder: 'Album Title',
              type: 'text',
              name: 'title',
              value: title,
              autoComplete: 'off'
            }}
            onChange={onChange}
          />
          <Button type="submit" color="blue" size="sm">
            Update
          </Button>
        </form>
      </div>
    </Modal>
  );
};

const actions = {
  closeModal,
  updateAlbum
};

const mapStateToProps = (state) => ({
  selectedAlbum: state.selectedAlbum
});

UpdateAlbumModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  updateAlbum: PropTypes.func.isRequired,
  selectedAlbum: PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(UpdateAlbumModal);
