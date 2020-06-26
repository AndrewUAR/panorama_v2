import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/views/AccountPageStyle/sidebarStyle';
import Button from '../../components/Button/CustomButton';
import MessageIcon from '@material-ui/icons/Message';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import EventIcon from '@material-ui/icons/Event';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RateReviewIcon from '@material-ui/icons/RateReview';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(styles);

const Sidebar = (props) => {
  const { user } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleAlbums = () => {
    history.push('/my-profile/albums');
  };

  const handleSummary = () => {
    history.push('/my-profile');
  };

  return (
    <div className={classes.photoArea}>
      <div className={classes.box}>
        <div style={{ height: '100%', width: '100%' }}>
          <img
            src={user.profilePhoto}
            alt="userPhoto"
            className={classes.profPhoto}
          />
          <h3 className={classes.userName} onClick={() => handleSummary()}>
            {user.firstName} {user.lastName}
          </h3>
        </div>
        <div className={classes.buttonGroup}>
          <Button fullWidth color="transparent" sideBarButton>
            <MessageIcon />
            My Messages
          </Button>
          <Button
            fullWidth
            color="transparent"
            sideBarButton
            onClick={() => handleAlbums()}
          >
            <BurstModeIcon />
            My Albums
          </Button>
          <Button fullWidth color="transparent" sideBarButton>
            <EventIcon />
            My Bookings
          </Button>
          <Button fullWidth color="transparent" sideBarButton>
            <DateRangeIcon />
            My Calender
          </Button>
          <Button fullWidth color="transparent" sideBarButton>
            <RateReviewIcon />
            My Reviews
          </Button>
          <Button fullWidth color="transparent" sideBarButton>
            <CreditCardIcon />
            My Payouts
          </Button>
          <Button fullWidth color="transparent" sideBarButton href="/settings">
            <SettingsIcon />
            Account Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.authUser
});

Sidebar.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(Sidebar);
