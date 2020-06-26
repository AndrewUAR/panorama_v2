import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core'; 
import styles from '../../assets/jss/views/homePageStyle';
import Button from '../../components/Button/CustomButton';
import ExploreIcon from '@material-ui/icons/Explore';
import PublicIcon from '@material-ui/icons/Public';
import PlaceInput from '../../components/PlaceInput/PlaceInput';

const useStyles = makeStyles(styles);

const HeaderSection = (props) => {
  const [location, setLocation] = useState('');
  const classes = useStyles();

  const onChange = e => {
    const { value } = e.target;
    setLocation(value);
  }
  return (
    <div className={classes.pageHeader}>
      <div className={classes.container}>
        <div className={classes.searchButton}>
          <Button justIcon pulseButton color="blue" size="lg"><ExploreIcon className={classes.buttonIcon} /></Button>
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

export default HeaderSection;