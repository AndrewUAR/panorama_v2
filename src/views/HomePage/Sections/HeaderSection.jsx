import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import PublicIcon from '@material-ui/icons/Public';
import styles from '../../../assets/jss/views/HomePageStyle/homePageStyle';
import Button from '../../../components/Button/CustomButton';
import PlaceInput from '../../../components/PlaceInput/PlaceInput';
import { getPhotographers } from '../../../app/actions/photographerActions.js';

const useStyles = makeStyles(styles);

const HeaderSection = (props) => {
  const { getPhotographers } = props;
  const [location, setLocation] = useState('');
  const classes = useStyles();
  const history = useHistory();

  const onChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };
  return (
    <div className={classes.pageHeader}>
      <div className={classes.container}>
        <div className={classes.searchButton}>
          <Button
            justIcon
            pulseButton
            color="blue"
            size="lg"
            onClick={() => {
              getPhotographers();
              history.push('/photographers');
            }}
          >
            <ExploreIcon className={classes.buttonIcon} />
          </Button>
          <span className={classes.buttonText}>Find photographer near you</span>
        </div>
        <div className={classes.divider}>
          <span>OR</span>
        </div>
        <form className={classes.formInput}>
          <PublicIcon className={classes.formInputIcon} />
          <PlaceInput
            id="location"
            labelText="Enter Desire Location"
            placeholder="Enter Desire Location"
            value={location}
            onChange={onChange}
            underlineColor="underlineTeal"
          />
        </form>
      </div>
    </div>
  );
};

const actions = {
  getPhotographers
};

export default connect(null, actions)(HeaderSection);
