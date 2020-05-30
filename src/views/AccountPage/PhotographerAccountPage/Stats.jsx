import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import styles from "../../../assets/jss/views/AccountPageStyle/AccountPageStyle";
import StarHalfIcon from '@material-ui/icons/StarHalf';
import DescriptionIcon from '@material-ui/icons/Description';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Button from "../../../components/Button/CustomButton";
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Stats = props => {

  const classes = useStyles();

  return (
    <div className={classes.statsArea}>
      <div className={classes.stats}>
        <p>Rating: <Rating name="half-rating-read" defaultValue={3.7} precision={0.1} readOnly /></p>
        <p><DescriptionIcon />Highered: 37</p>
        <p><RateReviewIcon />Reviews: 37</p>
      </div>
      <div className={classes.buttonsAccountSwitch}>
        <ButtonGroup
          orientation="vertical"
          color="inherit"
          aria-label="vertical outlined primary button group"
        >
          <Button>User Profile</Button>
          <Button>Photographer Profile</Button>
        </ButtonGroup> 
      </div>
    </div>
  )
}

Stats.propTypes = {

}

export default Stats
