import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/views/AccountPageStyle/AccountPageStyle';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

const useStyles = makeStyles(styles);

const InfoArea = (props) => {
  const { user } = props;

  const { introduction, languages, categories, location } = user.photographer;

  const classes = useStyles();

  return (
    <GridContainer className={classes.info}>
      <GridItem xs={12} sm={12} md={8} className={classes.generalInfo}>
        <div>
          <span className={classes.field}>Introduction:</span>
          <div>{introduction}</div>
        </div>
        <div>
          <span className={classes.field}>Languages:</span>
          {languages.join(', ')}
        </div>
        <div>
          <span className={classes.field}>Categories:</span>
          {categories.join(', ')}
        </div>
        <div>
          <span className={classes.field}> Serve Location:</span>
          {location.placeName}
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={4} className={classes.priceAndMedia}>
        <div className={classes.prices}>
          <div>
            <span className={classes.field}>Price per hour:</span>$45
          </div>
          <div>
            <span className={classes.field}>Whole day event:</span>$800
          </div>
        </div>
        <div className={classes.socialMedia}>
          <div>
            <span className={classes.field}>Email:</span>
            {user.email}
          </div>
          <div>
            <span className={classes.field}>Facebook:</span>
            {user.email}
          </div>
          <div>
            <span className={classes.field}>Instagram:</span>
            {user.email}
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.authUser
});

InfoArea.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(InfoArea);
