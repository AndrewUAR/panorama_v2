import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
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
  const [loading, setLoading] = useState(false);
  const { coordinates } = query;
  const [newGeo, setNewGeo] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (coordinates.length > 1 && newGeo) {
      history.push('/photographers');
      getPhotographers(query);
    }
    // eslint-disable-next-line
  }, [coordinates, getPhotographers, history, query]);

  const onChange = (e, value) => {
    setNewGeo(true);
    setCoordinates(value.coordinates);
  };

  const iconClasses = classNames({
    [classes.buttonIcon]: true,
    [classes.iconAnimation]: loading
  });

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
              setLoading(true);
              setNewGeo(true);
              getMyLocation(setCoordinates);
            }}
          >
            <ExploreIcon className={iconClasses} />
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
            trigger={setNewGeo}
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
