import React, {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import GridLoader from "react-spinners/GridLoader";
import { makeStyles } from "@material-ui/core/styles";
import PermMediaIcon from '@material-ui/icons/PermMedia';
import styles from "../../../../assets/jss/views/AccountPageStyle/albumStyle";
import GridContainer from '../../../../components/Grid/GridContainer';
import { getAllAlbums, selectAlbum } from "../../../../app/actions/albumActions";
import { openModal } from "../../../../app/actions/modalActions";

const useStyles = makeStyles(styles);

const MyAlbums = props => {
  const { user, selectAlbum, loadingAsync } = props;
  const [myAlbums, setAlbums] = useState([]);
  
  const { albums } = user;

  useEffect(() => {
    if (albums) {
      setAlbums(albums);
    }
  }, [albums])


  const history = useHistory();

  const classes = useStyles();

  const handleAlbumSelect = (id) => {
    selectAlbum(id, history);
  }

  return (
    <>
      <div className={classes.head}>
        <h3 style={{color: "#fff"}}>Albums</h3>
        <h3 style={{color: "#fff"}}>Total: {myAlbums.length}</h3>
      </div>
      <GridContainer justify="space-between"  className={classes.container}>
      {loadingAsync 
        ? <GridLoader loading={true} color={"#fff"} />
        : myAlbums.map((album, index) => (
            <div className={classes.albumContainer} key={index}  onClick={() => handleAlbumSelect(album._id)}>
              {_.isEmpty(album.images) ? 
                <div className={classes.emptyAlbum}>
                  <PermMediaIcon className={classes.icon}/>
                </div>
                : <div className={classes.albumCover}>
                    {_.slice(album.images, -3, (album.length)).map((image, index) => (
                      <img key={index} src={image} className={classes.imageCover} alt=""/>
                      ))}
                  </div>
              }
              <p className={classes.albumTitle}>{album.title}</p>
            </div>
          ))
       
      }
      </GridContainer>
    </>
  )
}

const actions = ({
  getAllAlbums,
  openModal,
  selectAlbum
})

const mapStateToProps = state => ({
  user: state.auth.authUser,
  loadingAsync: state.async.loading
})

MyAlbums.propTypes = {
  getAllAlbums: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  selectAlbum: PropTypes.func
}

export default connect(mapStateToProps, actions)(MyAlbums);
