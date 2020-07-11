import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import styles from '../../../assets/jss/views/PhotographerPage/headerSectionStyle';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(styles);

const HeaderSection = (props) => {
  const { selectedPhotographer } = props;
  const {
    firstName,
    lastName,
    profilePhoto,
    photographer
  } = selectedPhotographer;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.upperSubContainer}>Upper</div>
      <div className={classes.photoWrapper}>
        <img src={profilePhoto} className={classes.profilePhoto} alt="" />
      </div>
      <div className={classes.bottomSubContainer}>
        <span className={classes.name}>
          {firstName}&nbsp;{lastName}
        </span>
        <div className={classes.stats}>
          <span>Hired:&nbsp;27</span>
          <Rating
            name="read-only"
            value={photographer.ratingsAverage}
            precision={0.1}
            readOnly
          />
          <span>Rated:&nbsp;23</span>
        </div>
      </div>
    </div>
  );
};

HeaderSection.propTypes = {
  selectedPhotographer: PropTypes.object.isRequired
};

export default HeaderSection;
