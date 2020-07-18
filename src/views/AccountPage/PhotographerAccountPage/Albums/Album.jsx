import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../../assets/jss/views/AccountPageStyle/albumStyle';

const useStyles = makeStyles(styles);

const Album = (props) => {
  const { images, title } = props;
  const classes = useStyles();

  return (
    <div className={classes.albumContainer} id="albums">
      <div className={classes.album}>
        <div className={classes.imageContainer1}>
          <img className={classes.image1} src={images[2]} alt="" />
        </div>
        <div className={classes.imageContainer2}>
          <img className={classes.image2} src={images[1]} alt="" />
        </div>
        <div className={classes.imageContainer3}>
          <img className={classes.image3} src={images[0]} alt="" />
        </div>
      </div>
      <div className={classes.albumTitle}>{title}</div>
    </div>
  );
};

Album.propTypes = {
  images: PropTypes.array
};

export default Album;
