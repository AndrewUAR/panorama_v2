import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import _ from "lodash";
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import GridLoader from "react-spinners/GridLoader";
import styles from "../../../../assets/jss/views/AccountPageStyle/albumStyle";
import GridContainer from '../../../../components/Grid/GridContainer';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { openModal } from "../../../../app/actions/modalActions";
import Button from '@material-ui/core/Button';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { deleteAlbumImages, deleteMyAlbum } from "../../../../app/actions/albumActions";
import ImageGalleryModal from "../../../../components/Modal/ImageGalleryModal";
import { apiEndPoint } from "../../../../config";

const API_ENDPOINT = apiEndPoint();

const useStyles = makeStyles(styles);

const MyAlbum = props => {
  const { selectedAlbum, openModal, loadingAsync, deleteAlbumImages, deleteMyAlbum } = props;
  const socket = socketIOClient(API_ENDPOINT);
  const [loading, setLoading] = useState(true);
  const { title, images, _id } = selectedAlbum;

  const history = useHistory();

  useEffect(() => {
    setLoading(false);
    socket.emit('refresh', {});
  }, [])

  const classes = useStyles();

  const handleDeleteAlbum = () => {
    deleteMyAlbum(images, _id, history);
  }

  const dropdownButtons = [
    <Button
      className={classes.dropdownButton}
      onClick={() => openModal('AddAlbumImages')}
    ><AddPhotoAlternateIcon />Add Images</Button>,
    <Button
      className={classes.dropdownButton} 
      onClick={() => openModal('UpdateAlbumModal')}
    ><UpdateIcon />Update</Button>,
    <Button 
      className={classes.dropdownButton}
      onClick={handleDeleteAlbum}
    ><DeleteIcon />Delete</Button>
  ];

  return (
    <div>
      <div className={classes.head}>
        <Dropdown
          buttonProps={{
            className: classes.albumTitle,
            text: title,
            color: "dark",
            icon: <ArrowDropDownIcon />
          }}
          dropdownList={dropdownButtons}
        />
        <h3 style={{color: "#fff"}}>{images ? images.length : 0} photos</h3>
      </div>
      <GridContainer justify="center" className={classes.container}>
      {(loadingAsync)
        ? <GridLoader loading={true} color={"#fff"} />
        : <>
            <GridList cellHeight={200} className={classes.gridList} cols={3}>
              {images.map((image, index) => (
                <GridListTile key={index} rowcols={1}>
                  <GridListTileBar
                    titlePosition="top"
                    actionIcon={
                      <DeleteForeverIcon onClick={() => deleteAlbumImages([image], _id)}/>
                    }
                    actionPosition="right"
                    className={classes.titleBar}
                  />
                  <img style={{width: '100%', height: '100%'}} src={image} onClick={() => openModal('ImageGalleryModal')}/>
                </GridListTile>
              ))}
            </GridList>
          </>
      }
      </GridContainer>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedAlbum: state.selectedAlbum,
  loadingAsync: state.async.loading
})

const actions = ({
  openModal,
  deleteAlbumImages, 
  deleteMyAlbum
})

MyAlbum.propTypes = {
  selectedAlbum: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  deleteAlbumImages: PropTypes.func.isRequired,
  deleteMyAlbum: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(MyAlbum);
