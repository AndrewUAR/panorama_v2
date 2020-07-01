import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import styles from '../../assets/jss/views/resetPasswordPageStyle.js';
import CustomCard from '../../components/Card/Card';
import CardContent from '../../components/Card/CardContent';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/CustomButton';
import CardFooter from '../../components/Card/CardFooter';
import CardHeader from '../../components/Card/CardHeader';
import { validateInputs } from '../../app/helper/validateInput';
import { resetPassword } from '../../app/actions/authActions';

const useStyles = makeStyles(styles);

const ResetPasswordPage = (props) => {
  const { errorMsg, resetPassword, authenticated, history } = props;

  const [user, setUser] = useState({
    password: '',
    passwordConfirm: ''
  });

  const [error, setError] = useState({
    passwordError: '',
    passwordConfirmError: ''
  });

  const { password, passwordConfirm } = user;
  const { passwordError, passwordConfirmError } = error;
  const { token } = props.match.params;

  const classes = useStyles();

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  }, [authenticated, history]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInputs(user, setError);
    if (isValid) resetPassword(user, token);
  };

  return (
    <div className={classes.pageHeader}>
      <div className={classes.container}>
        <GridContainer justify="flex-start">
          <GridItem xs={12} sm={6} md={5} className={classes.borderWrap}>
            <CustomCard color="black">
              <div className={classes.cardHeaderContainer}>
                <CardHeader login color="blue">
                  <h3 className={classes.cardTitle}>Reset Password</h3>
                </CardHeader>
              </div>
              <form className={classes.cardForm} onSubmit={onSubmit}>
                <CardContent>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                      <div className={classes.cardInput}>
                        <LockIcon className={classes.cardInputIcon} />
                        <FormInput
                          id="password"
                          labelText="New Password"
                          underlineColor="underlineTeal"
                          inputProps={{
                            placeholder: 'New Password',
                            type: 'password',
                            name: 'password',
                            value: password,
                            autoComplete: 'off'
                          }}
                          error={passwordError}
                          onChange={onChange}
                        />
                      </div>
                      <div className={classes.cardInput}>
                        <LockIcon className={classes.cardInputIcon} />
                        <FormInput
                          id="passwordConfirm"
                          labelText="Confirm New Password"
                          underlineColor="underlineTeal"
                          inputProps={{
                            placeholder: 'Confirm New Password',
                            type: 'password',
                            name: 'passwordConfirm',
                            value: passwordConfirm,
                            autoComplete: 'off'
                          }}
                          error={passwordConfirmError}
                          onChange={onChange}
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                  {errorMsg && <p className={classes.error}>{errorMsg}</p>}
                </CardContent>
                <CardFooter>
                  <Button type="submit" color="blue">
                    Reset
                  </Button>
                </CardFooter>
              </form>
            </CustomCard>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMsg: state.error.error,
  authenticated: state.auth.authenticated
});

const actions = {
  resetPassword
};

ResetPasswordPage.propTypes = {
  error: PropTypes.string,
  authenticated: PropTypes.bool,
  resetPassword: PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(ResetPasswordPage);
