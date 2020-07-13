import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { ButtonGroup, useMediaQuery } from '@material-ui/core';
import Button from '../../../components/Button/CustomButton';
import styles from '../../../assets/jss/views/AccountPageStyle/AccountPageStyle';

const useStyles = makeStyles(styles);

const Stats = (props) => {
  const { user } = props;
  const { photographer } = user;
  const { ratingsAverage, responseRate, hired, ratingsQuantity } = photographer;
  const classes = useStyles();

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.statsArea}>
      <ButtonGroup
        orientation={isLargeScreen ? 'vertical' : 'horizontal'}
        color="inherit"
        aria-label="vertical outlined primary button group"
        classes={{
          root: classes.buttonsGroup,
          grouped: classes.buttonsAccountSwitch
        }}
      >
        <Button>User Profile</Button>
        <Button>Photographer Profile</Button>
      </ButtonGroup>
      <div className={classes.stats}>
        <div className={classes.groupItem}>
          <div className={classes.statsItem}>
            Rating:
            <Rating
              name="half-rating-read"
              value={ratingsAverage}
              precision={0.1}
              readOnly
            />
          </div>
          <div className={classes.statsItem}>
            Response rate:&nbsp;{responseRate}
          </div>
        </div>
        <div className={classes.groupItem}>
          <div className={classes.statsItem}>Hired: {hired}</div>
          <div className={classes.statsItem}>Reviews: {ratingsQuantity}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.authUser
});

export default connect(mapStateToProps)(Stats);
