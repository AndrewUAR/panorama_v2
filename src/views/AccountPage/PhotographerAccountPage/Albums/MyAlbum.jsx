import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridLoader from 'react-spinners/GridLoader';
import LazyLoad from 'react-lazy-load';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Button from '../../../../components/Button/CustomButton';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { openModal } from '../../../../app/actions/modalActions';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import GridContainer from '../../../../components/Grid/GridContainer';
import styles from '../../../../assets/jss/views/AccountPageStyle/albumStyle';
import {
  deleteAlbumImages,
  deleteMyAlbum
} from '../../../../app/actions/albumActions';
import GridItem from '../../../../components/Grid/GridItem';

const useStyles = makeStyles(styles);

const MyAlbum = (props) => {
  const {
    selectedAlbum,
    openModal,
    loading,
    deleteAlbumImages,
    deleteMyAlbum
  } = props;
  const { title, images, _id } = selectedAlbum;

  console.log(_id);

  const history = useHistory();

  const classes = useStyles();

  const handleDeleteAlbum = () => {
    deleteMyAlbum(_id, history);
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
            className: classes.dropdownButton,
            text: title,
            color: 'dark',
            icon: <ArrowDropDownIcon />
          }}
          dropdownList={dropdownButtons}
        />
        <div className={classes.totalResults}>
          {images ? images.length : 0} photos
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.addButton}>
          <Button
            endIcon={<AddIcon />}
            onClick={() => openModal('AddAlbumImages')}
          >
            Add Images
          </Button>
        </div>
        <GridContainer className={classes.images}>
          {loading ? (
            <GridLoader loading color="#fff" />
          ) : (
            <>
              {images.map((image, index) => (
                <GridItem xs={6} sm={4} md={4} lg={3} key={index}>
                  <LazyLoad height={190} debounce={false} throttle={250}>
                    <div className={classes.imageContainer}>
                      <div className={classes.deleteIcon}>
                        <DeleteForeverIcon
                          onClick={() => deleteAlbumImages([image], _id)}
                        />
                      </div>
                      <img
                        className={classes.albumImage}
                        src={image}
                        onClick={() => openModal('ImageGalleryModal')}
                        alt=""
                      />
                    </div>
                  </LazyLoad>
                </GridItem>
              ))}
            </>
          )}
        </GridContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedAlbum: state.albums.selectedAlbum,
  loading: state.async.fetching
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
