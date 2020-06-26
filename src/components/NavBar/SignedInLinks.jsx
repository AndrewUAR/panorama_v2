import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem, Button, makeStyles, Hidden } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StarsIcon from '@material-ui/icons/Stars';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import DetailsIcon from '@material-ui/icons/Details';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Dropdown from '../Dropdown/Dropdown';
import styles from '../../assets/jss/components/navBarLinksStyle';
import { logout } from '../../app/actions/authActions';
import { getMyPhotographerProfile } from '../../app/actions/photographerActions';

const useStyles = makeStyles(styles);

const SignedInLinks = (props) => {
  const { logout, authUser, getMyPhotographerProfile } = props;
  const { profilePhoto, role, firstName } = authUser;
  const classes = useStyles();

  const dropdownButton = classNames({
    [classes.navButton]: true,
    [classes.profIcon]: true
  });

  const navButtonClasses = classNames({
    [classes.navButton]: true,
    [classes['black']]: true
  });

  const logInListClasses = classNames({
    [classes.list]: true,
    [classes.listLoggedIn]: true
  });

  const logoutUser = () => {
    logout();
  };

  const handleMyAccount = () => {
    if (role === 'photographer') {
      getMyPhotographerProfile();
    }
  };

  const signInLinks = [
    <Link className={classes.dropdownLink} to="/">
      <HomeIcon />
      Home
    </Link>,
    <Link
      className={classes.dropdownLink}
      to="/my-profile"
      onClick={() => handleMyAccount()}
    >
      <AccountCircleIcon />
      My Account
    </Link>,
    <Link className={classes.dropdownLink} to="/myBookings">
      <EventIcon />
      My Bookings
    </Link>,
    <Link className={classes.dropdownLink} to="/">
      <StarsIcon />
      Favorite photographers
    </Link>,
    <Link className={classes.dropdownLink} to="/">
      <SearchIcon />
      Explore photographers
    </Link>,
    <Link className={classes.dropdownLink} to="/settings">
      <SettingsIcon />
      Settings
    </Link>,
    <Link className={classes.dropdownLink} to="/">
      <InfoIcon />
      About Us
    </Link>,
    <Link className={classes.dropdownLink} to="/" onClick={logoutUser}>
      <ExitToAppIcon />
      Sign Out
    </Link>
  ];

  const profileImage = (
    <img src={profilePhoto} alt="ProfilePhoto" className={classes.profPhoto} />
  );

  return (
    <List className={logInListClasses}>
      <Hidden smDown>
        {role === 'user' && (
          <ListItem className={classes.listItem}>
            <Button className={navButtonClasses}>
              <Link
                to="/createPhotographerProfile"
                className={classes.dropdownLink}
              >
                <PhotoCameraIcon />
                Become a photographer
              </Link>
            </Button>
          </ListItem>
        )}
        <ListItem className={classes.listItem}>
          <Dropdown
            buttonProps={{
              className: dropdownButton,
              color: 'dark',
              image: profileImage,
              icon: <DetailsIcon />
            }}
            dropdownList={signInLinks}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button className={navButtonClasses}>
            <Link className={classes.dropdownLink} to="/" onClick={logoutUser}>
              <ExitToAppIcon />
              Sign Out
            </Link>
          </Button>
        </ListItem>
      </Hidden>
      <Hidden mdUp>
        <ListItem className={classes.drawerHeader}>
          {profileImage}
          <span>{firstName}</span>
        </ListItem>
        {signInLinks.map((link, index) => (
          <ListItem key={index} className={classes.listItem}>
            <Button className={navButtonClasses}>{link}</Button>
          </ListItem>
        ))}
      </Hidden>
    </List>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.authUser
});

const actions = {
  logout,
  getMyPhotographerProfile
};

SignedInLinks.propTypes = {
  appResponsive: PropTypes.bool,
  authUser: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  getMyPhotographerProfile: PropTypes.func
};

export default connect(mapStateToProps, actions)(SignedInLinks);
