import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../../components/FormInput/FormInput';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from "@material-ui/icons/Email";
import styles from "../../../assets/jss/views/SettingsPageStyle/settingsStyle";
import { makeStyles } from '@material-ui/core';
import Button from "../../../components/Button/CustomButton";
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(styles);

const GeneralSettingsForm = props => {
  const [user, setUser] = useState({
    currentPassword: '',
    newPassword: '',
    passwordConfirm: ''
  });

  const [error, setError] = useState({
    currentPasswordError: '',
    newPasswordError: '',
    passwordConfirmError: ''
  })
  
  const { currentPassword, newPassword, passwordConfirm} = user;
  const { currentPasswordError, newPasswordError, passwordConfirmError } = error;
  const classes = useStyles();

  const onChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }



  return (
    <div className={classes.formContainer}>
      <form className={classes.inputForm}>
        <div className={classes.inputSection}>
          <h3>Password</h3>
          <div className={classes.inputField}>
            <LockIcon className={classes.inputFieldIcon}/>
            <FormInput 
              id="currentPassword"
              labelText="Current Password"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: "Current Password",
                type: "password",
                name: "currentPassword",
                value: currentPassword,
                autoComplete: 'off'
              }}
              error={currentPasswordError}
              onChange={onChange}
            />
          </div>
          <div className={classes.inputField}>
            <LockIcon className={classes.inputFieldIcon}/>
            <FormInput 
              id="newPassword"
              labelText="New Password"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: "New Password",
                type: "password",
                name: "newPassword",
                value: newPassword,
                autoComplete: 'off'
              }}
              error={newPasswordError}
              onChange={onChange}
            />
          </div>
          <div className={classes.inputField}>
            <LockIcon className={classes.inputFieldIcon}/>
            <FormInput 
              id="passwordConfirm"
              labelText="Password Confirm"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: "Password Confirm",
                type: "password",
                name: "passwordConfirm",
                value: passwordConfirm,
                autoComplete: 'off'
              }}
              error={passwordConfirmError}
              onChange={onChange}
            />
          </div>
        </div>
        <div className={classes.buttonGroup}>
          <Button color="success">Update</Button>
          <Button color="danger">Cancel</Button>
        </div>
      </form>
    </div>
  )
}

GeneralSettingsForm.propTypes = {

}

export default GeneralSettingsForm
