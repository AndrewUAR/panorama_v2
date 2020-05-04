import React, {useState, useEffect, useRef, useMemo} from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import _ from "lodash";
import socketIOClient from 'socket.io-client';
import FormInput from '../../../components/FormInput/FormInput';
import styles from "../../../assets/jss/views/SettingsPageStyle/settingsStyle";
import { makeStyles } from '@material-ui/core';
import Button from "../../../components/Button/CustomButton";
import LockIcon from '@material-ui/icons/Lock';
import { validateInputs } from "../../../app/helper/validateInput";
import { updatePassword } from "../../../app/actions/authActions";
import { apiEndPoint } from '../../../config';
import { deleteError } from '../../../app/actions/errorActions';

const useStyles = makeStyles(styles);

const API_ENDPOINT = apiEndPoint();

const GeneralSettingsForm = props => {
  const socket = socketIOClient(API_ENDPOINT);

  const { updatePassword, errorMsg } = props;

  const [user, setUser] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: ''
  });

  const [error, setError] = useState({
    passwordCurrentError: '',
    passwordError: '',
    passwordConfirmError: ''
  })

  const prevState = useRef(user);

  const notTouched = useMemo(() => _.isEqual(prevState.current, user), [prevState, user]);;
 
  const { passwordCurrent, password, passwordConfirm} = user;
  const { passwordError, passwordConfirmError, passwordCurrentError } = error;
  const classes = useStyles();

  const onChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(deleteError())
    }
  }, [dispatch])

  const updateUserPassword = e => {
    e.preventDefault();
    const isValid = validateInputs(user, setError);
    if (isValid) updatePassword(user);
    socket.emit('refresh', {});
    if (!errorMsg && isValid) {
      resetForm();
    }
  }

  const resetForm = () => {
    setUser({
      passwordCurrent: '',
      password: '',
      passwordConfirm: ''
    })
  }


  return (
    <div className={classes.formContainer}>
      <h2 className={classes.sectionTitle}>Security Settings</h2>
      <form className={classes.inputForm} onSubmit={updateUserPassword}>
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
                name: "passwordCurrent",
                value: passwordCurrent,
                autoComplete: 'off'
              }}
              error={passwordCurrentError}
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
                name: "password",
                value: password,
                autoComplete: 'off'
              }}
              error={passwordError}
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
        {errorMsg && <p className={classes.error}>{errorMsg}</p>}
        <div className={classes.buttonGroup}>
          <Button type="submit" color="success" disabled={notTouched}>Update</Button>
          <Button color="danger">Cancel</Button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  errorMsg: state.error.error
})

const actions = ({
  updatePassword
})

GeneralSettingsForm.propTypes = {
  updatePassword: PropTypes.func.isRequired,
  errorMsg: PropTypes.string
}

export default connect(mapStateToProps, actions)(GeneralSettingsForm);
