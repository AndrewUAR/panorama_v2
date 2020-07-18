import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import GridLoader from 'react-spinners/GridLoader';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../../../assets/jss/views/AccountPageStyle/albumStyle';
import GridContainer from '../../../../components/Grid/GridContainer';
import Button from '../../../../components/Button/CustomButton';
import {
  getAllAlbums,
  selectAlbum
} from '../../../../app/actions/albumActions';
import { openModal } from '../../../../app/actions/modalActions';
import GridItem from '../../../../components/Grid/GridItem';
import Album from './Album';

const useStyles = makeStyles(styles);

const MyAlbums = (props) => {
  const { albums, selectAlbum, loadingAsync, openModal, getAllAlbums } = props;

  useEffect(() => {
    getAllAlbums();
    // eslint-disable-next-line
  }, []);

  const history = useHistory();

  const classes = useStyles();

  const handleAlbumSelect = (id) => {
    selectAlbum(id, history);
  };

  return (
    <>
      <div className={classes.head}>
        <h3 style={{ color: '#fff' }}>Albums</h3>
        <h3 style={{ color: '#fff' }}>
          Total:
          {albums.length}
        </h3>
      </div>
      <div className={classes.container}>
        <div className={classes.addButton}>
          <Button
            endIcon={<AddIcon />}
            onClick={() => openModal('CreateAlbumModal')}
          >
            Create New Album
          </Button>
        </div>
        <GridContainer justify="center" className={classes.albums}>
          {loadingAsync ? (
            <GridLoader loading color="#fff" />
          ) : (
            albums.map((album, index) => (
              <GridItem
                xs={10}
                sm={6}
                md={6}
                lg={4}
                key={index}
                className={classes.itemContainer}
                onClick={() => handleAlbumSelect(album._id)}
              >
                <Album
                  images={_.slice(album.images, -3, album.length)}
                  title={album.title}
                />
              </GridItem>
            ))
          )}
        </GridContainer>
      </div>
    </>
  );
};

const actions = {
  getAllAlbums,
  openModal,
  selectAlbum
};

const mapStateToProps = (state) => ({
  user: state.auth.authUser,
  loadingAsync: state.async.loading,
  albums: state.albums.albums
});

MyAlbums.propTypes = {
  getAllAlbums: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  selectAlbum: PropTypes.func
};

export default connect(mapStateToProps, actions)(MyAlbums);
