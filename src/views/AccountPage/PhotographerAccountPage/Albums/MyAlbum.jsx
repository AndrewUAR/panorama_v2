import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridLoader from 'react-spinners/GridLoader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { openModal } from '../../../../app/actions/modalActions';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import GridContainer from '../../../../components/Grid/GridContainer';
import styles from '../../../../assets/jss/views/AccountPageStyle/albumStyle';
import {
  deleteAlbumImages,
  deleteMyAlbum
} from '../../../../app/actions/albumActions';

const useStyles = makeStyles(styles);

const MyAlbum = (props) => {
  const {
    selectedAlbum,
    openModal,
    loadingAsync,
    deleteAlbumImages,
    deleteMyAlbum
  } = props;
  const { title, images, _id } = selectedAlbum;

  const history = useHistory();

  const classes = useStyles();

  const handleDeleteAlbum = () => {
    deleteMyAlbum(images, _id, history);
  };

  const dropdownButtons = [
    <Button
      className={classes.dropdownButton}
      onClick={() => openModal('AddAlbumImages')}
    >
      <AddPhotoAlternateIcon />
      Add Images
    </Button>,
    <Button
      className={classes.dropdownButton}
      onClick={() => openModal('UpdateAlbumModal')}
    >
      <UpdateIcon />
      Update
    </Button>,
    <Button className={classes.dropdownButton} onClick={handleDeleteAlbum}>
      <DeleteIcon />
      Delete
    </Button>
  ];

  return (
    <div>
      <div className={classes.head}>
        <Dropdown
          buttonProps={{
            className: classes.albumTitle,
            text: title,
            color: 'dark',
            icon: <ArrowDropDownIcon />
          }}
          dropdownList={dropdownButtons}
        />
        <h3 style={{ color: '#fff' }}>{images ? images.length : 0} photos</h3>
      </div>
      <GridContainer justify="center" className={classes.container}>
        {loadingAsync ? (
          <GridLoader loading color="#fff" />
        ) : (
          <>
            <GridList cellHeight={200} cols={3}>
              {images.map((image, index) => (
                <GridListTile
                  key={index}
                  rowcols={1}
                  className={classes.imageContainer}
                >
                  <GridListTileBar
                    titlePosition="top"
                    actionIcon={
                      <DeleteForeverIcon
                        onClick={() => deleteAlbumImages([image], _id)}
                      />
                    }
                    actionPosition="right"
                    className={classes.titleBar}
                  />
                  <img
                    className={classes.albumImage}
                    src={image}
                    onClick={() => openModal('ImageGalleryModal')}
                    alt=""
                  />
                </GridListTile>
              ))}
            </GridList>
          </>
        )}
      </GridContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedAlbum: state.selectedAlbum,
  loadingAsync: state.async.loading
});

const actions = {
  openModal,
  deleteAlbumImages,
  deleteMyAlbum
};

MyAlbum.propTypes = {
  selectedAlbum: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  deleteAlbumImages: PropTypes.func.isRequired,
  deleteMyAlbum: PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(MyAlbum);
