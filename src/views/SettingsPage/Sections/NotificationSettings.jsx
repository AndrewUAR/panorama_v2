import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import Switch from "../../../components/Switch/Switch";
import styles from "../../../assets/jss/views/SettingsPageStyle/settingsStyle";

const useStyles = makeStyles(styles);

const NotificationSettings = props => {

  const [checked, setChecked] = useState({
    passwordChange: true,
    photoSessionRequest: true,
    photoSessionAccepted: true,
    photoSessionReminder: true,
    photoSessionCancel: true,
    tokensPurchase: true
  })

  const { 
    passwordChange, 
    photoSessionRequest, 
    photoSessionAccepted, 
    photoSessionReminder, 
    photoSessionCancel,
    tokensPurchase 
  } = checked;

  const classes = useStyles();

 
  const onChange = e => {
    const { name, checked } = e.target;
    setChecked(prevState => ({
      ...prevState,
      [name]: checked
    }))
  }

  const inputSectionClasses = classNames({
    [classes.inputSection]: true,
    [classes.notificationSection]: true
  });


  return (
    <div className={classes.formContainer}>
      <h2 className={classes.sectionTitle}>Notifications Settings</h2>
      <div className={inputSectionClasses}>
        <Switch 
          labelProps={{
            value: true,
            label: 'Send a notification, when password was changed.',
            labelPlacement: 'start'
          }}
          switchProps={{
            checked: passwordChange,
            name: 'passwordChange'
          }}
          onChange={onChange}
        />
        <Switch 
          labelProps={{
            value: true,
            label: 'Send a notification, when a new photo session request was created.',
            labelPlacement: 'start'
          }}
          switchProps={{
            checked: photoSessionRequest,
            name: 'photoSessionRequest'
          }}
          onChange={onChange}
        />
        <Switch 
          labelProps={{
            value: true,
            label: 'Send a notification, when a photographer accepted your photo session request.',
            labelPlacement: 'start'
          }}
          switchProps={{
            checked: photoSessionAccepted,
            name: 'photoSessionAccepted'
          }}
          onChange={onChange}
        />
        <Switch 
          labelProps={{
            value: true,
            label: 'Send a reminder 24hrs before a photo session.',
            labelPlacement: 'start'
          }}
          switchProps={{
            checked: photoSessionReminder,
            name: 'photoSessionReminder'
          }}
          onChange={onChange}
        />
        <Switch 
          labelProps={{
            value: true,
            label: 'Send a confirmation, that a photo session was successfully canceled.',
            labelPlacement: 'start'
          }}
          switchProps={{
            checked: photoSessionCancel,
            name: 'photoSessionCancel'
          }}
          onChange={onChange}
        />
        <Switch 
          labelProps={{
            value: true,
            label: 'Send a confirmation, that tokens were successfully purchased.',
            labelPlacement: 'start'
          }}
          switchProps={{
            checked: tokensPurchase,
            name: 'tokensPurchase'
          }}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

NotificationSettings.propTypes = {

}

export default NotificationSettings
