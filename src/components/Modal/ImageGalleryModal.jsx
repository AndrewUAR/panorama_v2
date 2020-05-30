import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import socketIOClient from 'socket.io-client';
import PropTypes from "prop-types";
import classNames from 'classnames';
import {PulseLoader} from "react-spinners";
import { css } from "@emotion/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { closeModal } from "../../app/actions/modalActions";
import { uploadAlbumImages } from "../../app/actions/albumActions";
import Dropzone from "../Dropzone/Dropzone";
import Button from "../Button/CustomButton";
import styles from "../../assets/jss/components/modalStyle";
import { apiEndPoint } from '../../config';
import ImageGallery from 'react-image-gallery';
import { DialogContent } from '@material-ui/core';

const useStyles = makeStyles(styles);

const ImageGalleryModel = props => {
  const { selectedAlbum } = props;
  const [images, setImages] = useState('');

  useEffect(() => {
    const imagesOriginal = _.map(selectedAlbum.images, function(img) {return {original: img, thumbnail: img}})
    console.log(imagesOriginal)
    setImages(imagesOriginal)
  }, []);

  
  const classes = useStyles();
  return (
    <div>
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
          timeout: 500,
        }}
      >
        <DialogContent style={{height: "80%"}}>
          <ImageGallery items={images} />
        </DialogContent>
      </Modal>
      </div>
  )
}

const mapStateToProps = state => ({
  selectedAlbum: state.selectedAlbum
});

const actions = ({
  closeModal
})

ImageGalleryModel.propTypes = {

}

export default connect(mapStateToProps, actions)(ImageGalleryModel);
