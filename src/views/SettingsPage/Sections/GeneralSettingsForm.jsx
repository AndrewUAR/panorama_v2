import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';
import _ from 'lodash';
import { PulseLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect, useDispatch } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core';
import styles from '../../../assets/jss/views/SettingsPageStyle/settingsStyle';
import FormInput from '../../../components/FormInput/FormInput';
import Button from '../../../components/Button/CustomButton';
import { apiEndPoint } from '../../../config';
import { updateMe } from '../../../app/actions/userActions';
import {
  validateInputs,
  sanitizeInputs
} from '../../../app/helper/validateInput';
import { deleteError } from '../../../app/actions/errorActions';

const buttonLoaderStyle = css`
  display: flex;
`;

const useStyles = makeStyles(styles);

const API_ENDPOINT = apiEndPoint();

const GeneralSettingsForm = (props) => {
  const socket = socketIOClient(API_ENDPOINT);

  const { updateMe, authUser, errorMsg, loadingAsync } = props;

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: ''
  });

  const [error, setError] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    emailConfirmError: ''
  });

  const cancelUpdate = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (authUser) {
      setUser({
        firstName: authUser.firstName,
        lastName: authUser.lastName,
        email: authUser.email,
        emailConfirm: authUser.email
      });
    }
  }, [authUser]);

  const prevStateUser = _.pick(authUser, 'firstName', 'lastName', 'email');
  const currentUser = _.omit(user, 'emailConfirm');
  const disableSubmit = useMemo(() => _.isEqual(prevStateUser, currentUser), [
    prevStateUser,
    currentUser
  ]);

  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(deleteError());
    },
    [dispatch]
  );

  const { firstName, lastName, email, emailConfirm } = user;
  const {
    firstNameError,
    lastNameError,
    emailError,
    emailConfirmError
  } = error;
  const classes = useStyles();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateProfile = (e) => {
    e.preventDefault();
    const isValid = validateInputs(user, setError);
    sanitizeInputs({ firstName, lastName }, setUser);
    if (isValid) updateMe(_.omit(user, 'emailConfirm'));
    socket.emit('refresh', {});
  };

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.sectionTitle}>General Settings</h2>
      <form className={classes.inputForm} onSubmit={updateProfile}>
        <div className={classes.inputSection}>
          <h3>Full Name</h3>

          <div className={classes.inputField}>
            <PersonIcon className={classes.inputFieldIcon} />
            <FormInput
              id="firstName"
              labelText="First Name"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: 'First Name',
                type: 'text',
                name: 'firstName',
                value: firstName,
                autoComplete: 'off'
              }}
              error={firstNameError}
              onChange={onChange}
              // onFocus={emptyField}
            />
          </div>
          <div className={classes.inputField}>
            <PersonIcon className={classes.inputFieldIcon} />
            <FormInput
              id="lastName"
              labelText="Last Name"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: 'Last Name',
                type: 'text',
                name: 'lastName',
                value: lastName,
                autoComplete: 'off'
              }}
              error={lastNameError}
              onChange={onChange}
              // onFocus={emptyField}
            />
          </div>
        </div>
        <div className={classes.inputSection}>
          <h3>Email</h3>
          <div className={classes.inputField}>
            <EmailIcon className={classes.inputFieldIcon} />
            <FormInput
              id="email"
              labelText="Email"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: 'Email',
                type: 'email',
                name: 'email',
                value: email,
                autoComplete: 'off'
              }}
              error={emailError}
              onChange={onChange}
              // onFocus={emptyField}
            />
          </div>
          <div className={classes.inputField}>
            <EmailIcon className={classes.inputFieldIcon} />
            <FormInput
              id="emailConfirm"
              labelText="Email Confirm"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: 'Email Confirm',
                type: 'email',
                name: 'emailConfirm',
                value: emailConfirm,
                autoComplete: 'off'
              }}
              error={emailConfirmError}
              onChange={onChange}
              // onFocus={emptyField}
            />
          </div>
        </div>
        {errorMsg && <p className={classes.error}>{errorMsg}</p>}
        <div className={classes.buttonGroup}>
          <Button type="submit" color="success" disabled={disableSubmit}>
            {loadingAsync && !disableSubmit ? (
              <PulseLoader
                color="#fff"
                css={buttonLoaderStyle}
                loading
                margin={2}
              />
            ) : (
              <>Update</>
            )}
          </Button>
          <Button color="danger" onClick={cancelUpdate}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.authUser,
  errorMsg: state.error.error,
  loadingAsync: state.async.loading
});

const actions = {
  updateMe
};

GeneralSettingsForm.propTypes = {
  authUser: PropTypes.object.isRequired,
  updateMe: PropTypes.func.isRequired,
  errorMsg: PropTypes.string
};

export default connect(mapStateToProps, actions)(GeneralSettingsForm);
