import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { makeStyles, List, ListItem } from '@material-ui/core';
import styles from '../../../assets/jss/views/SettingsPageStyle/sidebarStyle';
import Button from '../../../components/Button/CustomButton';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { openModal } from '../../../app/actions/modalActions';

const useStyles = makeStyles(styles);

const SideBar = (props) => {
  const { user, onChange, openModal, loadingAsync } = props;
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <div className={classes.photoArea}>
        {loadingAsync ? (
          <div className={classes.photoLoader}>
            <CircleLoader color={'#fff'} loading={true} size="100px" />
          </div>
        ) : (
          <img
            src={user.profilePhoto}
            alt="userPhoto"
            className={classes.profPhoto}
          />
        )}
        <Button
          color="blue"
          uploadButton
          onClick={() => openModal('CropModal')}
        >
          Update photo
        </Button>
      </div>
      <p className={classes.userName}>
        {user.firstName} {user.lastName}
      </p>
      <List className={classes.sideBarButtons}>
        <ListItem>
          <Button
            settingsButton
            color="transparent"
            onClick={() => onChange('general')}
          >
            <SettingsIcon />
            General
            <ArrowForwardIosIcon />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            settingsButton
            color="transparent"
            onClick={() => onChange('security')}
          >
            <LockIcon />
            Security
            <ArrowForwardIosIcon />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            settingsButton
            color="transparent"
            onClick={() => onChange('notifications')}
          >
            <NotificationImportantIcon />
            Notifications
            <ArrowForwardIosIcon />
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.authUser,
  loadingAsync: state.async.loading
});

const actions = {
  openModal
};

SideBar.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(SideBar);
