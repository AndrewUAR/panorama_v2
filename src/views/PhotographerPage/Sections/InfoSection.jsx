import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import styles from '../../../assets/jss/views/PhotographerPage/infoSection';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

const useStyles = makeStyles(styles);

const InfoSection = (props) => {
  const { selectedPhotographer } = props;
  const { photographer, email } = selectedPhotographer;
  const { introduction, categories, languages, location } = photographer;

  const classes = useStyles();

  return (
    <GridContainer className={classes.container}>
      <GridItem xs={12} sm={12} md={12} className={classes.upperSection}>
        <div className={classes.intro}>
          <span className={classes.field}>Introduction:</span>
          <p>{introduction}</p>
        </div>
        <div>
          <span className={classes.field}>My expertise:</span>
          {categories.join(', ')}
        </div>
        <div>
          <span className={classes.field}>Speaks:</span>
          {languages.join(', ')}
        </div>
        <div>
          <span className={classes.field}>Location:</span>
          {location.placeName}
        </div>
      </GridItem>
      <GridContainer className={classes.bottomSection}>
        <GridItem xs={12} sm={6} md={6} className={classes.priceSection}>
          <div>
            <div>
              <span className={classes.field}>Response Rate:</span> 95%
            </div>
            <div>
              <span className={classes.field}>Price per hour:</span> 45$
            </div>
            <div>
              <span className={classes.field}>Whole day event:</span> 800$
            </div>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} className={classes.socialSection}>
          <div>
            <div>
              <span className={classes.field}>Email:</span> {email}
            </div>
            <div>
              <span className={classes.field}>Facebook:</span> {email}
            </div>
            <div>
              <span className={classes.field}>Instagram:</span> {email}
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </GridContainer>
  );
};

InfoSection.propTypes = {
  selectedPhotographer: PropTypes.object.isRequired
};

export default InfoSection;
