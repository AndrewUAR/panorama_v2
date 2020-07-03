import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItemIcon } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import styles from '../../assets/jss/views/loginPageStyle.js';
import CustomCard from '../../components/Card/Card';
import CardContent from '../../components/Card/CardContent';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/CustomButton';
import CardFooter from '../../components/Card/CardFooter';
import CardHeader from '../../components/Card/CardHeader';
import { loginUser } from '../../app/actions/authActions';
import { deleteError } from '../../app/actions/errorActions';

const useStyles = makeStyles(styles);

const buttonLoaderStyle = css`
  display: flex;
`;

const LoginPage = (props) => {
  const {
    loginUser,
    authenticated,
    history,
    errorMsg,
    deleteError,
    loadingAsync
  } = props;

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  }, [authenticated, history]);

  const classes = useStyles();

  useEffect(
    () => () => {
      deleteError();
    },
    // eslint-disable-next-line
    []
  );

  const { email, password } = user;

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
  };

  return (
    <div className={classes.pageHeader}>
      <div className={classes.container}>
        <GridContainer justify="flex-start">
          <GridItem xs={12} sm={6} md={5} className={classes.borderWrap}>
            <CustomCard color="black">
              <div className={classes.cardHeaderContainer}>
                <CardHeader login color="blue">
                  <h3 className={classes.cardTitle}>Login</h3>
                  <List className={classes.cardTitleIcons}>
                    <ListItemIcon>
                      <Button justIcon size="lg">
                        <i className="fab fa-facebook" />
                      </Button>
                    </ListItemIcon>
                    <ListItemIcon>
                      <Button justIcon>
                        <i className="fab fa-google" />
                      </Button>
                    </ListItemIcon>
                    <ListItemIcon>
                      <Button justIcon>
                        <i className="fab fa-twitter" />
                      </Button>
                    </ListItemIcon>
                  </List>
                </CardHeader>
              </div>
              <CardContent>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <form onSubmit={onSubmit}>
                      <div className={classes.cardInput}>
                        <EmailIcon className={classes.cardInputIcon} />
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
                          onChange={onChange}
                        />
                      </div>
                      <div className={classes.cardInput}>
                        <LockIcon className={classes.cardInputIcon} />
                        <FormInput
                          id="password"
                          labelText="Password"
                          underlineColor="underlineTeal"
                          inputProps={{
                            placeholder: 'Password',
                            type: 'password',
                            name: 'password',
                            value: password,
                            autoComplete: 'off'
                          }}
                          onChange={onChange}
                        />
                      </div>
                      <CardFooter>
                        {errorMsg && (
                          <p className={classes.error}>{errorMsg}</p>
                        )}
                        <Button type="submit" color="blue">
                          {loadingAsync ? (
                            <PulseLoader
                              color="#fff"
                              css={buttonLoaderStyle}
                              loading
                              margin={2}
                            />
                          ) : (
                            <>Sign In</>
                          )}
                        </Button>
                        <List className={classes.cardFooterLinks}>
                          <Link to="/forgotPassword">Forgot Password</Link>
                          <Link to="/register">Sign Up</Link>
                        </List>
                      </CardFooter>
                    </form>
                  </GridItem>
                </GridContainer>
              </CardContent>
            </CustomCard>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  errorMsg: state.error.error,
  loadingAsync: state.async.loading
});

const actions = {
  loginUser,
  deleteError
};

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
  deleteError: PropTypes.func.isRequired,
  errorMsg: PropTypes.string
};

export default connect(mapStateToProps, actions)(LoginPage);
