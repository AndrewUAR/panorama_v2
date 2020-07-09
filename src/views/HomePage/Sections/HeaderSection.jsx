import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import PublicIcon from '@material-ui/icons/Public';
import styles from '../../../assets/jss/views/HomePageStyle/homePageStyle';
import Button from '../../../components/Button/CustomButton';
import PlaceInput from '../../../components/PlaceInput/PlaceInput';
import { getPhotographers } from '../../../app/actions/photographerActions.js';
import { getMyLocation } from '../../../app/helper/helperFunctions';
import { setCoordinates } from '../../../app/actions/photographersQueryActions.js';

const useStyles = makeStyles(styles);

const HeaderSection = (props) => {
  const { getPhotographers, setCoordinates, query } = props;
  const { coordinates } = query;
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setCoordinates([]);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (coordinates.length > 1) {
      getPhotographers(query);
      history.push('/photographers');
    }
  }, [coordinates, getPhotographers]);

  const onChange = (e, value) => {
    setCoordinates(value.coordinates);
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
              getMyLocation(setCoordinates);
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
            // value={location}
            onChangeLocation={onChange}
            underlineColor="underlineTeal"
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  query: state.photographersQuery
});

const actions = {
  getPhotographers,
  setCoordinates
};

export default connect(mapStateToProps, actions)(HeaderSection);
