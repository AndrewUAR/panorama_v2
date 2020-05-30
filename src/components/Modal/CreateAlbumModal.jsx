import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import FormInput from '../FormInput/FormInput';
import Button from "../../components/Button/CustomButton";
import { closeModal } from "../../app/actions/modalActions";
import { createAlbum } from "../../app/actions/albumActions"
import styles from "../../assets/jss/components/modalStyle";

const useStyles = makeStyles(styles);

const CreateAlbumModal = props => {

  const { closeModal, createAlbum } = props;

  const [title, setTitle] = useState('');

  const onChange = e => {
    setTitle(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    createAlbum({title});
    closeModal();
  }

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
        timeout: 500,
      }}
    >
      <div className={classes.modalBox}>
        <form onSubmit={onSubmit} className={classes.createAlbumForm}>
          <FormInput 
            id="title"
            labelText="Album Title"
            underlineColor="underlineTeal"
            inputProps={{
              placeholder: "Album Title",
              type: "text",
              name: "title",
              value: title,
              autoComplete: 'off'
            }}
            onChange={onChange}
          />
          <Button type="submit" color="blue" size="sm">Create</Button>
        </form>
      </div>
    </Modal>
  )
}

const actions = ({
  closeModal,
  createAlbum
})

CreateAlbumModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  createAlbum: PropTypes.func.isRequired
}

export default connect(null, actions)(CreateAlbumModal);
